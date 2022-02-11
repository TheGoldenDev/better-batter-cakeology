/*

Script  : Main JS
Version : 1.0
Author  : Surjith S M
URI     : http://themeforest.net/user/surjithctly

Copyright © All rights Reserved
Surjith S M / @surjithctly

*/

$(function () {
  'use strict';

  /* ================================================
        Hide Preloader on Click
       ================================================ */

  $('.preloder').on('click', function () {
    $(this).fadeOut();
  });

  /* ================================================
       Navigation Menu - Hover
       ================================================ */

  function bindNavbar() {
    if ($(window).width() > 768) {
      $('.navbar .dropdown')
        .on('mouseover', function () {
          $('.dropdown-toggle', this).next('.dropdown-menu').show();
        })
        .on('mouseout', function () {
          $('.dropdown-toggle', this).next('.dropdown-menu').hide();
        });

      $('.dropdown-toggle').on('click', function () {
        if ($(this).next('.dropdown-menu').is(':visible')) {
          window.location = $(this).attr('href');
        }
      });
    } else {
      $('.navbar-default .dropdown').off('mouseover').off('mouseout');
    }
  }

  $(window).resize(function () {
    bindNavbar();
  });

  bindNavbar();

  /* ================================================
       Ispotope Menu Filter
       ================================================ */

  //Isotope menu
  if ($('.menu-items').length) {
    var $grid = $('.menu-items').isotope({
      // options
      itemSelector: '.menu-item',
      layoutMode: 'fitRows',
    });
    // filter items on button click
    $('.menu-tags').on('click', 'span', function () {
      $('.menu-tags span').removeClass('tagsort-active');
      $(this).toggleClass('tagsort-active');

      var filterValue = $(this).attr('data-filter');
      $grid.isotope({
        filter: filterValue,
      });
    });
  }

  //Isotope menu
  if ($('.menu-items2').length) {
    var $grids = $('.menu-items2').isotope({
      // options
      itemSelector: '.menu-item2',
      layoutMode: 'fitRows',
    });
    // filter items on button click
    $('.menu-tags2').on('click', 'span', function () {
      $('.menu-tags2 span').removeClass('tagsort2-active');
      $(this).toggleClass('tagsort2-active');

      var filterValue = $(this).attr('data-filter');
      $grids.isotope({
        filter: filterValue,
      });
    });
  }

  //Isotope menu
  if ($('.menu-items3').length) {
    var $grid3 = $('.menu-items3').isotope({
      // options
      itemSelector: '.menu-item3',
      layoutMode: 'fitRows',
    });
    // filter items on button click
    $('.menu-tags3').on('click', 'span', function () {
      $('.menu-tags3 span').removeClass('tagsort3-active');
      $(this).toggleClass('tagsort3-active');

      var filterValue = $(this).attr('data-filter');
      $grid3.isotope({
        filter: filterValue,
      });
    });
  }

  //Isotope menu
  if ($('.menu-items4').length) {
    var $grid4 = $('.menu-items4').isotope({
      // options
      itemSelector: '.menu-item4',
      layoutMode: 'fitRows',
    });
    // filter items on button click
    $('.menu-tags4').on('click', 'span', function () {
      $('.menu-tags4 span').removeClass('tagsort4-active');
      $(this).toggleClass('tagsort4-active');

      var filterValue = $(this).attr('data-filter');
      $grid4.isotope({
        filter: filterValue,
      });
    });
  }

  /* ================================================
       Slick Slider
       ================================================ */

  //slick slider for testimonial
  if ($('.testimonial-slider .slides').length) {
    $('.testimonial-slider .slides').slick({
      autoplay: true,
      autoplaySpeed: 10000,
      arrows: false,
      dots: true,
    });
  }

  // Services Carousel
  if ($('.services-slider').length) {
    $('.services-slider').slick({
      dots: false,
      arrows: false,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }

  /* ================================================
       Instagram Feed
       ================================================ */

  if ($('#instafeed').length) {
    var ig_user = $('#instafeed').attr('data-username');
    var ig_access_token = $('#instafeed').attr('data-access-token');
    var ig_cliet_id = $('#instafeed').attr('data-client-id');

    var user_pacehold = 'YOUR_INSTAGRAM_USERNAME_HERE';
    var access_pacehold = 'YOUR_INSTAGRAM_ACCESS_TOKEN_HERE';
    var client_pacehold = 'YOUR_INSTAGRAM_CLIENT_ID_HERE';

    if (
      ig_user == user_pacehold ||
      ig_access_token == access_pacehold ||
      ig_cliet_id == client_pacehold
    ) {
      $('#instafeed').html(
        '<div style="background:#FCFCFC; padding:70px 20px; text-align:center;"><p style="max-width:500px; margin:0 auto;">To display Instagram Photos, Please add your username, access token and client id in the HTML.<p><div>'
      );
    } else {
      jQuery.fn.spectragram.accessData = {
        accessToken: ig_access_token,
        clientID: ig_cliet_id,
      };

      $('#instafeed').spectragram('getUserFeed', {
        query: ig_user,
        wrapEachWith: '<span></span>',
        complete: function () {
          $('#instafeed').owlCarousel({
            center: true,
            loop: true,
            responsive: {
              0: {
                items: 3,
              },
              600: {
                items: 5,
              },
              1000: {
                items: 8,
              },
            },
          });
        },
      });
    }
  }

  /* ================================================
       Magnific Popup
       ================================================ */

  //Magnific pop
  if ($('.about-photo img').length) {
    $('.about-photo img').magnificPopup({
      type: 'image',
      removalDelay: 300,
      mainClass: 'mfp-fade',
    });
  }

  if ($('.gallery-item').length) {
    $('.gallery-item').magnificPopup({
      type: 'image',
      removalDelay: 300,
      mainClass: 'mfp-fade',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
      },
    });
  }

  /* ================================================
       jQuery Validate - Reset Defaults
       ================================================ */

  if ($.validator) {
    $.validator.setDefaults({
      ignore: [],
      highlight: function (element) {
        $(element).closest('.form-group').addClass('has-error');
      },
      unhighlight: function (element) {
        $(element).closest('.form-group').removeClass('has-error');
      },
      errorElement: 'small',
      errorClass: 'help-block',
      errorPlacement: function (error, element) {
        if (
          element.parent('.input-group').length ||
          element.parent('label').length
        ) {
          error.insertAfter(element.parent());
        } else {
          error.insertAfter(element);
        }
      },
    });
  }

  /* ================================================
        Wow Animation
       ================================================ */

  var scrollAnim = $('body').data('scroll-animation');

  if (scrollAnim) {
    //Wowjs
    new WOW().init();
  }

  /* ================================================
       Fixed Navbar
       ================================================ */

  $(window).scroll(function () {
    var value = $(this).scrollTop();
    if (value > 350)
      $('.navbar-fixed-top').css('background', 'rgba(0, 0, 0, 0.9)');
    else $('.navbar-fixed-top').css('background', 'rgba(0, 0, 0, 0.3)');
  });
}); /* End Strict Function */
