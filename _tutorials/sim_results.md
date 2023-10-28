---
layout: tutorial
title: Why is my predicted apogee lower than expected?
thumbnail: /img/tutorials/thumbnails/sim_results.png
description: "A frequently asked question is: \"Why is my predicted apogee much lower than expected?\" It turns out that there are only 2 common errors that are responsible for the majority of such cases. In this tutorial we'll go through them, and give some general guidance on how to understand your sim results."
date: 2023-10-19
toc: true
---

### Early Deployment / Motor Selection Errors

Normally you expect your recovery device deployed either (a) close to apogee, when using motor-eject or apogee deployment, or (b) long after apogee, in the case of dual-deployment. If you deploy too early, during ascent, your recovery device is going to slow down your rocket and sharply curtail its apogee.  If you deploy *way* too early, then the effect can be quite extreme.

Look at these sim results for the "Simple Model Rocket" example design:
<script>
  addImageWithCaption('/img/tutorials/sim_results/bad_results.png', 'Unexpectedly Bad Sim Results', '60%', true);
</script>

It sure seems like this rocket ought to go higher than 355 feet on a C6 motor.  Your first hint that early deployment is the problem is that the sim results table will show a very high velocity at deployment, and there will be a warning indicating such if you `hover` over the `red exclamation point` at the left:

<script>
  addImageWithCaption('/img/tutorials/sim_results/high_speed_deployment.png', 'High-Speed Deployment Warning', '65%', true);
</script>

You can also see it if you create a plot of the sim, using the default settings.  Select the sim, then click the `Plot/Export` button, and then `Plot`.  The resulting plot will show early deployment quite clearly, as in this example (this is heavily zoomed in):

<script>
  addImageWithCaption('/img/tutorials/sim_results/early_deployment_plot.png', 'Early Deployment Shown in Plot', '55%', true);
</script>

In this example, notice that the `Recovery device deployment` event occurs while `Vertical velocity` (red line) is very high.  Also, not that the `Motor burnout` and `Recovery device deployment` are happening at the same time. Why does this happen?  By far the most common mistake is that a **motor** with a **too short delay** has been configured... in fact, often it is a zero-delay booster motor, as in this example. Let's go look at the motor configurations:

<script>
  addImageWithCaption('/img/tutorials/sim_results/motor_configurations.png', 'Motor Configurations Tab', '55%', true);
</script>

Here we can see that the motor in the first (and only) configuration has a `-0` suffix, which means that its ejection charge will fire immediately after burnout. That is appropriate *only* when you're trying to ignite a second stage black powder motor, or in some unusual circumstances in side boosters or pods.

Let's select the first configuration and click `Select Motor` and see where things went wrong. Here's the motor selection dialog:

<script>
  addImageWithCaption('/img/tutorials/sim_results/motor_selection.png', 'Motor Selection Dialog', '55%', true);
</script>

Note the red arrow pointing to the motor delay selection, which currently shows `-0`.  Click on that pull-down to select from the available delay values offered by the manufacturer, or just type a number right into that combobox.  The sim results will tell you the `Optimum delay`, which is the delay value that will yield a perfect apogee deployment.  In this case it's about 6 seconds:

<script>
  addImageWithCaption('/img/tutorials/sim_results/optimum_delay.png', 'Optimum Delay in Sim Results Table', '70%', true);
</script>

The pulldown shows that the C6 has `-5` or `-7` second delays available... we could go with either, but for now we'll choose -7 and check out the updated sim results:

<script>
  addImageWithCaption('/img/tutorials/sim_results/new_results.png', 'Updated Sim Results', '70%', true);
</script>

Now our apogee is estimated at 1049 feet, almost exactly *triple* our previous value. That's more like it!

For a complete run-down of all the ins and outs of motor selection, go check out the [Motor Selection tutorial](/tutorials/motor-selection).

### Bad Simulation Parameters

The second likely culprit is **bad simulation parameters**. Let's go back to the same rocket, now it's showing only 426 ft apogee, and again there's a high-speed deployment warning:

<script>
  addImageWithCaption('/img/tutorials/sim_results/second_bad_result.png', 'Low Predicted Apogee, again', '55%', true);
</script>

Double-checking the motor delay shows that it's correct.  In fact, everything looks in order.  What's the problem now?

When all else fails, go and check your simulation settings. Click once to select the sim, and then click the `Edit Simulation` button:

<script>
  addImageWithCaption('/img/tutorials/sim_results/sim_settings.png', 'Simulation Settings', '55%', true);
</script>

There's the problem, the launch rod is angled at 45 degrees. Change that to zero and everything will revert to normal. Other sim settings can mess you up as well, particularly altitude and atmospheric conditions.  These settings are usually not a source of problem but they can be, if you inadvertently make an unwanted change.  Generally, you will set the default sim settings in the `Launch` tab of your OpenRocket preferences, and then only occasionally change the settings for a sim after it has been created.

<script>
  addImageWithCaption('/img/tutorials/sim_results/launch_preferences.png', 'Launch Preferences Tab', '55%', true);
</script>

