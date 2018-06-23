---
layout: post
categories: [Web Development]
tags: font
---

Boost website performance by using the system font of a user operating system because the browser doesn't have to download any font files.

Set of `@font-face` rules created by Jonathan Neal let us use the native system font of the OS running the browser.

## Install

This package can be installed with npm: `npm install --save system-font-css`.

### Jekyll

In Jekyll, importing the SASS partial directly from `node_modules` directory won't work so we have to copy the package to `_sass` directory manually or using npm copy `ncp` package:

```bash
ncp node_modules/system-font-css/ _sass/system-font-css/
```

## Load

Import SCSS partial:

```scss
// System system fonts
@import "system-font-css/_system-font";
```

## Use

```css
body {
    font-family: system-ui;
}
blockquote {
    font: italic 300 system-ui;
}
```

System font offers eight variations of the `system-ui` font family:
* light (300)
* _light italic_
* normal (400)
* _normal italic_
* medium (500)
* _medium italic_
* **bold** (700)
* **_bold italic_**
