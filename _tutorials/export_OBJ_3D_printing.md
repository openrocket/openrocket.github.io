---
layout: tutorial
title: Export to OBJ file for 3D printing
thumbnail: /img/tutorials/thumbnails/tn_dummy.png
description: 3D printing (parts of) your design is now possible, thanks to the OBJ export feature in OpenRocket. This tutorial will show you how to export your design to OBJ, and how to prepare it for 3D printing.
date: 2023-09-30
toc: true
---

### Preparing your design
Since you're now moving from the digital, simulation world to the physical, 3D printing world, you'll have to take into account some things that you didn't have to worry about before. You'll have to make sure that your design is printable. Ensure that there are no components with a width of zero in your design, that the walls are thick enough, and that the parts fit together well. For example, if you have a nose cone that fits into a tube, make sure that the nose cone shoulder is slightly smaller than the inner width of the tube, so that after printing the parts fit well together.

We recommend you take a look at our "A 3D printable model rocket" example file, which you can access by going to `File > Open example > A 3D printable model rocket`. This file contains a design that is ready to be exported to OBJ and 3D printed.

### Exporting to OBJ
<ol class="step-list">
<li markdown="1">  <!-- We want to keep markdown -->
  The first step is to select the objects you want to export. You can select single components, or multiple objects by holding down the `Ctrl/Cmd` key while clicking on the components. If the selected component contains children, you can also choose to export the children components as well. If you want to export all objects, you can select the rocket component.

  <figure class="enlargeable-image">
    <img src="/img/tutorials/export_OBJ_3D_printing/SelectExportComponents.png" width="80%" alt="Select components to export" onclick="enlargeImage(this)">
    <figcaption>Selecting which components to export</figcaption>
  </figure>
</li>

<li markdown="1">
  Once you've selected the objects you want to export, go to `File > Export as > Wavefront OBJ (.obj)`. This will open the OBJ export dialog. Alternatively, you can right-click on the selected components in the component tree and choose `Export as OBJ (.obj)`.

  <figure class="enlargeable-image">
    <img src="/img/tutorials/export_OBJ_3D_printing/AccessExportDialog.png" width="70%" alt="Access export dialog" onclick="enlargeImage(this)">
    <figcaption>Access the export dialog through the application ribbon or context menu</figcaption>
  </figure>
</li>

<li markdown="1">
  You will then be greeted by the OBJ export dialog. Here, you can choose your export location and filename, and set the export parameters. The export location is the folder where the OBJ file will be saved. The export parameters are explained in the next section. You can verify which components will be exported by hovering over the text in the `Component` field. When you're done configuring your settings, click `Save`.

  <figure class="enlargeable-image">
    <img src="/img/tutorials/export_OBJ_3D_printing/ExportDialog.png" width="80%" alt="Export dialog" onclick="enlargeImage(this)">
    <figcaption>OBJ export dialog</figcaption>
  </figure>
</li>

<li>
  If there are any warnings during the export process, you will be notified by a dialog. For instance, if you have a zero-width body tube, you will get the following warning:

  <figure class="enlargeable-image">
    <img src="/img/tutorials/export_OBJ_3D_printing/ExportWarning.png" width="40%" alt="Export warning" onclick="enlargeImage(this)">
    <figcaption>Export warning due to a body tube width 0 wall thickness</figcaption>
  </figure>
</li>

<li>
  Now you can open the OBJ in your slicer software and prepare it for 3D printing. We recommend you take a look at our [3D printing tutorial](/tutorials/3D_printing) for more information on how to do this.
</li>
</ol>

### Export parameters
The export dialog has a few parameters that you can set to customize your export. Here's a quick overview of what each parameter does:

<figure class="enlargeable-image">
  <img src="/img/tutorials/export_OBJ_3D_printing/ExportParameters.png" width="25%" alt="Export parameters" onclick="enlargeImage(this)">
  <figcaption>Export warning due to a body tube with 0 wall thickness</figcaption>
</figure>

By clicking on the `Show Advanced options` button, you can get more detailed settings, which are usually recommended for advanced users.

#### Component
This denotes the components you've chosen to export. In the given example, multiple components are selected for export. Hovering over the text will show you which components will be exported.

#### Optimize for
There are two options for optimization:

- **3D Printing**: This setting optimizes the exported OBJ file for 3D printing purposes. It ensures the model is triangulated, appearance exporting is disabled, scaling is set to millimeters, and the level of detail is set to high.
- **Rendering**: If you're planning to render the model in a 3D software, this setting ensures the model looks its best by optimizing for visual fidelity.

#### Export Settings
Here are the various export settings available:

- **Export children**: This option will also export any child components (smaller parts or sub-assemblies) of the selected component.
- **Export motors**: If your model has any motor components, this will include them in the export.
- **Remove origin offset**: This ensures the model's origin is set at the base of the object, which can be crucial for 3D printing.
- **Export appearance**: If your model has any textures or color information, this will include that in the export.
- **Export as separate files**: If you're exporting multiple components, this will save each component as a separate OBJ file.

#### Advanced Options
Upon clicking "Show Advanced options", you might get more detailed settings, which are usually recommended for advanced users.

- **Scaling**: This lets you set the scale for your export. It can be vital if you're exporting to software that uses a different unit system.
- **Export colors in sRGB**: This ensures that the color information is exported in the standard RGB color space, which is universally recognized.
- **Triangulate mesh**: This option converts all the model's polygons into triangles. Some 3D software and printers prefer this format as it can be more consistent.
- **Level of detail**: Determines the quality and detail level of the exported model. Higher quality might increase the file size but will have more details.

