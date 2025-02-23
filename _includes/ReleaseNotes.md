Release Notes
=============

<h2>
  <a href="https://github.com/openrocket/openrocket/releases/tag/release-24.12" class="a-no-format">
     OpenRocket 24.12 (2025-XX-XX)
  </a>
</h2>

<div data-version="24.12" id="release-24.12-content"></div>

<hr/>

<h2>
  <a href="https://github.com/openrocket/openrocket/releases/tag/release-23.09" class="a-no-format">
     OpenRocket 23.09 (2023-11-16)
  </a>
</h2>

<div data-version="23.09" id="release-23.09-content"></div>

<hr/>

<h2>
  <a href="https://github.com/openrocket/openrocket/releases/tag/release-22.02" class="a-no-format">
     OpenRocket 22.02 (2023-02-08)
  </a>
</h2>

<div data-version="22.02" id="release-22-02-content"></div>

<hr/>

<h2>
  <a href="https://github.com/openrocket/openrocket/releases/tag/release-22.02.beta.05" class="a-no-format">
     OpenRocket 22.02.beta.05 (2022-09-28)
  </a>
</h2>

### New Features
* **C_D Override for subassemblies now implemented.  Please test!** [See this wiki help page](http://wiki.openrocket.info/Overrides_and_Surface_Finish#How_and_Why_to_Use_Surface_Finish_Settings_and_Coefficient_of_Drag_.28CD.29_Overrides) for important instructions (fixes #1171)
* Simulations now properly account for disabled stages (fixes #1477 and #1460)
* Rail Button improvements:
  * Additional parameters for rail buttons (fixes #1537)
  * Added rail buttons to preset parts database
  * Scaling now supported for rail buttons (fixes #1661)
* Don't include inactive stages in calculations. Disabling stages using the stage selector buttons now also affects the simulation results. (fixes #1477 and #1460)
* Mass objects maintain fixed volume when container diameter changes in auto mode (fixes #1315)
* Inner tubes can have custom inner/outer appearance (fixes #1509)

### UI Improvements
* Visually select child components of assembly components when selecting the parent (fixes #1489).  Try selecting a pod, stage, or booster and see.
* Significant improvements to preset selection window (fixes #1481)
* Added sliders to Photo Studio settings (fixes #1524)
* Show markers for pods and boosters in rocket side view (fixes #1146)
* Major improvements to focus behavior.  Keyboard navigation in the Component Config dialog is now _much_ more convenient.
  * When setting focus to a spinner field, select the entire field by default (fixes #1506)
  * After selecting a preset, automatically highlight most commonly edited parameter (fixes #1488). So, for example, after selecting a body tube preset the Length parameter will be selected by default.
  * Restore focus to motors, recovery, stage and simulation tables after table action and others (fixes #1558).  Simply put, you shouldn't need to click in the table areas just to enable keyboard shortcuts to work.
  * Use tab and arrow keys to traverse sim table (fixes #1552)
* Added and/or improved hover texts on a bunch of different buttons and controls
* Apply preset after double-clicking (fixes #1539)
* Pre-check diameter filters in preset chooser (fixes #1480)
* Preset selection window opens larger, and remembers column widths (fixes #1305).  Separate column widths are remembered for each component type.
* Ctrl/Cmd+A (select all) keyboard shortcut in component tree, simulation and motor configuration tables (fixes #1549)

### Notable Bug Fixes
* **Scripting now works again.  Please test!** (fixes #308, #826, #1108, and #1270)
* Don't re-run simulations when new sim is created with same motor (fixes #1510)
* Ensure simulations finish when running from scripts (fixes #1575)
* Fixed Cd reporting for fin sets (fixes #1440)
* Move component config window back to same monitor as main app window first time it is opened.  No more lost config windows! (fixes #1470)
* Rocket side view updates
  * Don't recenter rocket when zooming (fixes #1464)
  * Ensure full rocket is always visible and positioned correctly in rocket side view (fixes #1465)
* Fixed root edge display in 3D view and fin templates (fixes #1227).  This matters when you are attaching fins to a nose cone or transition.
* Numerous bug fixes in component scaling (fixes #1649, #1651, #1653, #1661, #1662, and #1663)
* Better register of double-clicks in 3D view (fixes #1054)
* Increased component analysis drag precision to three decimal digits (fixes #1476)
* Select recovery device/stage after config panel select (fixes #1490)
* Fixed an exception when scaling freeform fins (fixes #1520)
* Improved performance of freeform fin shape editor (fixes #1533)
* Better automatic calculation of fin tab sizes (fixes #1600)
* Fixed simulation errors when there were empty stages in the design (fixes #1617)
* Fixed stage activeness not updating when moving, deleting, or copying stages (fixes #1680)
* Fixed exception for zero-length transitions and nose cones (fixes #1677)

### Other
* Don't open motor selection dialog when duplicating motor configurations (fixes #1555)
* A bunch of updated component icons
* Added icons to most buttons
* Improvements to Undo behavior when adding new components (fixes #1513)
* Improvements to scale dialog (fixes #411)
* Component tree now set to reasonable minimum width (fixes #1648)
* Removed "show all compatible" option in preset chooser (fixes #1405)
* Cleaned up several of the example rockets
* Added warning to launch preferences that changes only affect new sims (fixes #1497)
* Fixed overlapping labels in motor selection diameter filter slider (fixes #1643)
* More Russian translation updates

<hr/>

<h2>
  <a href="https://github.com/openrocket/openrocket/releases/tag/release-22.02.beta.04" class="a-no-format">
     OpenRocket 22.02.beta.04 (2022-06-17)
  </a>
</h2>

**Please note:** For this new beta, the packaged installers are now back to using Java 11, due to multiple bug reports related to Java 17.
However, the JAR file will still allow Java 11 *or* 17, so if you want to keep experimenting with Java 17 then feel free.

### New Features
* **File association now works on all platforms** (fixes #1135)
* **Contextual menus now available via right-click throughout the program**
* **Edit multiple selected items at once (great for appearance editing!)**
* Show/hide CG/CP markings in rocket display
* Support for custom decimal places and exponential notation in simulation exports (fixes #1307 and #1354)
* Simulation warning when no recovery device is enabled (fixes #1436)
* Remember previously selected tab when opening component edit dialog (fixes #974)
* On Mac, app remains open when last window is closed (normal Mac behavior)

### Notable Bug Fixes
* **Tube fins are fixed!** Both CP and drag calculations should be good now. So good that we are no longer calling tube fin support "experimental".  Feedback please! (fixes #1258)
* Guarantee fit in rocket view (fixes #1231 and #1351) 
* Corrected mass display in some situations (fixes #1409)
* Show combined mass of multi-selected components when hovering (fixes #1411)
* Fix greyed-out buttons on Mac (fixes #1099)
* Improve scalability of Motors and Configurations tab (fixes #1285)

### Other
* Many component edit dialogs reorganized for consistency and clarity
* Loads more tweaks to parachute and streamer config dialog
* Modified file size estimation in Save dialog. Feedback please!
* Improved layout of rocket view ribbon
* Improved icons for zoom buttons, and launch lugs and tube fins
* Added sliders to Pod Set config
* Preset dialog now sorted by manufacturer by default
* Updated guided tours
* Improved Russian translation

<hr/>

<h2>
  <a href="https://github.com/openrocket/openrocket/releases/tag/release-22.02.beta.03" class="a-no-format">
     OpenRocket 22.02.beta.03 (2022-05-18)
  </a>
</h2>

### New Features
* Big improvements to parachutes:
  * Added manufacturers: Front Range, Fruity Chutes, Rocketman, b2 Rocketry, Spherachutes
  * Added additional fields to preset DB (e.g. spill holes)
  * Automatic packed size calculation (for select chute manufacturers only)
  * Parachute mass is automatically overridden with manufacturer data (when available)
  * Parachute component name is automatically populated with preset description

### Notable bug Fixes
* __Tube fin drag simulation has been extensively rewritten__.  This should fix flight simulations of tube fin models.  Please test your sims and let us know how it works for you (fixes issue 1207).  _Note that CP calculations for tube fins are still not fixed._
* Improved ground hit velocity estimation (partially fixes issue 1349)
* Rail buttons now included in Fin Marking Guide (fixes issue 1259)
* Tube fin sets now included in Fin Marking Guide (fixes issue... ah, there wasn't one)
* Override mass now divides when fin set is split (fixes issue 1292)
* Fixes exception when splitting fin sets (fixes issue 1302)
* Hovering over pod set reports total mass of pod set (fixes issue 1291)
* Fixes exception when putting fins on transitions (fixes issue 1247)
* Opacity slider now stays in sync with alpha changes in color selector (fixes issue 1326)

### Other
* Major cleanup of File menu.  Let us know how you like it.
* Improved time step selection for descent
* Java 17 is now included in the packaged installers and supported by the JAR file.

<hr/>

<h2>
  <a href="https://github.com/openrocket/openrocket/releases/tag/release-22.02.beta.02" class="a-no-format">
     OpenRocket 22.02.beta.02 (2022-03-26)
  </a>
</h2>

NOTE: Tube fin simulation is currently broken, and will be fixed in a future beta.

### New Features
* Check Java version at startup (requires Java 11)
* Opacity slider on appearance panel
* Export sim plots as PNG images

### Notable Bug Fixes
* Rocksim Import/Export
  * Corrected position offsets when importing and exporting (fixes issue 1164)
  * Corrected fin shape when importing (fixes issue 1220)
* Side boosters
  * Added stage selector for side boosters (fixes issue 1208)
  * Fixed simulation bug with side boosters (fixes issue 1210)
  * Eliminated warning when loading designs with boosters (fixes issue 1196)
  * Fixed Simulation Plot range with boosters (fixes issue 1228)
* More reliable creation of simulation when creating a new configuration (fixes issue 1163)
* No longer need to click on motor config to get flight data (fixes issue 1175)
* Motor database search more robust, especially for CTI (fixes issue 1174)
* More accurate and reliable simulation of fins on transitions (fixes issues 1173 and 1243)
* _plus other miscellaneous fixes_

### Other
* Set default color for all components to #BBBBBB, with Shine=30 (closes issue 1192)
* Update Mac installer style to more standard "drag app to Applications folder"

<hr/>

<h2>
  <a href="https://github.com/openrocket/openrocket/releases/tag/release-22.02.beta.01" class="a-no-format">
     OpenRocket 22.02.beta.01 (2022-02-25)
  </a>
</h2>

### Application
* Update to Java 11 
* Distributed as packaged installers

### New Rocket Design Capabilities
* **Pods**
* **Drop-off Boosters**
* **Rail buttons**
* **Attach freeform fins to nose cones and transitions**
* **Coefficient of Drag override**
* **Added Dave Cook's rocket component library**

### Staging Improvements
* Update CG correctly when stages are toggled
* Display stage names instead of numbers in Stage enable buttons
* Reported length reflects length of selected stages only
* More reliable deployment of booster stage recovery device
* Fixed booster tumbling behavior
* Eliminate exceptions during multi-stage simulation
* Improved accuracy of nose cone simulation

### Simulation Improvements
* Assorted CP calculation fixes
* Improved nose cone drag calculations
* Properly run all simulations when any design change is made
* Use actual burn time for determination of burnout event
* Improve mass calculation accuracy for motors
* Correct linear interpolation of motor CG
* Copy Simulation results to clipboard
* Report wind speed correctly
* Improved ground hit velocity calculations
* Run simulations all the way to the end
* No more warning if recovery device is deployed while motor is coasting

### Rocket Appearance
* Support rendering of transparent or translucent components
* Separate inside and outside color for tube components
* Separate left and right appearance for fin components

### User Interface
* Multi-select/copy/paste components in the tree
* Option to display rocket stability as percentage of length
* Improved layout on many windows and dialogs
* Now use "Export" to save to RKT format
* Improved File Dialog behavior
* Multi-select/delete motor configurations
* Improved UI appearance on Mac
* Motor Selection
  * Automatically open motor selection dialog when adding new motor configuation
  * Added checkbox to hide motors which are out of production
  * Highlight motor mount in rocket display when motor is selected
* Many improvements to freeform fin editor, including
  * More accurate insertion of new points
  * Highlight coordinates of selected point
  * Export fin profile to CSV file
  * Fixed scrolling and zooming
* Improvements to Photo Studio
  * Respond instantly to design changes
  * Settings saved per rocket
  * Settings layout improved
  * Settings values can now be entered via keyboard

### Misc
* Updated motor list to latest data from Thrustcurve.org
* Added additional fields to motors
* Disable fin-thickness warnings on phantom tubes
* Added warning message for phantom body tubes
* Updated print dialog to allow simulation control
* Improved Rocksim import
* Added or improved Spanish, Dutch, and simplified Chinese translations

..._plus many, many additional bug fixes and refinements_

<hr/>

<h2>
  <a href="https://github.com/openrocket/openrocket/releases/tag/release-15.03" class="a-no-format">
     OpenRocket 15.03 (2015-03-28)
  </a>
</h2>

OpenRocket now requires Java 1.7 for execution.

New Features

  * Experimental support for tube fins
  * Updated thrustcurves
  * Scriptable simulation extensions
  * Fin fillet mass
  * Better icons for different kinds of masses - altimeters, computers, etc.
  * Configurable default mach number
  * Improved preferences UI

Bug Fixes

  * Always use the correct filename extension when saving

<hr/>

<h2>
  <a href="https://github.com/openrocket/openrocket/releases/tag/release-14.11" class="a-no-format">
     OpenRocket 14.11 (2014-11-02)
  </a>
</h2>

New Features

  * Updated thrustcurves

Bug Fixes

  * Fixed a couple of bugs.

<hr/>

<h2>
  <a href="https://github.com/openrocket/openrocket/releases/tag/release-14.06" class="a-no-format">
     OpenRocket 14.06 (2014-06-25)
  </a>
</h2>

New Features

  * Klima motor textures
  * Added knots to windspeed and velocity units
  * Updated thrustcurves

Bug Fixes

  * Fixed annoying IndexOutOfBounds bug in tables.

<hr/>

<h2>
  <a href="https://github.com/openrocket/openrocket/releases/tag/release-14.05" class="a-no-format">
     OpenRocket 14.05 (2014-05-21)
  </a>
</h2>

New Features

  * Compute optimimum delay time when simulating
  * Display cg/mass overrides using icons in the component tree

Bug Fixes

  * Bug fixes in the motor selection dialog
  * Updated thrustcurves
  * Updated 3d libraries to 2.1.5

<hr/>

<h2>
  <a href="https://github.com/openrocket/openrocket/releases/tag/release-14.03" class="a-no-format">
     OpenRocket 14.03 (2014-03-20)
  </a>
</h2>

New Features

  * Photo Realistic 3d rocket renderer

Bug Fixes

  * Fixes to the flight configuration tab and motor selection dialog
  * Updated thrustcurves

<hr/>

<h2>
  <a href="https://github.com/openrocket/openrocket/releases/tag/release-13.11.2" class="a-no-format">
     OpenRocket 13.11.2 (2014-01-01)
  </a>
</h2>

Bug Fixes

  * Numerous bug fixes and usability improvements in the new
      flight configuration tab.
  * Fix couple of layout issues
  * Updated Spanish, French and Chinese translations

<hr/>

<h2>
  <a href="https://github.com/openrocket/openrocket/releases/tag/release-13.11.1" class="a-no-format">
     OpenRocket 13.11.1 (2013-11-15)
  </a>
</h2>

Bug Fixes

  * Added back the TubeConfiguration Configuration dialog
  * Seems the jogl update didn't happen in the 13.11 build.
  * Made the motor filter remember previous settings
  * Fixed various exceptions in flight configuration tables due to column reordering
  * Fixed NPE when deleting a configuration

<hr/>

<h2>
  <a href="https://github.com/openrocket/openrocket/releases/tag/release-13.11" class="a-no-format">
     OpenRocket 13.11 (2013-11-08)
  </a>
</h2>

New Features

  * Chinese translations
  * Replaced flight configuration dialog with more efficient configuration tab
  * Improved filtering in motor chooser dialog

Bug Fixes

  * Updated jogl to correct 3d problems on various platforms
  * Fixed NPE introduced by changes in Java 1.7.0_45-b18

<hr/>

<h2>
  <a href="https://github.com/openrocket/openrocket/releases/tag/release-13.09.1" class="a-no-format">
     OpenRocket 13.09.1 (2013-10-05)
  </a>
</h2>

This release contains a number of bug fixes, updated 3D JOGL
libraries.  Added preliminary thrustcurves for Aerotech C3 and D2 18mm
reloads.


<hr/>

<h2>
  <a href="https://github.com/openrocket/openrocket/releases/tag/release-13.09" class="a-no-format">
     OpenRocket 13.09 (2013-09-08)
  </a>
</h2>

This release contains a number of bug fixes, updated 3D JOGL
libraries, and separates simulation edit and plot dialogs.

<hr/>

<h2>
  <a href="https://github.com/openrocket/openrocket/releases/tag/release-13.05" class="a-no-format">
     OpenRocket 13.05 (2013-05-04)
  </a>
</h2>

New Features

  * Added support for decals on rockets.  Added two new 3d views - 3d finished and 3d unfinshed.  Added support to export and
      apply decals (images) to rocket components.  Added ability to launch external graphics editor to edit decals and monitor
      file for writes to update the rocket view.
  * Added simulation of tumble recovery based on experimentation done by Sampo Niskanen.  This is particularly useful
      for low power staged flights.
  * Extended "motor configuration" concept to cover more properties.  The concept was renamed "Flight Configuration" and
      allows the user to override stage separation, recovery deployment, and motor ignition per flight configuration.
      These configurations are stored in the ork file with each component.  If no override is specified then the user specified
      default is used (set in the component edit dialog).  The flight configuration dialog was reworked to make it more
      usable.  The user selects the configuration in a drop down with buttons for "add", "delete" and "rename".  After selecting
      the configuration, the tabbed area below allows the user to change the configuration for this simulation.
  * Allow simulation of stages without a motor.  Users in the past have attempted to simulate separate recovery of payload
      and booster by tricking OpenRocket using a dummy motor with trivial thrust curve.  Now the user does not need to do this.
      There is an example of this provided in TARC Payloader.ork and Boosted Dart.ork
  * Simulate recovery of boosters.  The simulation engine will create new FlightDataBranches for each stage after
      separation.  The data for the boosters begins at t=separation.  The simulation plot allows the user to select
      which stage's data to show (or all).
  * Modified the zoom and pan controls in the simulation plot.  Added zoom in, out, and reset buttons.  Added
      scroll with mouse wheel.  If the alt key is used with either of these, only the domain is zoomed.  Richard
      contributed a more logical mouse controlled zoom - right click and drag will zoom (either domain, range or both).


<hr/>

<h2>
  <a href="https://github.com/openrocket/openrocket/releases/tag/release-12.09.1" class="a-no-format">
     OpenRocket 12.09.1 (2012-06-28)
  </a>
</h2>

Bug-fix release for 12.09, fixing numerous bugs.  Only new feature is
the possiblity to automatically open the latest design file on startup
(in Edit -> Preferences -> Options).


<hr/>

<h2>
  <a href="https://github.com/openrocket/openrocket/releases/tag/release-12.09" class="a-no-format">
     OpenRocket 12.09  (2012-09-16)
  </a>
</h2>

Numerous new features by many contributors

- 3D rocket design view
- Component Presets
- Custom expressions in simulations
- Printing for centering ring and clustered centering ring components.
- Support simple arthmatic in dimension entry
- Support deploying recovery device at stage separation
- Support for fractional inches (1/64) for unit length
- Added preference for windspeed units separately
- Added "most recently used files" in File Menu.
- Improved printed accurracy in fin marking guide
- Calibration rulers added to printed templates
- Translations in Czech and Polish, numerous updates


<h2>
  <a href="https://github.com/openrocket/openrocket/releases/tag/release-12.03" class="a-no-format">
     OpenRocket 12.03  (2012-03-17)
  </a>
</h2>

In this release the version numbering scheme has been changed to be
"YY.MM" indicating the year and month of the release.

Enhancements in the desktop version include saving designs in RKT
format thanks to Doug Pedrick, freeform fin set import from images by
Jason Blood, configurable stage separation events, guided help tours
and displaying the computed motor designation class.  The application
has also been translated to Italian by Mauro Biasutti and Russian by
the Sky Dart Team.

This also marks the first release for Android devices.  In this first
release you can open files and examine existing simulations, stability
data and motor files.  The Android port is thanks to work by Kevin
Ruland.


<hr/>

<h2>
  <a href="https://github.com/openrocket/openrocket/releases/tag/release-1.1.9" class="a-no-format">
     OpenRocket 1.1.9  (2011-11-24)
  </a>
</h2>

This release calculates rocket flight in real-world coordinates and
takes into account geodetic effects (including coriolis effect) thanks
to work by Richard Graham.  Printing of transitions, nose cone
profiles and fin marking guides is available thanks to Doug Pedrick.
It also contains some usability features and bug fixes.

<hr/>

<h2>
  <a href="https://github.com/openrocket/openrocket/releases/tag/release-1.1.8" class="a-no-format">
     OpenRocket 1.1.8  (2011-08-25)
  </a>
</h2>

This release contains bug fixes to the optimization methods.
It also contains a workaround to a JRE bug that prevents running
OpenRocket on Java 7.

<hr/>

<h2>
  <a href="https://github.com/openrocket/openrocket/releases/tag/release-1.1.7" class="a-no-format">
     OpenRocket 1.1.7  (2011-08-12)
  </a>
</h2>

This release contains automatic rocket design optimization
functionality.  However, be cautious when using it and take the
results with a grain of salt.

<hr/>

<h2>
  <a href="https://github.com/openrocket/openrocket/releases/tag/release-1.1.6" class="a-no-format">
     OpenRocket 1.1.6  (2011-07-22)
  </a>
</h2>

Internationalization support thanks to work by Boris du Reau and
translations by Tripoli Spain, Tripoli France and Stefan Lobas
(ERIG e.V.).  The release also contains rocket design scaling support
and numerous bug fixes.

<hr/>

<h2>
  <a href="https://github.com/openrocket/openrocket/releases/tag/release-1.1.5" class="a-no-format">
     OpenRocket 1.1.5  (2011-06-10)
  </a>
</h2>

Removed native printing support.  Printing is now handled via PDF
viewer, which should make printing much more reliable and less
bug-prone.

<hr/>

<h2>
  <a href="https://github.com/openrocket/openrocket/releases/tag/release-1.1.4" class="a-no-format">
     OpenRocket 1.1.4  (2011-03-05)
  </a>
</h2>

Initial printing support by Doug Pedrick, and various bug fixes.

<hr/>

<h2>
  <a href="https://github.com/openrocket/openrocket/releases/tag/release-1.1.3" class="a-no-format">
     OpenRocket 1.1.3  (2010-10-06)
  </a>
</h2>

Support for drag-drop moving and copying of components.  Fixes a
severe bug in the undo system.

<hr/>

<h2>
  <a href="https://github.com/openrocket/openrocket/releases/tag/release-1.1.2" class="a-no-format">
     OpenRocket 1.1.2  (2010-09-07)
  </a>
</h2>

Fixes a severe bug that prevented adding stages to rockets.

<hr/>

<h2>
  <a href="https://github.com/openrocket/openrocket/releases/tag/release-1.1.1" class="a-no-format">
     OpenRocket 1.1.1  (2010-09-03)
  </a>
</h2>

Major rewrite of the simulation code, enhanced support for thrust
curve loading and selection, faster startup time and bug fixes.

Old simulation listeners are incompatible with this release.

<hr/>

<h2>
  <a href="https://github.com/openrocket/openrocket/releases/tag/release-1.1.0" class="a-no-format">
     OpenRocket 1.1.0  (2010-03-21)
  </a>
</h2>

Support for loading RockSim rocket design files (.rkt) thanks to
Doug Pedrick.

<hr/>

<h2>
  <a href="https://github.com/openrocket/openrocket/releases/tag/release-1.0.0" class="a-no-format">
     OpenRocket 1.0.0  (2010-03-10)
  </a>
</h2>

Added numerous new motor thrustcurves from thrustcurve.org, and fixed
a few more bugs.

<hr/>

<h2>
  <a href="https://github.com/openrocket/openrocket/releases/tag/release-0.9.6" class="a-no-format">
     OpenRocket 0.9.6  (2010-02-17)
  </a>
</h2>

Updated aerodynamic calculation methods to be more in line with the
Barrowman method and enhanced simulation time step selection.  Fixed
numerous bugs.

<hr/>

<h2>
  <a href="https://github.com/openrocket/openrocket/releases/tag/release-0.9.5" class="a-no-format">
     OpenRocket 0.9.5  (2009-11-28)
  </a>
</h2>

Fixed a serious defect which prevented adding a tube coupler and
centering ring on the same body tube.  Other minor improvements.

<hr/>

<h2>
  <a href="https://github.com/openrocket/openrocket/releases/tag/release-0.9.4" class="a-no-format">
     OpenRocket 0.9.4  (2009-11-24)
  </a>
</h2>

Added through-the-wall fin tabs, attaching components to tube
couplers, material editing and automatic update checks, and fixed
numerous of the most commonly occurring bugs.

<hr/>

<h2>
  <a href="https://github.com/openrocket/openrocket/releases/tag/release-0.9.3" class="a-no-format">
     OpenRocket 0.9.3  (2009-09-01)
  </a>
</h2>

Numerous bug fixes and enhancements including data exporting, showing
flight events in plots, example rocket designs, splitting clustered
inner tubes and automated bug reporting.

<hr/>

<h2>
  <a href="https://github.com/openrocket/openrocket/releases/tag/release-0.9.2" class="a-no-format">
     OpenRocket 0.9.2  (2009-07-13)
  </a>
</h2>

Fixed imperial unit conversions.  Significant UI enhancements to the
motor configuration edit dialog, motor selection dialog and file
open/save.

<hr/>

<h2>
  <a href="https://github.com/openrocket/openrocket/releases/tag/release-0.9.1" class="a-no-format">
     OpenRocket 0.9.1  (2009-06-09)
  </a>
</h2>

Bug fixes to file dialog and saving; initial support for cut/copy/paste
of simulations.

<hr/>

<h2>
  <a href="https://github.com/openrocket/openrocket/releases/tag/release-0.9.0" class="a-no-format">
     OpenRocket 0.9.0  (2009-05-24)
  </a>
</h2>

Initial release.

<script type="text/javascript" src="/js/whats-new.js" defer></script>
<script type="text/javascript" src="/js/release_notes.js" defer></script>