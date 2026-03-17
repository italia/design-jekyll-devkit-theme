---
layout: page
title: "Blog"
nav_title: "Blog"
nav_order: 3
permalink: /blog/
---

{% for post in site.posts %}
<div class="mb-3">
  <it-card>
    <a slot="title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
    <span slot="text">{{ post.excerpt | strip_html | truncatewords: 30 }}</span>
    <time slot="footer" class="it-card-date" datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%e %B %Y" }}</time>
  </it-card>
</div>
{% endfor %}