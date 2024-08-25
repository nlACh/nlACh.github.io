---
layout: "layouts/list"
eleventyNavigation:
  key: posts
  title: Blog
  order: 2
pagination:
  data: "collections.posts"
  size: 5
permalink: "/posts{% if pagination.pageNumber > 0 %}/{{ pagination.pageNumber + 1 }}{% endif %}/index.html"
title: "Blog"
---
