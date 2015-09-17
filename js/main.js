$(window).scroll(function() {
    if($(this).scrollTop() > 200) {
        $('body#landing-page a.navbar-brand').addClass('navbar-brand-opaque');
    } else {
        $('body#landing-page a.navbar-brand').removeClass('navbar-brand-opaque');
    }
});
