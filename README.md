# Template for quick prototyping

This is a repository for quick templating a web site.

Using pug as template engin,  
Bulma as css framework, and  
Vuejs as javascript framework.

- [Template for quick prototyping](#template-for-quick-prototyping)
  - [Prerequest](#prerequest)
    - [mac](#mac)
  - [Install](#install)
  - [Use](#use)
  - [Start templating](#start-templating)
  - [Reference](#reference)

## Prerequest

1. node
2. yarn
3. python

### mac

best by installing with [**HomeBrew**](https://brew.sh/)

```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

`brew install node`

`brew install yarn`

## Install

Download this repo, unzip it and cd to the root dir.

`yarn install`

## Use

Run the following command inside the project directory.  
`yarn start`

and go to http://0.0.0.0:3000/helloworld.html , http://0.0.0.0:3000/index.html or any other pages.

## Start templating

The build process runs the following tasks in series.

1. Looks for all the pug files in src/pages and compile them to dist/ folder, which a simple node server serves.
2. Compiles all the sass files to dist/css.
3. Minify all the src/js files to dist/js/xxx.min.js
4. Copy all the files in the src/assets to dist/assets
5. Serve the files and open browser
6. Auto watch changed files and reload browser

Create your own template in the src/template and extend them or include them in the pages.  

**Note** that the process looks only for sass files under src/styles (css files are ignored) and will not search any deeper directories. So you can have multiple sass files as entry point that includes files in deeper directories.  
e.g.

```shell
styles/

├── entry1.sass
├── entry2.sass
└── some_dir
│   └── component1.sass
├── another_dir
    └── component2.sass
```

## Reference

type|site
-|-
javascript|https://www.w3schools.com/js/default.asp
html|https://www.w3schools.com/html/
css|https://www.w3schools.com/css/default.asp
vue|https://vuejs.org/v2/guide/
pug|https://pugjs.org/api/getting-started.html
bulma|https://bulma.io/documentation/
sass|https://sass-lang.com/guide