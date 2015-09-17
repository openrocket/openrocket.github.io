$(window).scroll(function() {
    if($(this).scrollTop() > 300) {
        $('body#landing-page a.navbar-brand').addClass('opaque');
    } else {
        $('body#landing-page a.navbar-brand').removeClass('opaque');
    }
});
