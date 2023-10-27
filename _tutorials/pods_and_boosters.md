---
layout: tutorial
title: "Pods and Boosters"
thumbnail: /img/tutorials/thumbnails/pods_and_boosters.png
description: This tutorial shows how to configure pods and boosters for some of the most commonly-desired design configurations.
date: 2023-09-28
toc: true
---

### Introduction
OpenRocket 22.02 introduced the concept of `pods` and `boosters`, which are *almost* the same thing but not quite.

  <div class="warning-message">
      <i class="icon-warning">⚠️</i> 
      {{ "For this tutorial we'll refer to both generically as `pods`; at the end we'll discuss the few key differences between them." | markdownify }}
  </div>

In addition to this tutorial, check out the example rockets included in OR that demonstrate what is described here (`File -> Open example`).  

### Basics

The `Pods` and `Boosters` components are in the `Assembly Components` section up at the top:
<figure class="enlargeable-image">
  <img src="/img/tutorials/pods_and_boosters/pod-button.png" width="55%" class="figure-shadow" onclick="enlargeImage(this)">
  <figcaption class="figure-shadow-caption">Pods Component Button</figcaption>
</figure>

The first important thing to note is that these are **not physical components**, but represent **attachment points for other complete airframes**. The next important thing is that a pod set can **only be attached to a body tube**. This may change in future releases.

In the rocket figure display, the pods are shown as little plus-sign targets. Here they're shown in the back view for clarity.
<figure class="enlargeable-image">
  <img src="/img/tutorials/pods_and_boosters/pod-markers.png" width="55%" class="figure-shadow" onclick="enlargeImage(this)">
  <figcaption class="figure-shadow-caption">Pods Markers in Rocket Figure</figcaption>
</figure>

#### Parameters

<figure class="enlargeable-image">
  <img src="/img/tutorials/pods_and_boosters/pod-config.png" width="55%" class="figure-shadow" onclick="enlargeImage(this)">
  <figcaption class="figure-shadow-caption">Pods Configuration Dialog</figcaption>
</figure>

The following parameters are available in the `Pods Configuration Dialog`:
- `Radius relative to`: determines the Radius Positioning Method, i.e. how OR will calculate the distance of the pod components from the center of the rocket. The most commonly useful option, shown selected, is `Surface of the parent component`. This method means that the `Radial Distance` value will define the distance from the surface of the airframe to the surface of the pod body. If we want our pods to be mounted to the surface of the body, we leave `Radial Distance` set to 0 and we're good to go.

<figure class="enlargeable-image">
  <img src="/img/tutorials/pods_and_boosters/pod-radius.png" width="55%" class="figure-shadow" onclick="enlargeImage(this)">
  <figcaption class="figure-shadow-caption">Pods Radial Distance</figcaption>
</figure>

- `Radial Distance`: distance offset from the radius positioning method, defined in `Radius relative to`, see above.

- `Angle`: determines the position of the first pod, just like a fin set. We'll set it to 60 so the pods will be positioned between the fins.

- `Number of Copies`: how many pod instances are in the set. We'll use three, one between each pair of fins.
The last two positioning settings are just like any other component that gets mounted to a body. We'll keep our pods flush with the tail of the rocket.  Note that the position of the pod itself will always represent the **rear** of the pod assembly.

### Adding Pods on the body

Let's start with the simple case of something that looks like boosters attached directly to the main airframe.

<ol class="step-list">
<li markdown="1">  <!-- We want to keep markdown -->
  Select the `Body Tube` you'd like to add the pods to. Once selected, the `Pods component button` on the right should become enabled. Click it to add the pods.
</li>

