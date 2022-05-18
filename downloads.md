---
title: Downloads
layout: interior-page
id: downloads
---

OpenRocket is available as packages for Linux, macOS and Windows.  A .jar file
is also available, as is all of the source code.

For most users, we **strongly** recommend using the package
appropriate for your operating system. These packages contain all of
the needed dependencies, including the correct version of Java.

<hr/>

<div style="width: 100%;">
  <h3 style="display: inline-block; color: #2196f3; margin-left: 20px;">OpenRocket version: </h3>
  <div class="dropdown" style="margin-left: 20px">
    <button class="dropbtn dropbtn-light" id="dropbtn"></button>
    <div id="dropdown-content" class="dropdown-content">
      <a href="downloads.html?vers=22.02.beta.03"><i>22.02.beta.03</i></a>
      <a href="downloads.html?vers=15.03">15.03</a>
    </div>
  </div>
  <div style="float: right;"><i>(You can view all the releases on our <a href="https://github.com/openrocket/openrocket/releases">GitHub page</a>)</i></div>
</div>
<div style="margin-left: 20px; margin-top: 3px;">
  <strong>What's new?</strong> Check out the <a href="release_notes.html">release notes</a>.
</div>

<hr/>

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

  <div id="content-source">
    <h3>Source code</h3>
    The source code can be downloaded as either a .zip file or a .tar.gz file  
    <div>
      <a id="source-zip" class="btn btn-primary btn-lg" role="button"></a>  
      <a id="source-tar.gz" class="btn btn-primary btn-lg" role="button"></a>
    </div>
  </div>

  <hr/>
</div>


## Obtain from the Repository on GitHub
Finally, you can simply go to the source repository on GitHub. 
<a class="btn btn-success btn-lg" href="https://github.com/openrocket/openrocket" role="button">Fork me on GitHub</a>

<hr/>

## install4j
Thanks to a generous license for open source projects, OpenRocket uses
the [install4j multi-platform installer builder](https://www.ej-technologies.com/products/install4j/overview.html) to produce installers for Windows, macOS and Linux. 

<a href="https://www.ej-technologies.com/products/install4j/overview.html" role="button">
    <img alt="Download install4j" src="img/install4j_download_btn.png">
</a>

<script type="text/javascript" src="downloads/downloads_config.js" defer></script>
<script type="text/javascript" src="js/fill_downloads.js" defer></script>