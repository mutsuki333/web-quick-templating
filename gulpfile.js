const { src, dest, watch, series } = require('gulp')

const pug = require('gulp-pug')
const sass = require('gulp-sass')

const plumber = require('gulp-plumber');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const babel = require('gulp-babel');
const changed = require('gulp-changed');

const browserSync = require('browser-sync').create()


// Compile pug files into HTML
function html() {
  return src('src/pages/*.pug')
    .pipe(changed('dist'))
    .pipe(pug())
    .pipe(dest('dist'))
}

// Compile sass files into CSS
function styles() {
  return src('src/styles/*.sass')
    .pipe(changed('dist/css'))
    .pipe(plumber())
    .pipe(sass({
      includePaths: ['src/styles'],
      errLogToConsole: true,
      outputStyle: 'compressed',
      onError: browserSync.notify
    }))
    .pipe(dest('dist/css'))
    .pipe(browserSync.stream())
}

// Copy assets
function assets() {
  return src('src/assets/**/*')
    .pipe(dest('dist/assets'))
}

//js minify
function minify(){
  return src(['src/js/*.js', '!src/js/*.min.js'])
    .pipe(changed('dist/js'))
    .pipe(plumber())
    .pipe(babel({
      "presets": ["@babel/preset-env"]
    }))
    .pipe(uglify())
    .pipe(rename({extname: '.min.js'}))
    .pipe(dest('dist/js'))
    .pipe(browserSync.stream());
}

// Serve and watch sass/pug files for changes
function watchAndServe() {
  browserSync.init({
    server: 'dist',
  })

  watch('src/js/**/*.js', minify)
  watch('src/styles/**/*.sass', styles)
  watch('src/pages/*.pug', html)
  watch('src/templates/*.pug', html)
  watch('src/assets/**/*', assets)
  watch('dist/*.html').on('change', browserSync.reload)
}


exports.html = html
exports.styles = styles
exports.minify = minify
exports.watch = watchAndServe
exports.default = series(html, styles, minify, assets, watchAndServe)