<li markdown="1">
  The `Pods Configuration Dialog` will appear. Set the parameters as shown in the section [Parameters](#parameters) section.
</li>

<li markdown="1">
  Now, we add components to the pod set just like we were building a new rocket. We'll start with a nose cone...
  <figure class="enlargeable-image">
    <img src="/img/tutorials/pods_and_boosters/pod-with-nose.png" width="55%" class="figure-shadow" onclick="enlargeImage(this)">
    <figcaption class="figure-shadow-caption">Pods with Nose Cone Added</figcaption>
  </figure>
</li>

<li markdown="1">
  Then add a body...
  <figure class="enlargeable-image">
    <img src="/img/tutorials/pods_and_boosters/pod-with-nose-tube.png" width="85%" class="figure-shadow" onclick="enlargeImage(this)">
    <figcaption class="figure-shadow-caption">Pods With Nose Cone and Body Tube, side view (left) and back view (right)</figcaption>
  </figure>
</li>

<li markdown="1">
  And voila! Note that we could add anything we want to the pods, including more pods!
</li>
</ol>

### Pods on Fins
Sometimes you might want the pods to go on the ends of fins. Lets take the pods from the previous post and move them there.

Edit the pod set:
<figure class="enlargeable-image">
  <img src="/img/tutorials/pods_and_boosters/pod-config-finends.png" width="55%" class="figure-shadow" onclick="enlargeImage(this)">
  <figcaption class="figure-shadow-caption">Pods Configuration at Ends of Fins</figcaption>
</figure>

* Because our fins are 1.25" high, we set `Radial Distance` to that value, which means that the surface of the pod body tube will be exactly at the end of the fins.
* We change the `Angle` back to 0, so it matches the fins.
* And finally, we set the `Position offset` to 1/2 inch, which will move the pods back and look a bit better.

The result is...
<figure class="enlargeable-image">
  <img src="/img/tutorials/pods_and_boosters/pods-on-finends.png" width="85%" class="figure-shadow" onclick="enlargeImage(this)">
  <figcaption class="figure-shadow-caption">Pods on Ends of Fins, side view (left) and back view (right)</figcaption>
</figure>

### Fins on Fins
So far so good. What about fins on fins?

<ol class="step-list">
<li markdown="1">
  First let's delete the nose cones, and edit the body tube on the pods:
  <figure class="enlargeable-image">
    <img src="/img/tutorials/pods_and_boosters/pod-phantom.png" width="55%" class="figure-shadow" onclick="enlargeImage(this)">
    <figcaption class="figure-shadow-caption">Phantom Body Tube</figcaption>
  </figure>
</li>

<li markdown="1">
  Set the body tube length and diameter to 0. This is the infamous `phantom body tube`, which will be invisible but will give us something to which to attach some fins.

  <div class="warning-message">
      <i class="icon-warning">⚠️</i> 
      When you use a phantom body tube you'll get a warning in the corner of the screen, because OR isn't quite sure how to simulate it. In practice, the error is likely to be very small, but be aware.
  </div>
</li>

<li markdown="1">
  Let's add a trapezoidal fin set to the phantom tube:
  <figure class="enlargeable-image">
    <img src="/img/tutorials/pods_and_boosters/pod-fintips.png" width="55%" class="figure-shadow" onclick="enlargeImage(this)">
    <figcaption class="figure-shadow-caption">Fin Tips Configuration</figcaption>
  </figure>

  Two fins, set at 90 degrees. For each pod, 0 degrees represents the direction pointing directly away (perpendicular) from the body tube. So if we set fin rotation to 0, our pod fins would be coplanar with the main fins, which is not what we want. By setting them to 90 degrees, they'll be perpendicular. And here they are:
  <figure class="enlargeable-image">
    <img src="/img/tutorials/pods_and_boosters/pod-fintips-side-rear.png" width="95%" class="figure-shadow" onclick="enlargeImage(this)">
    <figcaption class="figure-shadow-caption">Pods with Fin Tips, side view (left) and back view (right)</figcaption>
  </figure>

  <figure class="enlargeable-image">
    <img src="/img/tutorials/pods_and_boosters/pod-fintips-3d.png" width="50%" class="figure-shadow" onclick="enlargeImage(this)">
    <figcaption class="figure-shadow-caption">Pods with Fin Tips (3D view)</figcaption>
  </figure>
</li>
</ol>

So now you're ready to go build an OR model of a T-LOC, or an Interceptor, or darn near anything.

### Pods vs. Boosters
Not discussed above is the fact that you can put motor mounts in your pods, and here is where the difference between pods and boosters comes in:
* `Pods` are considered to be **permanently attached** to the rocket, and part of the same stage as the body tube they're attached to.
* `Boosters` are considered to be **their own stage**, and **may detach** and fall away.

Let's add boosters to the rocket from the previous example.  Here's the config dialog:
<figure class="enlargeable-image">
  <img src="/img/tutorials/pods_and_boosters/booster-config.png" width="50%" class="figure-shadow" onclick="enlargeImage(this)">
  <figcaption class="figure-shadow-caption">Booster Set Configuration</figcaption>
</figure>

The first thing you notice is that there's a new first tab called `Separation`.  Here is where you can specify if and when the boosters will eject from the rocket. Also notice that the booster set is defined as a new stage in the rocket figure display:
<figure class="enlargeable-image">
  <img src="/img/tutorials/pods_and_boosters/booster-stage.png" width="55%" class="figure-shadow" onclick="enlargeImage(this)">
  <figcaption class="figure-shadow-caption">Boosters as Stage</figcaption>
</figure>

Other than that, boosters behave exactly like pods.

