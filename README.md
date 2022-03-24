# openrocket.github.io
This repository allows you to edit the content of the [openrocket.info](https://openrocket.info/index.html) website.

[openrocket.info](https://openrocket.info/index.html) is automatically updated with the contents of this repository using [Jekyll](https://jekyllrb.com/). Information about the system, including how to set up a local site so you can test pages before committing, can be found [here](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll).

After Jekyll has successfully been installed, you can run a local version of openrocket.info by running:

  `bundle install` (you only have to run this once, when you first cloned the repo)
  
  `bundle exec jekyll serve` (rerun this command to adopt changes to the code into your local site)
  
from the openrocket.github.io root directory. You can then go to your browser and display the site on the URL `http://localhost:4000`.

Note: if you get a warning message `Could not find gem 'webrick' in locally installed gems` after running `bundle exec jekyll serve` just install that gem with the command `gem install webrick`.
