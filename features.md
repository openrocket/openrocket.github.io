---
title: OpenRocket — Features and screenshots
layout: interior-page
id: features
---

# Sceenshots

{% include screenshots.html %}

---

# Features of OpenRocket

## Current features

### General

 - **Fully cross-platform**, written in Java
 - **Fully documented** [simulation methods](/documentation.html)
 - **Open Source**, source code available under the [GNU GPL](http://www.gnu.org/licenses/gpl-3.0.txt)

### User interface

 - **Easy-to-use user interface** for rocket design
 - **Real-time view of CG and CP** position
 - **Real-time flight altitude, velocity and acceleration** information from a continuous simulation performed in the background
 - Zoomable schematic view of rocket from the side or rear, with rotation around the center axis

### Design

 - A multitude of available components to choose from
 - **Trapezoidal**, **elliptical** and **free-form** fins supported
 - Support for **canted** fins (roll stabilization)
 - **Staging** and **clustering** support
 - Automatic calculation of component mass and CG based on shape and density
 - Ability to **override mass and CG** of components or stages separately

### Simulation and analysis

 - Full **six degree of freedom** simulation
 - Rocket stability computed using **extended Barrowman method**
 - **Automatic design optimizatio**n — you can optimize any number of rocket parameters for flight altitude, maximum velocity or a number of other values
 - Realistic wind modeling
 - Analysis of the **effect of separate components** on the stability, drag and roll characteristics of the rocket
 - **Fully configurable plotting**, with various preset configurations
 - Simulation data can be **exported to CSV files** for further analysis
 - **Simulation listeners** allowing custom-made code to interact with the rocket during flight simulation

## Planned future features

OpenRocket is under constant work in the free time of the developers. You can have a sneak preview on what has been planned by checking the [TODO-file](https://github.com/openrocket/openrocket/blob/master/core/TODO) in the git repository.

Below are a few major features that are under consideration:

 - Aerodynamic computation using CFD [(help needed!)](/contribute.html)
 - Better support for supersonic simulation [(help needed!)](/contribute.html)
 - Printing and saving figures, simulation data and designs
 - Support for ready-made component databases
 - Customized support for hybrid rocket motors and water rockets
 - Importing and plotting actual flight data from altimeters
 - Rocket flight animation
 - A "wizard" for creating new rocket designs
 - More ideas are listed in the [TODO-file](https://github.com/openrocket/openrocket/blob/master/core/TODO)!

If you want to help make OpenRocket the best rocket simulator, don't hesitate to [Get involved](/contribute.html)!
