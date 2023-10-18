---
layout: tutorial
title: "Pods and Boosters"
thumbnail: /img/tutorials/thumbnails/pods_and_boosters.png
description: This tutorial shows how to configure pods and boosters for some of the most commonly-desired design configurations.
date: 2023-09-28
---

<!-- This will be our modal (only add one per page) -->
<div id="imageModal" class="modal" onclick="closeModal()">
  <img id="modalImage">
</div>

### Introduction
OpenRocket 22.02 introduced the concept of "pods" and "boosters", which are *almost* the same thing but not quite.  For this tutorial we'll refer to both generically as "pods", and only later one will we discuss the few key differences between them.

In addition to this tutorial, check out the example rockets included in OR that demonstrate what is described here.  

### Basics, and Pods on the body

Let's start with the simple case of something that looks like boosters attached directly to the main airframe.

The Pods and Boosters components are in the "Assembly Components" section up at the top:
<figure class="enlargeable-image">
  <img src="/img/tutorials/pods-and-boosters/pod-button.png" alt="Pods Component Button" onclick="enlargeImage(this)">
  <figcaption>Pods Component Button</figcaption>
</figure>

The first important thing to note is that these are not physical components, but represent _attachment points_ for other complete airframes.
The next important thing is that a pod set can only be attached to a body tube. This may change in future releases, but that's the way it is for now. In the screenshot above, the body tube is selected in the tree view at left, so the Pods button is enabled. Clicking that button adds a pod set and brings up the config window:
<figure class="enlargeable-image">
  <img src="/img/tutorials/pods-and-boosters/pod-config.png" alt="Pods Configuration" onclick="enlargeImage(this)">
  <figcaption>Pods Configuration</figcaption>
</figure>

The Radius Positioning Method determines how OR will calculate the distance of the pod components from the center of the rocket. The most commonly useful option, shown selected, is "Position Relative to the Component's Surface". This method means that the Radial Distance value will define the distance from the surface of the airframe to the surface of the pod body. If we want our pods to be mounted to the surface of the body, we leave Radial Distance set to zero and we're good to go.
<figure class="enlargeable-image">
  <img src="/img/tutorials/pods-and-boosters/pod-radius.png" alt="Pods Radial Distance" onclick="enlargeImage(this)">
  <figcaption>Pods Radial Distance</figcaption>
</figure>

We've already discussed setting "Radial Distance" to zero.
"Angle" determines the position of the first pod, just like a fin set. We'll set it to 60 so the pods will be positioned between the fins.
"Number of Copies" is how many pods are in the set. We'll use three, one between each pair of fins.
The last two positioning settings are just like any other component that gets mounted to a body. We'll keep our pods flush with the tail of the rocket.  Note that the position of the pod itself will always represent the *rear* of the pod assembly.

In the rocket figure display, the pods are shown as little plus-sign targets _only when nothing is attached to them_.  Here they're shown in the back view for clarity.
<figure class="enlargeable-image">
  <img src="/img/tutorials/pods-and-boosters/pod-markers.png" alt="Pods Markers in Rocket Figure" onclick="enlargeImage(this)">
  <figcaption>Pods Markers in Rocket Figure</figcaption>
</figure>

Now, we add components to the pod set just like we were building a new rocket. We'll start with a nose cone...
<figure class="enlargeable-image">
  <img src="/img/tutorials/pods-and-boosters/pod-with-nose.png" alt="Pods with Nose Cone Added" onclick="enlargeImage(this)">
  <figcaption>Pods with Nose Cone Added</figcaption>
</figure>

Then add a body...
<figure class="enlargeable-image">
  <img src="/img/tutorials/pods-and-boosters/pod-with-nose-tube.png" alt="Pods with Nose Cone and Body Tube" onclick="enlargeImage(this)">
  <figcaption>Pods With Nose Cone and Body Tube</figcaption>
</figure>

<figure class="enlargeable-image">
  <img src="/img/tutorials/pods-and-boosters/pod-with-nose-tube-rear.png" alt="Pods with Nose Cone and Body Tube (rear view)" onclick="enlargeImage(this)">
  <figcaption>Pods with Nose Cone and Body Tube (rear view)</figcaption>
</figure>

And voila! Note that we could add anything we want to the pods, including more pods!

### Pods on Fins
Sometimes you might want the pods to go on the ends of fins. Lets take the pods from the previous post and move them there.

