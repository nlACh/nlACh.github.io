---
layout: "layouts/page"
title: "Conferences"
tags:
  - "mypubs"
---

{% for item in collections.curated %}
    <p>{% include "partials/pubs_id.njk" %}</p>
    </br>
{% endfor %}