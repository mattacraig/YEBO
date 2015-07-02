$(document).on('ready', function () {

  $('.bxslider').bxSlider();

  $('.main-wrapper').on('scroll', function() {

    var scroll = $('.main-wrapper').scrollTop();

    if (scroll >= ($('.main-wrapper').height() - $('nav').height())) {
      $('nav').addClass('nav-scrolled');
    } else {
      $('nav').removeClass('nav-scrolled');
    }

  });

  $('.fa-navicon').on('click', function () {

    $('.site-wrapper').toggleClass('nav-reveal');

  });

  $('.mobile-nav li a').on('click', function() {
    $('.site-wrapper').removeClass('nav-reveal');
  });

});
