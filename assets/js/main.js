/*
* ----------------------------------------------------------------------------------------
Author       : mahedi amin
Template Name: Green Bean Resturent Html5 Template
Version      : 1.0
* ----------------------------------------------------------------------------------------
*/


(function ($) {
  'use strict';

  jQuery(document).on("ready", function () {


/*
==========================================
   SLider Area Js paralax
==========================================
*/
$('.slider-bg').parallax("50%", -0.1);

$('.main-slider-1 a.slide-control-mr').on('click', function(){
  $('.slider-con h1,.slider-con p').addClass('animated  slideInDown');
  $('a.btn-mr,a.btn-mr-tr').addClass('animated bounceInUp');
});

/*$('.main-slider-1').carousel({
  pause: null
});*/

/*
==========================================
Jquery sticky js
==========================================
*/


$('.mbl-menu, .top-men-bar').stickMe({
 transitionStyle: 'fade',
 transitionDuration: 300,
 stickyAlready: false
});

/*
==========================================
All special food carosel  Js paralax
==========================================
*/
$('.all-spf-food').slick({
  dots: true,
  loop: true,
  speed: 300,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [{

   breakpoint: 991,
   settings: {
    slidesToShow: 2,
    infinite: true
  }

}, {

 breakpoint: 600,
 settings: {
  slidesToShow: 1,
  dots: true
}

}]
});
/*
==========================================
  All chef Js
==========================================
*/
$('.all-chef-bio').slick({
  autoplay: true,
  infinite: true,
  dots: true,
  centerMode: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerPadding: "0px",
  speed: 500,
  arrows: false,
  responsive: [{

   breakpoint: 991,
   settings: {
    slidesToShow: 3,
    infinite: true,
    centerMode: true,
  }

}, {

 breakpoint: 600,
 settings: {
  slidesToShow: 1,

}

}]
});

/*
==========================================
Counter up js
==========================================
*/
$('.counter').counterUp({
  delay: 10,
  time: 1000
});
/*
==========================================
All testimonials  carosel  Js paralax
==========================================
*/
$('.all-testi-list').slick({
  dots: true,
  loop: true,
  speed: 300,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1

});
/*
==========================================
Mean Menu Js
==========================================
*/
$('.main-menu nav').meanmenu({
  meanScreenWidth: "991",
  meanMenuContainer: '.mbl-menu'

 //siteLogo: "<a href='index.html' class='logo'><h2>green <span>been</span></h2></a>"

});

/*
==========================================
Scroll Up js
==========================================
*/

$(function () {
  $.scrollUp({
 scrollText: '<i class="fa fa-angle-up"></i>', // Text for element

});
});

});
/*
==========================================
Window Preload
==========================================
*/
  jQuery(window).load(function(){
    jQuery(".grnbn-preloder-warp").fadeOut(500);
  });

/*
==========================================
POPUP
==========================================
*/
/*$('div.popup').popup({
  content : $(this).next('div')
  beforeOpen : function(){
    $(this).next('.popup__body').css('display', 'block').css('opacity', '1');
  }
});*/
var popup = new $.Popup();


$('div.popup').on('click', function(){
  var a = $(this).clone();
  function domPopupBody(){
    if(a.find('.popup__body').is('div')) {
      return a.find('.popup__body');
    } else {
      a.attr('class', '');
      a.find('.media-body').attr('class', '');
      return a;
    }
  };
  popup.open(domPopupBody, 'function', $(this));
  $('.popup_cont .popup__body').css({
    'display': 'block',
    'opacity': '1'
  });
});


})(jQuery);

