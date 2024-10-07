---
title: 'Add a Blog Post'
description: 'How to add a blog post to Mentha Nuxt template'
date: '2024-10-07T08:40:03.164Z'
draft: false
---

# How to add a blog post to Mentha Nuxt template

The blog uses Markdown files located in the `content/blog` directory. The blog construction is based on the [@nuxt/content module](https://content.nuxt.com/). It is good to familiarize yourself with its operation so that you can build upon the blog.

<!-- more -->

## Front-matter

In the **nuxt/content** documentation, you can review the [Front-matter](https://content.nuxt.com/usage/markdown#front-matter) section, which is located at the beginning of each blog markdown file. It contains very important information about the page, which is used to generate meta tags and other things. Each blog markdown file should contain the following fields:

```yaml
---
title: 'This is the title of the blog post' # Extremely important
description: 'Short description of the blog post' # Important for SEO
date: '2024-10-07T08:40:03.164Z' # ISO 8601 date format https://www.timestamp-converter.com/
draft: false # If true, the blog post will not be displayed on the blog page
---
```

## Content

To create content for the blog, you need to be familiar with **Markdown syntax**. Additionally, Nuxt adds several abstractions that will help you to customize the blog and enrich the visualizations. The blog automatically generates pages, displaying the latest 3 on the homepage, but a button is added to load more.

:hrline

:comments

:hrline