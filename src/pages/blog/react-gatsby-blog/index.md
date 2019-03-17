---
title: "Setting up Gatsby with React"
description: 
date: '2019-03-17'
image: 'featured.jpg'
draft: false
---

I wanted to redevelop my site in React instead of WordPress. Using Gatsby to create this blog as a static site was super easy.  

## CandiceDavidson.com Version ?.0

I've made most of my choices for getting my website done based on time.  When I first set up my portfolio, it was for a bootcamp project and I did it in HTML/CSS.

I wanted to redo it in Rails to use what I was learning, but wanted to get it up asap, so temporarily used WordPress.  I read how easy Jekyll is to get up and running so tried that, but every single thing I tried to do was a struggle and I moved back to WordPress.

It really is overkill for such a simple site, and "because its what I know" is a horrible way to make the decision on what to use, so I set out to find a better solution and decided on Gatsby.

## Why Gatsby

Like Jekyll, it's a static site generator. It's an SPA built on top of React so it's super fast, and uses GraphQL to fetch blog post data.  I also like how it uses templating with a pretty logical file system with internal linking.

GraphQL appealed to me as I've never used it before. Wasn't sure about the learning curve, but I've got to admit, getting Gatsby running and configured was so insanely easy that I did kind of feel like "...that's it?" After my experience with Jekyll, this was great.

## Getting Set Up

I'm not going to go into this tutorial style because there are already so many resources online, so I'll just share with you what I found that helped me get up and running.  

[Gatsby.js Documentation](https://www.gatsbyjs.org/docs/) - The docs for Gatsby really are amazing.  Very easy to get through and understand. Start here!

[Reactgo - Build and advanced blog using Gatsby and React](https://reactgo.com/gatsby-advanced-blog-tutorial/) - Beyond the basics, this tutorial goes over more stuff like adding images, which I used to create featured images for my posts, prev and next links and seo.

There are a few things I did differently. Since I wanted the home page of my site to be my portfolio, I created an additional page for the list of blog posts.  From here, I was able to easily add the featured image to my blog list.

I also wanted a short list of recent posts to my home page. Since Gatsby only looks in the "pages" folder, I had to move that code out of a component and put it directly inside of my index.js.  

## Customize-o-matic

After coming from WordPress, I really love how stripped down Gatsby is, and how easy it is to add the features I do want.  Super flexible too...I'm really excited about that.

[gatsby-transformer-sharp](https://www.gatsbyjs.org/packages/gatsby-transformer-sharp/)
Used to resize, crop and produce responsive images. Also adds a blur effect as it loads to speed up load time.

[gatsby-plugin-catch-links](https://www.gatsbyjs.org/packages/gatsby-plugin-catch-links/) - Prevents the browser from refreshing when linking to a local page, keeping that React SPA feel.

Additional features I added just by adding a few lines of code are adding metadata for SEO, Pre and Next links to navigate through blog posts, display time to read in posts, ability to create draft posts and code syntax highlighting.

Next, Id like to add in the ability to share my posts on social media. If you see share links down below, then it worked :)

## Final Thoughts

Adding each feature took just a few minutes and really was no big deal at all.  Its also really easy to integreate and style everything into my blog design.  I gave myself a week to get it done, and had it set up in two days with the rest of the time adding in features and doing nitpicky styling. So far, there is nothing I don't like about Gatsby, and I'm really happy with my choice.

I can't shake it that I was not able to get Jekyll to work though.  So many people love it, so I feel like I'm missing out. Mostly, I dont like having that gap in my knowledge, so I need to give it another shot to see where I went wrong when I tried it a year ago.  Challenge accepted!

*Featured image Gatsby Logo*