$(document).ready(function(){

  $(window).scroll(function() {
      if($(this).scrollTop() > 200) {
          $('body#landing-page a.navbar-brand, body#landing-page #navbar_download_button').addClass('navbar-visible-on-scroll');
      } else {
          $('body#landing-page a.navbar-brand, body#landing-page #navbar_download_button').removeClass('navbar-visible-on-scroll');
      }
  });

  $('body#landing-page nav.navbar').addClass('navbar-fixed-top');

});

// Parallax effect function
var background_image_parallax = function($object, multiplier) {
    multiplier = typeof multiplier !== 'undefined' ? multiplier : 0.5;

    var $doc = $(document);
    $object.css({"background-attatchment" : "fixed"});
      $(window).scroll(function(){
        var from_top = $doc.scrollTop(),
            bg_css = '0px ' +(multiplier * from_top) + 'px';
        $object.css({"background-position" : bg_css });
    });
};

// Add parallax object
background_image_parallax($(".jumbotron"), 0.5);
