---
layout: "../../layouts/MarkdownPostLayout.astro"
title: "My First Blog Post"
pubDate: 2023-12-01
description: "This is the first post of my new Astro blog."
author: "Ryan Wilson"
image:
  url: "https://docs.astro.build/assets/full-logo-light.png"
  alt: "The full Astro logo."
tags: ["astro", "blogging", "learning in public"]
---

Welcome to my _new blog_ about learning Astro! Here, I will share my learning journey as I build a new website.

## What I've accomplished

1. **Installing Astro**: First, I created a new Astro project and set up my online accounts.

2. **Making Pages**: I then learned how to make pages by creating new `.astro` files and placing them in the `src/pages/` folder.

3. **Making Blog Posts**: This is my first blog post! I now have Astro pages and Markdown posts!

## What's next

I will finish the Astro tutorial, and then keep adding more posts. Watch this space for more to come.

```html
<article class="border w-96">
  <img class="w-80 mx-auto h-auto mb-2 m-1" src={post.frontmatter.image?.url} />
  <a class="text-lg font-normal" href={post.url} >{post.frontmatter.title}</a>
  <div class="text-slate-300">{post.frontmatter.description}</div>
  <div class="text-slate-300">
    {new Date(post.frontmatter.pubDate).toDateString()}
  </div>
</article>
```