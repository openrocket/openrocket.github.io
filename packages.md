---
title: OpenRocket — Packages, Downloads and Source
layout: interior-page
id: packages
---

<div class="packages">
  <div class="container" markdown="1">

OpenRocket is available as packages for Linux, macOS and Windows.  A .jar file
is also available, as is all of the source code.

For most users, we **strongly** recommend using the package
appropriate for your operating system.  These packages contain all of
the needed dependencies, including the correct version of Java (Java 8).

## macOS
The macOS package is a .dmg file.  Download it, and drag it into your
Applications folder.  
<a class="btn btn-primary btn-lg" href="https://github.com/openrocket/openrocket/releases/download/release-{{site.current_version}}/OpenRocket-{{site.current_version}}.dmg" role="button">Download OpenRocket-{{site.current_version}}.dmg</a>

## Linux
The Linux package is an AppImage.  Download it, make it executable  
`chmod +x OpenRocket-{{site.current_version}}.AppImage`  
and run it  
`./OpenRocket-{{site.current_version}}.AppImage`  
<a class="btn btn-primary btn-lg" href="https://github.com/openrocket/openrocket/releases/download/release-{{site.current_version}}/OpenRocket-{{site.current_version}}.AppImage" role="button">Download OpenRocket-{{site.current_version}}.AppImage</a>

## Windows
The Windows package is a Windows installer.  Download
it and double click on the icon to start the installation process.
The application uses a standard installer, but it doesn't (at present)
provide a shortcut on the desktop or the start menu. After installing, the actual
executable file for the application is installed into your user/AppData/Local/OpenRocket
folder. So you can go in there, right click the "OpenRocket.exe" file, and create a shortcut,
pin it to the taskbar and/or pin it in the start menu.  
<a class="btn btn-primary btn-lg" href="https://github.com/openrocket/openrocket/releases/download/release-{{site.current_version}}/OpenRocket-{{site.current_version}}.exe" role="button">Download OpenRocket-{{site.current_version}}.exe</a>

## .jar File
Again, we **strongly** recommend you use one of the packages described
above.  To use the .jar file, download it, and start it from the
command line with  
`java -jar OpenRocket-15.03.jar`  
<a class="btn btn-primary btn-lg" href="https://github.com/openrocket/openrocket/releases/download/release-{{site.current_version}}/OpenRocket-{{site.current_version}}.jar" role="button">Download OpenRocket-{{site.current_version}}.jar</a>  
You **must** use Java 8 (a really, really old version) for this to work.

# Source code
The source code can be downloaded as either a .zip file or a .tar.gz file  
<a class="btn btn-primary btn-lg" href="https://github.com/openrocket/openrocket/archive/refs/tags/release-{{site.current_version}}.zip" role="button">Download release-{{site.current_version}}.zip</a>  
<a class="btn btn-primary btn-lg" href="https://github.com/openrocket/openrocket/archive/refs/tags/release-{{site.current_version}}.tar.gz" role="button">Download release-{{site.current_version}}.tar.gz</a>  


# Obtain from the Repository on github
Finally, you can simply go to the source repository on GitHub  
<a class="btn btn-success btn-lg" href="https://github.com/openrocket/openrocket" role="button">Fork me on GitHub</a>
  </div>
</div>
