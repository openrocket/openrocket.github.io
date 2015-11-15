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

