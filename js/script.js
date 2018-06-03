(function ($) {

  "use strict";

  var NOVIS = {};


  var $sTop = $(window).scrollTop();
  var $windowHeight = $(window).height();
  NOVIS.init = function () {
    console.log('init');
    $('.c-home__text-box').css('transform', 'scale(' + (1 - $sTop / 1000) + ')');
    $('.c-home__container').css('height', Math.abs(window.pageYOffset - document.documentElement.clientHeight));

  }
  /*--------------------
           loader
    ----------------------*/

  NOVIS.loader = function () {
    $("#loader").fadeOut("slow", function () {
      $("#preloader").delay(500).fadeOut("slow");
    });
  }


  /*--------------------
       * Header Fixed
   ----------------------*/

  NOVIS.HeaderFixed = function () {
    var $sTop = $(window).scrollTop();
    var $windowHeight = $(window).height();



    if ($sTop >= 10 && $sTop <= 400) {
      $('.c-home__text-box').css('transform', 'scale(' + (1 - $sTop / 1000) + ')');
      $('.c-home__container').css('height', Math.abs(window.pageYOffset - document.documentElement.clientHeight));
      /* must be deleted
      $('.box-test').css('height',Math.abs(window.pageYOffset-document.documentElement.clientHeight));
    */
    }
    if ($sTop > 500) {
      $('.c-home__container').css('display', 'none');
    } else {
      $('.c-home__container').css('display', 'flex');
    }


    // scorll more then 100px
    if ($sTop >= 100) {

      // navbar
      $('.c-navbar').addClass('c-navbar--fixed');
      $('.c-navbar').addClass('u-bg--black');
      $('.c-navbar').addClass('c-navbar--small').removeClass('c-navbar--large');

      // filter
      $('.c-filter').css('opacity', 1 - ($sTop / 1000 * 2));

    } else {
      // navbar
      $('.c-navbar').removeClass('c-navbar--fixed');
      $('.c-navbar').removeClass('u-bg--black');
      $('.c-navbar').removeClass('c-navbar--small').addClass('c-navbar--large');

      // filter
      $('.c-filter').css('opacity', 0.8);

    }



  }

  /*--------------------
      * Navbar Menu toggler
  ----------------------*/
  // responsive
  NOVIS.manageMenu = function () {
    var $windowWidth = $(window).width();


    // hide show menu button on a specific size;
    if ($windowWidth > 800) {
      $('.c-navbar').removeClass('c-navbar--mobile');
    } else {
      $('.c-navbar').addClass('c-navbar--mobile');
      $('.c-navbar').addClass('c-navbar--small').removeClass('c-navbar--large');
    }
  }
    
  // toggle menu on mobile
  $('.c-navbar__toggler').on('click', function () {
    $(this).toggleClass('c-navbar__toggler--isOpen');
    $('.c-navbar__list').toggleClass('isOpen');
   
  })

  // hide menu when link is clicked on mobile
  $('.c-navbar__link').on('click', function () {
    $('.c-navbar__toggler').removeClass('c-navbar__toggler--isOpen');

    $('.c-navbar__list').removeClass('isOpen');
  })

  /*--------------------
       activate ScrollIt
   ----------------------*/

  NOVIS.activateScrollIt = function () {

    $.scrollIt({
      upKey: 38, // key code to navigate to the next section
      downKey: 40, // key code to navigate to the previous section
      easing: 'swing', // the easing function for animation
      scrollTime: 600, // how long (in ms) the animation takes
      activeClass: 'active', // class given to the active nav element
      onPageChange: null, // function(pageIndex) that is called when page is changed
      topOffset: -80 // offste (in px) for fixed top navigation
    });

  }


  /*--------------------
      activate Isotop
  ----------------------*/
  NOVIS.activateIsotop = function () {
    // isotope
    $('.worksGallery').isotope({
      // options
      itemSelector: '.items'
    });

    var $worksGallery = $('.worksGallery').isotope({
      // options
    });

    // filter items on button click
    $('.c-filter').on('click', '.c-filter__element', function () {

      var filterValue = $(this).attr('data-filter');

      $worksGallery.isotope({
        filter: filterValue
      });

    });

    $('.c-filter').on('click', '.c-filter__element', function () {

      $(this).addClass('active').siblings().removeClass('active');

    });
  }


  /*--------------------
      client carousel using swiper
   ----------------------*/
  NOVIS.clientCarousel = function () {
    var swiper = new Swiper('.swiper-container', {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 5500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }

  // Window load
  $(window).on('load', function () {

    NOVIS.loader();
    NOVIS.activateIsotop();
    
  });

  // Window resize



  // Document Ready
  $(document).ready(function () {

    NOVIS.init();
    NOVIS.activateScrollIt();
    NOVIS.clientCarousel();
    NOVIS.manageMenu();

  });

  $(window).on('scroll', function () {
    NOVIS.HeaderFixed();
  });


}(jQuery))