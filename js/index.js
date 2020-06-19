$(document).ready(function () {
  'use strict';

  //navbar links
  $('.nav-item').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
  });
  //navbar links

  // navbar scroll
  $(window).scroll(function () {
    if($(this).scrollTop()) {
      $('.navbar').addClass('white');
    } else {
      $('nav').removeClass('white');
    }
    });
      // navbar scroll

  //Start Header
  var header = $('header');
  header.height($(window).height());
  $(window).resize(function () {
    header.height($(window).height());
  });
  //End header


//Scroll to top
$(window).scroll(function () {
  if ($(this).scrollTop() > 800) {
    $('.top').fadeIn();
  } else {
    $('.top').fadeOut();
  }
});


$('.top').click(function () {
  $('html, body').animate({
    scrollTop: 0
  }, 800);
});
//Scroll to top




});



