# openrocket.info

_The OpenRocket public website_

This site is live at [openrocket.info](http://openrocket.info/)


## Updating

### Content

Nearly all site copy is in [mardown]() files. Each page is an `index.markdown` file in the page name's directory.

### Images

Screenshots should be stored in the `screenshots` directory. Design and other helper images should be in `resources/img`. If possible include the source files!

### News

To make a new News post, add a file under the `_posts` directory with the format `YYYY-MM-DD-title-goes-here.markdown`. Look at existing files to get the idea. The header of the file needs to be proper YAML Front Matter, again just copy the last post as a template. Please be verbose as you like. An except can be created by placing a new line with `&lt;!-- bump --&gt;` in the file. Only the content before the bump will show on the front page. The front page is automatically updated to reflect new posts. Just create the post and commit it!

### Release

When we make a release a news post should be made (see above) and a link to the download should be added in the 'release' section of the `_config.yml` file. This will update the download buttons site wide.

### HTML


## Testing locally

To view your changes to the site build the site locally with [jekyll](http://jekyllrb.com/) (github's page rendering program) like this:

    $ jekyll serve

And point a browser to `localhost:4000`.


## Further documentation

Read more about [how to use jekyll](http://jekyllrb.com/docs/home/).
