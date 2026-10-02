---
title: 'Fix Up, Look Sharp! | Zine & Happy Hour'
layout: 'layouts/services.html'
cssFile: "../services.css"
service: 'Finishing Services'
---
{% for service in services.services %}
{% if service.keyword === "finishing" %}
<p>{{ service.longdesc }}</p>
{% endif %}{% endfor %}
<div class="rotate-right kooky-border border-color-four"></div>
<div class="rotate-left kooky-border border-color-three"></div>
