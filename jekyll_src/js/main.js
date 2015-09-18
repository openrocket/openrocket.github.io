$(window).scroll(function() {
    if($(this).scrollTop() > 200) {
        $('body#landing-page a.navbar-brand, body#landing-page #navbar_download_button').addClass('navbar-visible-on-scroll');
    } else {
        $('body#landing-page a.navbar-brand, body#landing-page #navbar_download_button').removeClass('navbar-visible-on-scroll');
    }
});
