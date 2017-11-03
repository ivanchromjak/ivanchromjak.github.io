---
layout: post
categories: [Development, Jekyll]
tags: [dev, jekyll, ssl]
---

Add Twitter share button to your Jekyll template.

Set Twitter username in Jekyll config file `_config.yml`:

```yaml
twitter_username: ivanchromjak
```

Create `_includes/share.html` file:

{% raw %}
```liquid
<div class="share">
  Share this on &rarr;
  <a class="twitter" href="https://twitter.com/intent/tweet?text={{ page.title }}&url={{ site.url }}{{ page.url }}&via={{ site.twitter_username }}&related={{ site.twitter_username }}" rel="nofollow" target="_blank" title="Share on Twitter"><span class="icon icon--twitter">{% include icon-twitter.svg %}</span> Twitter</a>
</div>
```
{% endraw %}

Include the `share.html` in post layout file `_layouts/post.html`:

{% raw %}
```html
{% include share.html %}
```
{% endraw %}
