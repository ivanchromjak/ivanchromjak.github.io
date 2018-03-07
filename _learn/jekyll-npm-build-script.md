---
categories: [Design & Development, Jekyll]
tags: npm
icon: npm
---

Jekyll build process example using npm scripts to build `assets/js/main.min.js`. The scripts copies vendor sass partials to `_sass/vendor/` directory and vendor javascripts to `assets/js/vendor/` directory, concatenates and minifies js files and watches for changes.

1. Install [Node.js](https://nodejs.org/en/)
2. Install all of the dependencies by running `npm install` in theme root directory, this will install all SCSS and JS dependencies, compress and concatenate JS scripts into `main.min.js`.
3. Availabele commands:
  * `npm install`
  * `npm run watch`

{% gist 8a2304f171c264af3afb192e1aa75c3e %}