Edit the pod set:
<figure class="enlargeable-image">
  <img src="/img/tutorials/pods-and-boosters/pod-config-finends.png" alt="Pods Configuration at Ends of Fins" onclick="enlargeImage(this)">
  <figcaption>Pods Configuration at Ends of Fins</figcaption>
</figure>

* Because our fins are 1.25" high, we set Radial Distance to that value, which means that the surface of the pod body tube will be exactly at the end of the fins.
* We change the Angle back to 0, so it matches the fins.
* And finally, we set the offset to 1/2 inch, which will move the pods back and look a bit better.

The result is...
<figure class="enlargeable-image">
  <img src="/img/tutorials/pods-and-boosters/pods-on-finends.png" alt="Pods on Ends of Fins" onclick="enlargeImage(this)">
  <figcaption>Pods on Ends of Fins</figcaption>
</figure>

<figure class="enlargeable-image">
  <img src="/img/tutorials/pods-and-boosters/pods-on-finends-rear.png" alt="Pods on Ends of Fins (rear view)" onclick="enlargeImage(this)">
  <figcaption>Pods on Ends of Fins (rear view)</figcaption>
</figure>

### Fins on Fins
So far so good. What about fins on fins?

First let's delete the nose cones, and edit the body tube on the pods:
<figure class="enlargeable-image">
  <img src="/img/tutorials/pods-and-boosters/pod-phantom.png" alt="Phantom Body Tube" onclick="enlargeImage(this)">
  <figcaption>Phantom Body Tube</figcaption>
</figure>

We're setting body tube length and diameter to "0". This is the infamous "phantom body tube", which will be invisible but will give us something to which to attach some fins.

NOTE: when you use a phantom body tube you'll get a warning in the corner of the screen, because OR isn't quite sure how to simulate it. In practice, the error is likely to be very small, but be aware.

Back to the matter at hand: let's add a trapezoidal fin set to the phantom tube:
<figure class="enlargeable-image">
  <img src="/img/tutorials/pods-and-boosters/pod-fintips.png" alt="Fin Tips Configuration" onclick="enlargeImage(this)">
  <figcaption>Fin Tips Configuration</figcaption>
</figure>

Two fins, set at 90 degrees. For each pod, Zero degrees represents the direction pointing directly away (perpendicular) from the body tube. So if we set fin rotation to zero, our pod fins would be coplanar with the main fins, which is not what we want. By setting them to 90 degrees, they'll be perpendicular. And here they are:
<figure class="enlargeable-image">
  <img src="/img/tutorials/pods-and-boosters/pod-fintips-side.png" alt="Pods with Fin Tips" onclick="enlargeImage(this)">
  <figcaption>Pods with Fin Tips</figcaption>
</figure>

<figure class="enlargeable-image">
  <img src="/img/tutorials/pods-and-boosters/pod-fintips-rear.png" alt="Pods with Fin Tips (rear view)" onclick="enlargeImage(this)">
  <figcaption>Pods with Fin Tips (rear view)</figcaption>
</figure>

<figure class="enlargeable-image">
  <img src="/img/tutorials/pods-and-boosters/pod-fintips-3d.png" alt="Pods with Fin Tips (3D view)" onclick="enlargeImage(this)">
  <figcaption>Pods with Fin Tips (3D view)</figcaption>
</figure>

So now you're ready to go build an OR model of a T-LOC, or an Interceptor, or darn near anything.

### Pods vs. Boosters
Not discussed above is the fact that you can put motor mounts in your pods, and here is where the difference between pods and boosters comes in:
* pods are considered to be _permanently attached_ to the rocket, and part of the same stage as the body tube they're attached to
* boosters are considered to be _their own stage_, and _may_ detach and fall away.

Let's add boosters to the rocket from the previous example.  Here's the config dialog:
<figure class="enlargeable-image">
  <img src="/img/tutorials/pods-and-boosters/booster-config.png" alt="Booster Set Configuration" onclick="enlargeImage(this)">
  <figcaption>Booster Set Configuration</figcaption>
</figure>

The first thing you notice is that there's a new first tab called "Separation".  Here is where you can specify if and when the boosters will eject from the rocket.  Also notice that the booster set is defined as a new stage in the rocket figure display:
<figure class="enlargeable-image">
  <img src="/img/tutorials/pods-and-boosters/booster-stage.png" alt="Boosters as Stage" onclick="enlargeImage(this)">
  <figcaption>Boosters as Stage</figcaption>
</figure>

Other than that, boosters behave exactly like pods.

