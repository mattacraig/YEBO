$(document).on('ready', function () {

  $('.bxslider').bxSlider();

  $(window).on('scroll', function() {

    var scroll = $(this).scrollTop();

    if (scroll >= ($(this).height() - $('nav').height())) {
      $('nav').addClass('nav-scrolled');
    } else {
      $('nav').removeClass('nav-scrolled');
    }

  });

});
