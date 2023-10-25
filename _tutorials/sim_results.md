---
layout: tutorial
title: Why is my predicted apogee lower than expected?
thumbnail: /img/tutorials/thumbnails/sim_results.png
description: This tutorial will help you diagnose your unexpected sim results
date: 2023-10-19
toc: true
---

<!-- This will be our modal (only add one per page) -->
<div id="imageModal" class="modal" onclick="closeModal()">
  <img id="modalImage">
</div>

### Introduction

A frequently asked question is: "Why is my predicted apogee much lower than expected?" It turns out that there are only two common errors that are responsible for the majority of such cases. In this tutorial we'll go through them, and give some general guidance on how to understand your sim results.

<figure class="enlargeable-image">
  <img src="/img/tutorials/multi_edit/comonent_tree.png" alt="Component Tree" onclick="enlargeImage(this)">
  <figcaption>Component Tree</figcaption>
</figure>

### Early Deployment / Motor Selection Errors

Normally you expect your recovery device deployed either (a) close to apogee, when using motor-eject or apogee deployment, or (b) long after apogee, in the case of dual-deployment. If you deploy too early, during ascent, your recovery device is going to slow down your rocket and sharply curtail its apogee.  If you deploy *way* too early, then the effect can be quite extreme.

Look at these sim results for the "Simple Model Rocket" example design:
<figure class="enlargeable-image">
  <img src="/img/tutorials/sim_results/bad_results.png" alt="Unexpectedly bad sim results" onclick="enlargeImage(this)">
  <figcaption>Unexpectedly Bad Sim Results</figcaption>
</figure>

It sure seems like this rocket ought to go higher than 355 feet on a C6 motor.  Your first hint that early deployment is the problem is that the sim results table will show a very high velocity at deployment, and there will be a warning indicating such if you hover over the red exclamation point at the left:

<figure class="enlargeable-image">
  <img src="/img/tutorials/sim_results/high_speed_deployment.png" alt="High-Speed Deployment Warning" onclick="enlargeImage(this)">
  <figcaption>High-Speed Deployment Warning</figcaption>
</figure>

You can also see it if you create a plot of the sim, using the default settings.  Select the sim, then click the "Plot/Export" button, and then "Plot".  The resulting plot will show early deployment quite clearly, as in this example (this is heavily zoomed in):

<figure class="enlargeable-image">
  <img src="/img/tutorials/sim_results/early_deployment_plot.png" alt="Early Deployment Plot" onclick="enlargeImage(this)">
  <figcaption>Early Deployment Shown in Plot</figcaption>
</figure>

In this example, noice that the "Recovery Device Deployment" even occurs while vertical velocity (red line) is very high.  Also, not that the motor burnout and recovery device deployment are happening at the same time.  Why does this happen?  By far the most common mistake is that a motor with too short a delay has been configured... in fact, often it is a zero-delay booster motor, as in this example.  Let's go look at the motor configurations:

<figure class="enlargeable-image">
  <img src="/img/tutorials/sim_results/motor_configurations.png" alt="Motor Configurations Tab" onclick="enlargeImage(this)">
  <figcaption>Motor Configurations Tab</figcaption>
</figure>

Here we can see that the motor in the first (and only) configuration has a -0 suffix, which means that its ejection charge will fire immediately after burnout. That is appropriate *only* when you're trying to ignite a second stage black powder motor, or in some unusual circumstances in side boosters or pods.

Let's select the first configuration and click "Select Motor" and see where things went wrong.  Here's the motor selection dialog:

<figure class="enlargeable-image">
  <img src="/img/tutorials/sim_results/motor_selection.png" alt="Motor Selection Dialog" onclick="enlargeImage(this)">
  <figcaption>Motor Selection Dialog</figcaption>
</figure>

Note the red arrow pointing to the motor delay selection, which currently says "-0".  Click on that pull-down to select from the available delay values offered by the manufacturer, or just type a number right into that combobox.  The sim results will tell you the "Optimum delay", which is the delay value that will yield a perfect apogee deployment.  In this case it's about 6 seconds:

<figure class="enlargeable-image">
  <img src="/img/tutorials/sim_results/optimum_delay.png" alt="Optimum Delay" onclick="enlargeImage(this)">
  <figcaption>Optimum Delay in Sim Results Table</figcaption>
</figure>

The pulldown shows that the C6 has -5 or -7 second delays available... we could go with either, but for now we'll choose -7 and check out the updated sim results:

<figure class="enlargeable-image">
  <img src="/img/tutorials/sim_results/new_results.png" alt="Updated Sim Results" onclick="enlargeImage(this)">
  <figcaption>Updated Sim Results</figcaption>
</figure>

Now our apogee is estimated at 1049 feet, almost exactly *triple* our previous value. That's more like it!

For a complete run-down of all the ins and outs of motor selection, go check out the "Motor Selection" tutorial.

### Bad Simulation Parameters

The second likely culprit is bad simulation parameters.  Let's go back to the same rocket, now it's showing only 426 ft apogee, and again there's a high-speed deployment warning:

<figure class="enlargeable-image">
  <img src="/img/tutorials/sim_results/second_bad_result.png" alt="Low predicted apogee, again" onclick="enlargeImage(this)">
  <figcaption>Low Predicted Apogee, again</figcaption>
</figure>

Double-checking the motor delay shows that it's correct.  In fact, everything looks in order.  What's the problem now?

When all else fails, go and check your simulation settings.  Click once to select the sim, and then click the "Edit Simulation" button:

<figure class="enlargeable-image">
  <img src="/img/tutorials/sim_results/sim_settings.png" alt="Simulation Settings" onclick="enlargeImage(this)">
  <figcaption>Simulation Settings</figcaption>
</figure>

There's the problem, the launch rod is angled at 45 degrees. Change that to zero and everything will revert to normal.  Other sim settings can mess you up as well, particularly altitude and atmospheric conditions.  These settings are usually not a source of problem but they can be, if you inadvertantly make an unwanted change.  Generally, you will set the default sim settings in the "Launch" tab of your OpenRocket preferences, and then only occasionally change the settings for a sim after it has been created.

<figure class="enlargeable-image">
  <img src="/img/tutorials/sim_results/launch_preferences.png" alt="Launch Preferences Tab" onclick="enlargeImage(this)">
  <figcaption>Launch Preferences Tab</figcaption>
</figure>

