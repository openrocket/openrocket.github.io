Downloads
=============

OpenRocket is available as packages for Linux, macOS and Windows.  A .jar file
is also available, as is all of the source code.

For most users, we **strongly** recommend using the package
appropriate for your operating system. These packages contain all of
the needed dependencies, including the correct version of Java.

<hr/>

<div>
  OpenRocket version: 
  <div class="dropdown" style="margin-left: 20px">
    <button class="dropbtn dropbtn-light" id="dropbtn"></button>
    <div id="dropdown-content" class="dropdown-content">
      <a href="downloads.html?vers=22.02.beta.02">22.02.beta.02</a>
      <a href="downloads.html?vers=15.03">15.03</a>
    </div>
  </div>
</div>

<div id="downloads-content">
  <div id="content-Windows">
    <h3>Windows</h3>
    <a class="btn btn-primary btn-lg" role="button"></a>
    <button type="button" class="collapsible" style="margin-top: 15px">Show Windows installation instructions</button>
    <div id="instructions-Windows" class="collapsible-content"></div>
  </div>

  <div id="content-macOS">
    <h3>macOS</h3>
    <a class="btn btn-primary btn-lg" role="button"></a>
    <button type="button" class="collapsible" style="margin-top: 15px">Show macOS installation instructions</button>
    <div id="instructions-macOS" class="collapsible-content"></div>
  </div>

  <div id="content-Linux">
    <h3>Linux</h3>
    <a class="btn btn-primary btn-lg" role="button"></a>
    <button type="button" class="collapsible" style="margin-top: 15px">Show Linux installation instructions</button>
    <div id="instructions-Linux" class="collapsible-content"></div>
  </div>

  <div id="content-JAR">
    <h3>JAR</h3>
    Again, we **strongly** recommend you use one of the packages described above.
    <a class="btn btn-primary btn-lg" role="button"></a>
    <button type="button" class="collapsible" style="margin-top: 15px">Show JAR installation instructions</button>
    <div id="instructions-JAR" class="collapsible-content"></div>
  </div>
</div>

## Official Release

### macOS
{% include_relative downloads/instructions/macOS_15.03.md %}

<a class="btn btn-primary btn-lg" href="https://github.com/openrocket/openrocket/releases/download/release-{{site.current_version}}/OpenRocket-{{site.current_version}}.dmg" role="button">Download OpenRocket-{{site.current_version}}.dmg</a>

### Linux
{% include_relative downloads/instructions/Linux_15.03.md %}

<a class="btn btn-primary btn-lg" href="https://github.com/openrocket/openrocket/releases/download/release-{{site.current_version}}/OpenRocket-{{site.current_version}}.AppImage" role="button">Download OpenRocket-{{site.current_version}}.AppImage</a>

### Windows
{% include_relative downloads/instructions/Windows_15.03.md %}

<a class="btn btn-primary btn-lg" href="https://github.com/openrocket/openrocket/releases/download/release-{{site.current_version}}/OpenRocket-{{site.current_version}}-installer.exe" role="button">Download OpenRocket-{{site.current_version}}-installer.exe</a>

### .jar File
Again, we **strongly** recommend you use one of the packages described
above.

{% include_relative downloads/instructions/JAR_15.03.md %}

<a class="btn btn-primary btn-lg" href="https://github.com/openrocket/openrocket/releases/download/release-{{site.current_version}}/OpenRocket-{{site.current_version}}.jar" role="button">Download OpenRocket-{{site.current_version}}.jar</a>  

### Source code
The source code can be downloaded as either a .zip file or a .tar.gz file  
<div><a class="btn btn-primary btn-lg" href="https://github.com/openrocket/openrocket/archive/refs/tags/release-{{site.current_version}}.zip" role="button">Download release-{{site.current_version}}.zip</a>  
<a class="btn btn-primary btn-lg" href="https://github.com/openrocket/openrocket/archive/refs/tags/release-{{site.current_version}}.tar.gz" role="button">Download release-{{site.current_version}}.tar.gz</a>  </div>

<hr/>

## Beta release
You can download OpenRocket beta 22.02.beta.01 [here](https://wiki.openrocket.info/Downloading_%26_Installing).

<hr/>


## Obtain from the Repository on github
Finally, you can simply go to the source repository on GitHub  
<a class="btn btn-success btn-lg" href="https://github.com/openrocket/openrocket" role="button">Fork me on GitHub</a>

<hr/>

## install4j
Thanks to a generous license for open source projects, OpenRocket uses
the [install4j multi-platform installer builder](https://www.ej-technologies.com/products/install4j/overview.html) to produce installers for Windows, macOS and Linux. 

<a href="https://www.ej-technologies.com/products/install4j/overview.html" role="button">
    <img alt="Download install4j" src="img/install4j_download_btn.png">
</a>