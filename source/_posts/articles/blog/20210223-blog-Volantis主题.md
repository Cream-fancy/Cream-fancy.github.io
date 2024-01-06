---
title: Blog Volantis 主题适配
date: 2021-02-23 10:57:18
updated: 2021-02-23 10:57:18
author: Forrest
tags:
categories: 博客
---

## 源码修改

`layout\archive.ejs`

```git
- <% if (post.archive == undefined || post.archive == true) { %>
+ <% if ((post.archive == undefined || post.archive == true) && typeof post.custom_type == 'undefined') { %>
```

`layout\_partial\head.ejs`

```git
+ <meta name="referrer" content="no-referrer" />
+ <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/volantis-x/cdn-fontawesome-pro@master/css/all.min.css">
```

`layout\_partial\article.ejs`

```git
+ <% let prev_post = post.prev; while (prev_post) { if (prev_post.custom_type == page.custom_type) { break } prev_post = prev_post.prev; } %>
- <% if (post.prev) { %>
-   <a class='prev' href='<%- url_for(post.prev.path) %>'>
-     <p class='title'><%- post.prev.title || '' %><i class="fas fa-chevron-right" aria-hidden="true"></i></p>
-     <p class='content'><%- truncate(strip_html(page.prev.content), {length: 100}) %></p>
-   </a>
- <% } %>
+ <% if (prev_post) { %>
+   <a class='prev' href='<%- url_for(prev_post.path) %>'>
+     <p class='title'><i class="fas fa-chevron-left" aria-hidden="true"></i><%- prev_post.title || '' %></p>
+     <p class='content'><%- truncate(strip_html(prev_post.content), {length: 100}) %></p>
+   </a>
+ <% } %>

+ <% let next_post = post.next; while (next_post) { if (next_post.custom_type == page.custom_type) { break } next_post = next_post.next; } %>
- <% if (post.next) { %>
-   <a class='next' href='<%- url_for(post.next.path) %>'>
-     <p class='title'><%- post.next.title || '' %><i class="fas fa-chevron-right" aria-hidden="true"></i></p>
-     <p class='content'><%- truncate(strip_html(page.next.content), {length: 100}) %></p>
-   </a>
- <% } %>
+ <% if (next_post) { %>
+   <a class='next' href='<%- url_for(next_post.path) %>'>
+     <p class='title'><%- next_post.title || '' %><i class="fas fa-chevron-right" aria-hidden="true"></i></p>
+     <p class='content'><%- truncate(strip_html(next_post.content), {length: 100}) %></p>
+   </a>
+ <% } %>
```

## 自定义

自定义页面布局 `layout\custom-*`

自定义样式 `source\css\_custom`