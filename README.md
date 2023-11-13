# openrocket.github.io
This repository allows you to edit the content of the [openrocket.info](https://openrocket.info/index.html) website.

[openrocket.info](https://openrocket.info/index.html) is automatically updated with the contents of this repository using [Jekyll](https://jekyllrb.com/). Information about the system, including how to set up a local site so you can test pages before committing, can be found [here](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll).

After Jekyll has successfully been installed, you can run a local version of openrocket.info by running:

  `bundle install` (you only have to run this once, when you first cloned the repo, or when the Gemfile has changed)
  
  `bundle exec jekyll serve` (rerun this command to adopt changes to the code into your local site)
  
from the openrocket.github.io root directory. You can then go to your browser and display the site on the URL `http://localhost:4000`.

Note: if you get a warning message `Could not find gem 'webrick' in locally installed gems` after running `bundle exec jekyll serve` just install that gem with the command `gem install webrick`.

## Adding media
We have built our own custom method of adding images and videos to the site. This allows us to have more extensive features such as adding a caption beneath the image, adding a drop shadow, and choosing the size and position (alignment and whether or not to use an in-line image).

To add an image, add this to your Markdown/HTML file:
```HTML
<div data-image-path="<your_path>"
    data-image-caption='<your_caption>'
    data-image-width="<your_width>%"
    data-image-align="<left, right or center>"
    data-image-inline="<true or false>"
    data-image-shadow="true"></div>
```

The convention is to use a drop shadow for macOS screenshots of an entire window, since that's how windows look on macOS by default. For Windows or Linux screenshots, the shadow is not recommended.

### Add a warning message
You can add warning messages to notify users to pay attention to something.

![warning message](/.github/img/warning_message.png)


To add a warning message, use the following in your Markdown/HTML file:
```HTML
<script>
  addWarningMessage('This is my **warning message**', true)
</script>
```

You may use markdown in the message text, but if you do so, you have to set the second parameter to `true`.

## Adding a new OpenRocket release
To add a new OpenRocket release, you need to update the following files:
- `downloads/downloads_config.js`: just copy one of the existing releases and update the version number and download links. For the instructions, you should be able to use the previous files (e.g. `downloads/instructions/macOS_new.md`). If the new release does require you to update the instructions, you can add a new file in the `downloads/instructions` folder and reference that as the instructions file. We recommend you only leave in the 2 newest releases. You may delete the configuration for older releases.
- `_config.yml`: update the `current_version` variable to the new version number (this is the latest OpenRocket release)
- `_includes/ReleaseNotes.md`: add a new section for the new release (follow previous releases as an example). The content of the release will be the whats-new markdown file content (see below). This happens automatically, you just need to add the correct div. See the following example, change `{YOUR_VERSION}` and `{YOUR_DATE}` to the correct values:
```HTML
<h2>
  <a href="https://github.com/openrocket/openrocket/releases/tag/release-{YOUR_VERSION}" class="a-no-format">
     OpenRocket {YOUR_VERSION} ({YOUR_DATE})
  </a>
</h2>

<div data-version="{YOUR_VERSION}" id="release-{YOUR_VERSION}-content"></div>
```

In addition, you also need to create a new Markdown file for the `What's new` section of the release.
1. Create a new file in the `_whats-new` folder. The file name should be `wn-<version>.md` (e.g. `wn-23.09.md`).
2. Ensure that the layout is set to `whats-new`, i.e. set this at the top of the file:
```
---
layout: whats-new
---
```
3. Copy the raw release notes of the new release from GitHub and paste them in the new file.
4. Now, add images, GIFs, videos to the page to make it more attractive. Take a look at previous releases as an example. You should use right/left alternative inline images. You should add the image corresponding to a certain release note bullet item before that item, and then add a section break after that item to ensure that only that item will be displayed inline with the image. If an image relates to multiple bullet points, only add the section break after the last applicable bullet point. For example:
```HTML
<div data-image-path="/whats-new/img/<version>/feature1.png"
    data-image-caption='Feature number 1 explanation'
    data-image-width="55%"                <!-- Set an appropriate width (preferable as a percentage) -->
    data-image-align="right"
    data-image-inline="true"></div>       <!-- Ensure the image is inline -->

* Feature number 1

<div data-section-break="true"></div>     <!-- This will ensure that the feature 2 bullet point is not inline with the feature 1 image -->

<div data-image-path="/whats-new/img/<version>/feature2.png"
    data-image-caption='Feature number 2 explanation'
    data-image-width="70%"
    data-image-align="left"              <!-- Notice we now align to the left instead of the right -->
    data-image-inline="true"></div>

* Feature number 2.1
* Feature number 2.2
* Feature number 2.3

<div data-section-break="true"></div>     <!-- Only set the section break after the last applicable bullet point -->

* Feature number 3
```

## Adding a new tutorial
You can create a new tutorial by creating a new Markdown file in the `_tutorials` folder. The name of the markdown file is arbitrary.

The layout of the tutorial should be as follows:
```
---
layout: tutorial
title: <Tutorial title>
thumbnail: /img/tutorials/thumbnails/<your thumbnail>
description: <Description of the tutorial>
date: 2023-10-27  <-- Change to the date of the tutorial publication
toc: true   <-- set to true if you want a table of contents in the beginning of the tutorial
---
```

That's it :). You can now add the content of the tutorial. You can use markdown in the tutorial. If you want to add images or videos, you can use the same method as described above in the `Adding media` section. We recommend you don't use inline or aligned images, but just centered images. You can do so by leaving out the inline and align attributes:
```HTML
<!-- Non-inline, centered image -->
<div data-image-path="<your_path>"
    data-image-caption='<your_caption>'
    data-image-width="<your_width>%"
    data-image-shadow="true"></div>
```
