---
layout: post
title: All these trees are so cool but, what are they for?
thumbnail: blog_post-03.jpg
site_tag: blog
categories: blog programming
author: Enrique Alexandre González Sequeira
excerpt_separator: <!--more-->
---
Hey All,

As our super trouper lead programmer commented on previous posts, we are doing our own game engine from scratch (screams) and therefore at some point we had to choose how we would split our world and which data structures and algorithms we would use.

<!--more-->

We learnt from our teachers a lot of different ways of partitioning the world and we were very excited about it.
As our teacher Ric quote:

<blockquote>
    <i class="icofont-quote-left quote-left"></i>
        <p>
        All programmers must have implemented a Quadtree once in his life.
        </p>
    <i class="las la-quote-right quote-right"></i>
    <i class="icofont-quote-right quote-right"></i>
</blockquote>

So here we are, we take our keyboard, we take all our new knowledge about some very cool and fancy data structures and we go for it, mixing our skills we managed to implement: a quadtree, an octtree, and an aabbtree.

We rise victorious, we now have not one, but **three** very cool trees for our engine.

We feel great.

But.

What are they **really** for?

That’s the very first question you should have done to yourself before starting to implement any data structures for your engine.

### So, all these fancy trees were worth it?

For Twinlight Souls all these trees hadn’t a big impact on the performance, for the most part of our development we used just a simple **frustum culling** of all the objects of the scene,
we had the data structures to improve the performance but in the end, the difference with a simple frustum culling wasn’t notorious for our game.
Our idea was to implement the quadtree and octree for static objects, and the aabbtree for dynamic objects, but our game doesn’t have real verticality so quadtree and octtree aren’t quite different used on our game. And we had very little dynamic objects for being an AABBTree worth it only for them.

Probably it would have been more than enough implementing only a quadtree.

But personally, I wouldn’t say that implementing all these data structures was a waste of time. Because we are students, who are here to learn, and definitely we learnt a lot implementing these data structures.
Yes, they took a lot of time and resources but I feel it was worth it for the learning.

And the most important thing we learnt is:

<blockquote>
    <i class="icofont-quote-left quote-left"></i>
        <p>
        Always, have very clear what is the real usability of what you want to implement and don’t implement things just because they are cool and fancy.
        </p>
    <i class="las la-quote-right quote-right"></i>
    <i class="icofont-quote-right quote-right"></i>
</blockquote>
