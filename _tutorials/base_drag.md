---
layout: tutorial
title: Implementing Base Drag CP Correction
thumbnail: /img/tutorials/thumbnails/base_drag.png
description: This tutorial will show the best ways to implement Base Drag CP Correction in your OR model.
date: 2023-10-27
difficulty: intermediate
toc: true
---

### Introduction

Ever since the publication of Bruce Levison's article in [Apogee's Peak-of-Flight newsletter #154](https://www.apogeerockets.com/education/downloads/Newsletter154.pdf), use and implementation of the "base drag hack", as it is commonly known (but shouldn't be... as we'll discuss below) have been a frequent topic of conversation and a source of many questions.  In this tutorial we'll show how to implement it most correctly and efficiently in OpenRocket, starting with version 23.09.

<script>
  addWarningMessage('This tutorial will focus on *how* to implement the hack as specified in Peak-of-Flight #154. Debates concerning the validity of the hack, or exactly *when* to use it, are left for discussion elsewhere.', true)
</script>

### About the Hack

#### What it's really for

First let's clear up some misinformation.  This trick is sometimes referred to as the "base drag hack", which suggests that it is some type of correction for missing base drag.  In fact, base drag is already properly calculated in OpenRocket, and has been for a long time.  The purpose of the hack is, rather, to apply a **correction to Center of Pressure** to incorporate the effects of base drag, something which is *not* currently implemented in OpenRocket.

For this reason, we will refer to this technique more accurately as "Base Drag CP Correction", and recommend you do the same. For convenience we will sometimes shorten it to just "the hack".

#### When to use it

The PoF article specifies the use of Base Drag CP Correction for rockets with **Less than a 10:1 Length to Diameter Ratio**. Although this is a simple rule to follow, it does raise some thorny questions; we'll leave those for discussion elsewhere.  Ultimately, you will need to decide when to use it based on whatever criteria you choose.

#### What to do

The hack itself is quite simple. A **massless cone** with **diameter equal to the aft end of the rocket**, and **length Pi (π) times that diameter**, is added to the tail end of the rocket.  This will pull the CP back somewhat (and hence improve reported stability margin), and if done correctly (as we'll describe), will have *no other effect*.

Please note that the recommended cone dimensions are based on an assumption that the tail end of the rocket is a straight tube.  However, if the tail of the rocket is tapered (e.g. a tail cone such as in a V2), then base drag will be greatly reduced, and so one would imagine that the dimensions of the cone should change.  If anyone knows of a well-tested formula for modifying the base drag cone in the presence of a tail cone, please let us know!

### How to implement it in OpenRocket

Let's start with a short stubby 3FNC:

<div data-image-path="/img/tutorials/base_drag/stubby_rocket.png"
      data-image-caption='A Short Stubby Rocket'
      data-image-width="60%"></div>

The stability margin is calculated at 0.287 calibers, or about 5%.  That's too low to fly safely, but this rocket passes the "less than 10:1" test for using base drag CP correction, so all is not yet lost.

The cone we add to the back will be 3" in diameter and 3xPI = 9.42" long.  We'll set wall thickness to zero so that the mass of the cone is zero (you could also use a mass override if you prefer):

<div data-image-path="/img/tutorials/base_drag/add_cone.png"
      data-image-caption='Base Drag Cone Added to Rocket'
      data-image-width="60%"></div>

Our stability margin is now up to 0.88 calibers / 10.3 %, which is pretty good.  If you want a little more margin you could add a bit of nose weight, but at least we're starting from a much better place than before.

The first thing to notice here is that we now get a `Discontinuity` warning from where the body tube meets the base drag cone.  This is unsurprising and generally unavoidable.  You can always hide the warnings if you like by unchecking "Show warnings" in the bottom right corner, but of course that will hide all of them.

Next, notice that with the base drag cone, even though its mass is zero, the apogee has decreased from 1075 ft to 915 ft.  Why is that?  Well, as we said up front, OpenRocket was already calculating base drag.  So adding the cone has now added a whole bunch of *new* drag that doesn't exist in the rocket.  We can see this if we look at the `Drag Characteristics` tab inside `Component Analysis` (`Tools -> Component Analysis`):

<div data-image-path="/img/tutorials/base_drag/component_analysis.png"
      data-image-caption='Component Analysis of Drag'
      data-image-width="60%"></div>

Note that the base drag of the original body tube is still there, and the new cone has plenty of its own as well. The solution, of course, is straightforward: simply override the Cd of the base drag cone to zero:

<div data-image-path="/img/tutorials/base_drag/drag_override.png"
      data-image-caption='Setting Drag to Zero'
      data-image-width="60%"></div>

Now the apogee is back up to 1084 ft, which is within margin of error of where we started.

<script>
  addWarningMessage('CD override was first implemented in OpenRocket 22.02. However, a small bug causes the drag calculations of the base drag cone to be slightly off.  Version 23.09 is the first version of OR that implements this correctly.',true)
</script>

The base drag cone is not very attractive in the 3D view:

<div data-image-path="/img/tutorials/base_drag/threed_view.png"
      data-image-caption='Base Drag Cone in 3D View'
      data-image-width="60%"></div>

If we care, we can make this better by setting the cone to be almost transparent.

<div data-image-path="/img/tutorials/base_drag/transparent_cone.png"
      data-image-caption='Making the Cone Almost Transparent'
      data-image-width="60%"></div>

Now, we can still see it (so we remember it's there), but it doesn't detract as much.  We could go even further and set it to be completely transparent so it's invisible in the 3D view, but I prefer to see it just a little, unless I'm generating pretty pictures in Photo Studio or something like that.

### Conclusion

This completes our "optimal" implementation of Base Drag CP Correction.  It corrects the CP while not interfering with any other flight parameters, and looks decent in 3D view.  If and when to use it on your rockets... well, that's up to you.

