---
layout: post
title: Concatenate JS Files
categories: [Web Development]
tags: javascript assets
---

Minimise HTTP requests by including all JS files inside a single `assets/js/main.js` file.

{% raw %}
```js
---
---

{% include_relative uikit.min.js %}
{% include_relative uikit-icons.min.js %}
```
{% endraw %}

Define and point to our `main.js` client-side script file in `_includes/head.html`

{% raw %}
```liquid
<script src="{{ "/assets/js/main.js" | relative_url }}"></script>
```
{% endraw %}
