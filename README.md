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
    - [Basic Example](#basic-example)
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

### Basic Example

`src/pages/index.pug`

```pug
extends ../templates/base

block scripts
  script(src="https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.min.js")

block styles
  link(rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css")
  link(rel="stylesheet" href='../styles/main.sass')

block content
  #app.has-text-centered
    p#msg {{message}}

  script(type='text/javascript' src='./js/main.js')
```

`src/js/main.js`

```javascript
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello World!',
  }
})
```

`src/styles/main.sass`

```sass
#msg
  color: blue
```

Create your own template in the src/template and extend them or include them in the pages.

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