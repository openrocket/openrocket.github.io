---
layout: tutorial
title: Implementing Base Drag CP Correction
thumbnail: /img/tutorials/thumbnails/base_drag.png
description: This tutorial will show the best ways to implement the Base Drag CP Hack in your OR mode.
date: 2023-10-27
toc: true
---

### Introduction

Ever since the publication of [Apogee's Peak-of-Flight newsletter #154](https://www.apogeerockets.com/education/downloads/Newsletter154.pdf), use and implementation of the `base drag hack`, as it is commonly known (but shouldn't be... as we'll discuss below) have been a frequent topic of conversation and a source of many questions.  In this tutorial we'll show how to implement it most correctly and efficiently in OpenRocket, starting with version 23.09.

<script>
  addWarningMessage('This tutorial will only address *how* to implement the hack as specified in Peak-of-Flight #154. Debates concerning the validity of the hack, or exactly *when* to use it, are left for discussion elsewhere.', true)
</script>

### About the Hack

#### What it's really for

First let's clear up some misinformation.  This trick is commonly referred to as the `base drag hack`, which suggests that it is some type of correction for missing base drag.  In fact, base drag is already well-implemented in OpenRocket, and has been for a long time.  The purpose of the hack is, rather, to apply a **correction to Center of Pressure** to incorporate the effects of base drag, something which is *not* currently implemented in OpenRocket.

For this reason, we will refer to it in this tutorial as `Base Drag CP Correction`, and recommend you do the same. For convenience we will sometimes shorten it to just "the hack", which is not meant as a pejorative; it is simply descriptive.

#### When to use it

The PoF article specifies the use of the hack for rockets with **Less than a 10:1 Length to Diameter Ratio**. Although this is a simple rule to follow, it does raise some thorny questions.  But again, we'll leave those for discussion elsewhere.

#### What to do

The actual hack is quite simple. A **massless cone** with **diameter equal to the aft end of the rocket**, and **length Pi (π) times that diameter**, is added to the back of the rocket.  This will pull the CP back somewhat (and hence improve reported stability margin), and if done correctly (as we'll describe), will have *no other effect*.

### How to implement it

Let's start with a short stubby 3FNC:

<script>
  addImageWithCaption('/img/tutorials/base_drag/stubby_rocket.png', 'A Short Stubby Rocket', '60%', false);
</script>

The stability margin is calculated at 0.287 calibers, or about 5%.  That's too low to fly safely, but this rocket passes the "less than 10:1" test for using base drag CP correction, so all is not yet lost.

The cone we add to the back will be 3" in diameter and 3xPI = 9.42" long.  We'll set wall thickness to zero so that the mass of the cone is zero (you could also use a mass override if you prefer):

<script>
  addImageWithCaption('/img/tutorials/base_drag/add_cone.png', 'Base Drag Cone Added to Rocket', '60%', false);
</script>

Our stability margin is now up to 0.88 calibers / 10.3 %, which is pretty good.  If you want a little more margin you could add a bit of nose weight, but at least we're starting from a much better place than before.

The first thing to notice here is that we now get a `Discontinuity` warning from where the body tube meets the base drag cone.  This is unsurprising and generally unavoidable.  You can always hide the warnings if you like by unchecking "Show warnings" in the bottom right corner, but of course that will hide all of them.

Next, notice that with the base drag cone, even though its mass is zero, the apogee has decreased from 1075 ft to 915 ft.  Why is that?  Well, as we said up front, OpenRocket was already calculating base drag.  So adding the cone has now added a whole bunch of *new* drag that doesn't exist in the rocket.  We can see this if we look at the `Drag Characteristics` tab inside `Component Analysis` (`Tools -> Component Analysis`):

<script>
  addImageWithCaption('/img/tutorials/base_drag/component_analysis.png', 'Component Analysis of Drag', '60%', false);
</script>

Note that the base drag of the original body tube is still there, and the new cone has plenty of its own as well. The solution, of course, is straightforward: simply override the Cd of the base drag cone to zero:

<script>
  addImageWithCaption('/img/tutorials/base_drag/drag_override.png', 'Setting Drag to Zero', '60%', false);
</script>

Now the apogee is back up to 1084 ft, which is within margin of error of where we started.

The base drag cone is not very attractive in the 3D view:

<script>
  addImageWithCaption('/img/tutorials/base_drag/threed_view.png', 'Base Drag Cone in 3D View', '60%', false);
</script>

If we care, we can make this better by setting the cone to be almost transparent.

<script>
  addImageWithCaption('/img/tutorials/base_drag/transparent_cone.png', 'Making the Cone Almost Transparent', '60%', false);
</script>

Now, we can still see it (so we remember it's there), but it doesn't detract as much.  We could go even further and set it to be completely transparent so it's invisible in the 3D view, but I prefer to see it just a little, unless I'm generating pretty pictures in Photo Studio or something like that.

### Conclusion

This completes the implementation of Base Drag CP Correction.  It corrects the CP while not interfering with any other flight parameters, and looks decent in 3D view.  If and when to use it on your rockets... well, that's up to you.

