---
layout: tutorial
title: All about Motor Selection
thumbnail: /img/tutorials/thumbnails/motor-selection.png
description: Everything you need to know about motor selection in OpenRocket
date: 2023-10-21
toc: true
---

<!-- This will be our modal (only add one per page) -->
<div id="imageModal" class="modal" onclick="closeModal()">
  <img id="modalImage">
</div>

### Introduction

Selecting motors for your flight simulations is a fundamental part of using OpenRocket.  While many aspects of motor selection may be pretty obvious, there are some subtleties and semi-hidden features that might not be apparent at first glance.  This tutorial will cover just about everything there is to know on the subject.

### The Motor Selection Dialog

When you create a new motor configuration, OR will automatically open the motor selection dialog for you. Later on, if you want to change it, you can do so by clicking on the motor in the table and then the "Select Motor" button.

Let's take a quick tour of the motor selection dialog:
<figure class="enlargeable-image">w
  <img src="/img/tutorials/motor_selection/motor_selection_dialog.png" alt="Motor Selection Dialog" onclick="enlargeImage(this)">
  <figcaption>Motor Selection Dialog</figcaption>
</figure>

1. At the top are controls to let you customize the thrustcurve and delay of your selected motor.  We'll come back to this.

2. A couple of simple filters for the list, self-explanatory.

3. What name to use for the motors.  "Common name" is typically just motor class and thrust (e.g., C18), while "Manufacturer's designation" typically includes suffixes to identify propellant and occasionally other bits of info (e.g., C18W).  Choose whichever you're most comfortable with.

4. The list of motors that pass your filters.  As with any such table in OR, remember that you can click on the column headers to sort on that column.

5. A search field for the motor list.  Often overlooked due to its placement below the list.  Search terms will match any of the columns.

6. The "Filter Motors" tab gives a whole bunch more filters, mostly self-explanatory.

7. The "Show Details" tab gives detailed info on the selected motor type, mostly duplicating what you'd find on thrustcurve.org (because that's where the info is coming from). It also shows the thrustcurve(s) for the motor.  We'll come back to this as well.

### Thrust Curve and Ejection Delay

The selectors at the top of the dialog for thrust curve and motor delay are the source of a surprising number amount of confusion.  Once you understand how they work you'll realize that they're actually extremely simple and straightforward.

#### Ejection Delay
Every motor that has an ejection charge has some delay associated with it, which represents the number of seconds after motor burnout that the ejection charge will fire. Motors will either come with a fixed delay (such as Estes black powder  motors or Quest Q-Jets) or an adjustable delay (such as most reloads).  Either way, you *always* need to choose a delay every time you select a motor.  The flight simulations will tell you how well you've chosen.

There are two ways to set the delay.  First, you can choose from available options in the pull-down list:
<figure class="enlargeable-image">
  <img src="/img/tutorials/motor_selection/delay_pulldown.png" alt="Ejection Delay Pull-down" onclick="enlargeImage(this)">
  <figcaption>Ejection Delay Pull-down</figcaption>
</figure>

These represent the available preset delays offered by the manufacturer, *plus* a "plugged" option which means that you have disabled the ejection delay entirely (sometimes the manufacturer offers its own plugged option).

For many motors, the first option shown is "-0".  Generally, you'll only want this option if you are configuring the booster of a multi-stage rocket, Always set a reasonable value, and if you get unexpected sim results double check that you haven't inadvertantly left the delay at 0.

What may not be as obvious is that you can also just type your own value into the combobox, e.g.:
<figure class="enlargeable-image">
  <img src="/img/tutorials/motor_selection/delay_combobox.png" alt="Typing into the Delay Combobox" onclick="enlargeImage(this)">
  <figcaption>Typing into the Delay Combobox</figcaption>
</figure>

This is good for when you have a composite motor with adjustable delay.  You can type in just about any value here.

#### Thrust Curve

Let's click over to the "Show Details" tab on the right.  In addition to a bunch of detail about the motor, we see that there are two different thrust curves for the A8, a red one and a blue one.

<figure class="enlargeable-image">
  <img src="/img/tutorials/motor_selection/show_details.png" alt="Show Details tab" onclick="enlargeImage(this)">
  <figcaption>"Show Details" tab</figcaption>
</figure>

Notice also that the red line is significantly heavier than the bluer. That means that is the red curve is currently selected, and will be used in the flight simulations.  You can also see this by clicking on the "Select thrust curve" pulldown:

<figure class="enlargeable-image">
  <img src="/img/tutorials/motor_selection/red_curve.png" alt="Red Curve Selected in Pulldown" onclick="enlargeImage(this)">
  <figcaption>Red Curve Selected in Pulldown</figcaption>
</figure>

When you click on the pulldown, you'll see a list of the available curves, color-coded, with the selected curve highlighted and checked.  If you wanted to use the blue curve, just select that one:

<figure class="enlargeable-image">
  <img src="/img/tutorials/motor_selection/blue_curve.png" alt="Blue Curve Selected in Pulldown" onclick="enlargeImage(this)">
  <figcaption>Blue Curve Selected in Pulldown</figcaption>
</figure>

Now you'll notice that the blue curve is heavier than the red, and it is the one that will be used in flight simulation.

Why are there multiple curves?  Well, each one is taken from a thrust curve file on thrustcurve.org.  Many (most?) of the motors there have multiple files associated with them.  The text box in the "Show Details" tab sometimes gives useful origin information for each curve.

Finally: there can be more than two curves; each will be shown in a different color.

### About the Motor Database in OpenRocket

Each time a new version of OpenRocket is released, the complete database of motors from thrustcurve.org is imported into it.  Therefore, the only time you should ever need to add your own motor files is if either (a) the motor is newer than the last release of OR, or (b) the motors are non-commercial (i.e. home-made or experimental).

#### Adding your own motor files
On the occasion that you do need to add a motor, it's as simple as taking a motor file (.eng or .rse) and placing it in the motors folder of your OR installation.  You can see where that is in the first tab of preferencea:s 

<figure class="enlargeable-image">
  <img src="/img/tutorials/motor_selection/motors_folder.png" alt="User-defined thrust curve folder preferences" onclick="enlargeImage(this)">
  <figcaption>User-defined thrust curve folder preferences</figcaption>
</figure>

Note that I have set my folder to somewhere on my DropBox, so all the machines on which I use OR can share it.  However.  In general using a folder of your own is better than using the default location.

#### Handling motor files with errors

It is pretty common that homemade thrust curve files have some sort of formatting error, which causes OR problems at launch when they are loaded.  Starting with version 23.09, OR will report the exact error it finds, which should give you an idea how to fix it.  The errored file is then ignored.

