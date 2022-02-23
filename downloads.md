---
title: OpenRocket — Packages, Downloads and Source
layout: interior-page
id: downloads
---

<div class="downloads">
  <div class="container" markdown="1">

OpenRocket is available as packages for Linux, macOS and Windows.  A .jar file
is also available, as is all of the source code.

For most users, we **strongly** recommend using the package
appropriate for your operating system. These packages contain all of
the needed dependencies, including the correct version of Java (Java 8).

<hr/>

## Official Release

### macOS
The macOS package is a .dmg file.  Download it, and drag it into your
Applications folder.  
<a class="btn btn-primary btn-lg" href="https://github.com/openrocket/openrocket/releases/download/release-{{site.current_version}}/OpenRocket-{{site.current_version}}.dmg" role="button">Download OpenRocket-{{site.current_version}}.dmg</a>

### Linux
The Linux package is an AppImage.  Download it, make it executable  
`chmod +x OpenRocket-{{site.current_version}}.AppImage`  
and run it  
`./OpenRocket-{{site.current_version}}.AppImage`  
<a class="btn btn-primary btn-lg" href="https://github.com/openrocket/openrocket/releases/download/release-{{site.current_version}}/OpenRocket-{{site.current_version}}.AppImage" role="button">Download OpenRocket-{{site.current_version}}.AppImage</a>

### Windows
The Windows package is a Windows installer.  Download
it and double click on the icon to start the installation process.
The application uses a standard installer, but it doesn't (at present)
provide a shortcut on the desktop or the start menu. After installing, the actual
executable file for the application is installed into your user/AppData/Local/OpenRocket
folder. So you can go in there, right click the "OpenRocket.exe" file, and create a shortcut,
pin it to the taskbar and/or pin it in the start menu.  
<a class="btn btn-primary btn-lg" href="https://github.com/openrocket/openrocket/releases/download/release-{{site.current_version}}/OpenRocket-{{site.current_version}}-installer.exe" role="button">Download OpenRocket-{{site.current_version}}-installer.exe</a>

### .jar File
Again, we **strongly** recommend you use one of the packages described
above.  To use the .jar file, download it, and start it from the
command line with  
`java -jar OpenRocket-15.03.jar`  
<a class="btn btn-primary btn-lg" href="https://github.com/openrocket/openrocket/releases/download/release-{{site.current_version}}/OpenRocket-{{site.current_version}}.jar" role="button">Download OpenRocket-{{site.current_version}}.jar</a>  
You **must** use Java 8 (a really, really old version) for this to work.

<hr/>
## Beta release
You can download OpenRocket beta 22.02.beta.01 [here](http://wiki.openrocket.info/Downloading_%26_Installing).

<hr/>

## Source code
The source code can be downloaded as either a .zip file or a .tar.gz file  
<div><a class="btn btn-primary btn-lg" href="https://github.com/openrocket/openrocket/archive/refs/tags/release-{{site.current_version}}.zip" role="button">Download release-{{site.current_version}}.zip</a>  
<a class="btn btn-primary btn-lg" href="https://github.com/openrocket/openrocket/archive/refs/tags/release-{{site.current_version}}.tar.gz" role="button">Download release-{{site.current_version}}.tar.gz</a>  </div>


### Obtain from the Repository on github
Finally, you can simply go to the source repository on GitHub  
<a class="btn btn-success btn-lg" href="https://github.com/openrocket/openrocket" role="button">Fork me on GitHub</a>
  </div>
</div>

<hr/>

## install4j

Thanks to a generous license for open source projects, OpenRocket uses
the [install4j multi-platform installer builder](https://www.ej-technologies.com/products/install4j/overview.html) to produce installers for Windows, macOS and Linux. 

<a href="https://www.ej-technologies.com/products/install4j/overview.html" role="button">
    <img alt="Download install4j" src="img/install4j_download_btn.png">
</a>
