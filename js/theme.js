// js Document

// Created on : 05/12/2018. 
// Description: cryto - Bitcoin & Cryptocurrency Landing Page HTML Template.
// Version    : 1.0.
// Author     : @creativegigs.


(function ($) {
  "use strict";

  var language;

  function getLanguage() {
    let lang = localStorage.getItem('language');
    if (lang == 'ru') {
      $('a.nav-link').css('font-size', '17.5px');
      // $('a.nav-link').css('margin-top', '3px');
      $('a.nav-link').css('margin', '3px 8px 0px 8px');
      $('h1').css('font-family', 'Arial');
      $('h1').css('font-size', '40.5px');
      $('h2').css('font-size', '37.5px');
      $('#first_h').css('background-color', '#FFFF00');
    }
    else {
      $('h1').css('font-family', 'brandon_grotesquebold');
      $('a.nav-link').css('font-size', '20px');
    }

    (lang == null) ? setLanguage('en') : false;
    $.ajax({
      url: '/language/' + localStorage.getItem('language') + '.json',
      dataType: 'json', async: false, dataType: 'json',
      success: function (lang) { language = lang }
    });

    $('#exchange-text').html(language.exchange);
    $('#login-text').html(language.login);
    $('#store-text').html(language.store);
    $('#invest-text').html(language.invest);
    $('#list-text').html(language.list);
    $('#about-text').html(language.about);
    $('#first-header-text').html(language.first_h);
    $('#f-p').html(language.f_p);
    $('#store-link').html(language.store_l);
    $('#toggle-dropdown').html(language.toggle_dropdown);
    $('#d-osx').html(language.d_osx)
    $('#d-ios').html(language.d_ios);
    $('#d-android').html(language.d_android);
    $('#d-win').html(language.d_win);
    $('#d-linux').html(language.d_linux);
    $('#market-cap').html(language.market_cap);
    $('#total-users').html(language.total_users);
    $('#trade-volume').html(language.trade_volume);
    $('#exchange-rate').html(language.exchange_rate);
    $('#features-h2').html(language.features_h);
    $('#features-h3-1').html(language.features_h3_1);
    $('#features-p1').html(language.features_p1);
    $('#features-h3-2').html(language.features_h3_2);
    $('#features-p2').html(language.features_p2);
    $('#features-h3-3').html(language.features_h3_3);
    $('#features-p3').html(language.features_p3);
    $('.learn-more').html(language.learn_more);
    $('#features2-h2-1').html(language.features2_h2_1);
    $('#features2-h2-2').html(language.features2_h2_2);
    $('#features2-h2-3').html(language.features2_h2_3);
    $('#features2-p1').html(language.features2_p1);
    $('#features2-p2').html(language.features2_p2);
    $('#features2-p3').html(language.features2_p3);
    $('#coin-sale-text').html(language.coin_sale_text);
    $('#coin-sale-p').html(language.coin_sale_p);
    $('#coin-stage1').html(language.coin_stage1);
    $('#coin-stage1-p').html(language.coin_stage1_p);
    $('#coin-stage1-date').html(language.coin_stage1_date);
    $('#coins-to-sell-1').html(language.coins_to_sell_1);
    $('#stage1-bonus').html(language.stage1_bonus);
    $('#stage1-bonus-p').html(language.stage1_bonus_p);
    $('#coin-sale-p-2').html(language.coin_sale_p_2);
    $('#coin-presale-1').html(language.coin_presale_1);
    $('#coin-stage2').html(language.coin_stage2);
    $('#coin-stage2-p').html(language.coin_stage2_p);
    $('#coin-stage2-date').html(language.coin_stage2_date);
    $('#stage2-bonus-p').html(language.stage2_bonus_p);
    $('#soft-cap').html(language.soft_cap);
    $('#coin-sale-allocation').html(language.coin_sale_allocation);
    $('#coin-sale-p-1').html(language.coin_sale_p_1);
    $('#coin_presale_1').html(language.coin_presale_1);
    $('#coin-presale-2').html(language.coin_presale_2);
    $('#coin-presale-3').html(language.coin_presale_3);
    $('#road-map').html(language.road_map);
    $('#road-map-p').html(language.road_map_p);
    $('#dont-miss-mobile').html(language.dont_miss_mobile);
    $('#dont-miss-mobile-p').html(language.dont_miss_mobile_p);
    $('#dont-miss-mobile-h4').html(language.dont_miss_mobile_h6);
    $('#dont-miss-mobile-p2').html(language.dont_miss_mobile_p2);
    $('#bragging').html(language.bragging);
    $('#bragging-p').html(language.bragging_p);
    $('#global-customers').html(language.global_customers);
    $('#years-exp').html(language.years_exp);
    $('#cur-stocks').html(language.cur_stocks);
    $('#solutions-all').html(language.solutions_all);
    $('#solutions-all-work').html(language.solutions_all_work);
    $('#solutions-all-p').html(language.solutions_all_p);
    $('#all-ousourcing').html(language.all_ousourcing);
    $('#all-ousourcing-clients').html(language.all_ousourcing_clients);
    $('#bts-desc').html(language.bts_desc);
    $('#lampgram-store-desc').html(language.lampgram_store_desc);
    $('#xov-desc').html(language.xov_desc);
    $('#dao-desc').html(language.dao_desc);
    $('#apasia-desc').html(language.apasia_desc);
    $('#meta1-desc').html(language.meta1_desc);
    $('#get-in-touch').html(language.get_in_touch);
    $('#get-in-touch-desc').html(language.get_in_touch_desc);
    $('#first-name').html(language.first_name);
    $('#last-name').html(language.last_name);
    $('#contact-email').html(language.contact_email);
    $('#contact-website').html(language.contact_website);
    $('#contact-topic').html(language.contact_topic);
    $('#contact-button').html(language.contact_button);
    $('#success-contact').html(language.success_contact);
    $('#failed-contact').html(language.failed_contact);
    $('#btc-donation').html(language.btc_donation);
    $('#quick-links').html(language.quick_links);
    $('#quick-links1').html(language.quick_links1);
    $('#quick-links2').html(language.quick_links2);
    $('#quick-links3').html(language.quick_links3);
    $('#quick-links4').html(language.quick_links4);
    $('#quick-links5').html(language.quick_links5);
    $('#about-us').html(language.about_us);
    $('#about-us1').html(language.about_us1);
    $('#about-us2').html(language.about_us2);
    $('#about-us3').html(language.about_us3);
    $('#about-us4').html(language.about_us4);
    $('#about-us5').html(language.about_us5);
    $('#become-member').html(language.become_member);
    $('#become-member1').html(language.become_member1);
    $('#become-member2').html(language.become_member2);
    $('.copyright').html(language.copyright);
  }
  function setLanguage(lang) {
    localStorage.setItem('language', lang);
  }


  $(document).on('ready', function () {
    getLanguage();
    $(`#${localStorage.getItem('language')}`).attr("selected", true);

    // fetch('https://api.allorigins.win/raw?url=https://api.binance.com/api/v1/ticker/24hr?symbol=BTSBTC', { 'Access-Control-Allow-Origin': '*' })
    //  .then(data => (data.json()))
    //   .then(res => {
    //     $('.ex-rate').html(`${res.priceChangePercent}%`);

    //     if (res.priceChangePercent >= 0) {
    //       $('.ex-icon').addClass('range-up');
    //       $('.arrow-ex-icon').addClass('flaticon-up-caret');
    //     }
    //     else {
    //       $('.ex-icon').addClass('range-down');
    //       $('.arrow-ex-icon').addClass('flaticon-down-caret');
    //     }

    //     fetch('https://api.allorigins.win/raw?url=https://api.binance.com/api/v1/ticker/24hr?symbol=BTCUSDT', { 'Access-Control-Allow-Origin': '*'})
    //     .then(data => (data.json()))
    //       .then(respon => {
    //         let btcRate = respon.weightedAvgPrice;
    //         $('.ex-amount').text(`$${(btcRate * res.weightedAvgPrice).toPrecision(1)}`);
    //         $('.tr-amount').text(`$${(res.quoteVolume * btcRate).toPrecision(6)}`);
    //         $('.amount-g').html(`$${(res.weightedAvgPrice * btcRate * 2723360000).toPrecision(9)}`);
    //       })
    //   });


    // -------------------- Navigation Scroll
    $(window).on('scroll', function () {
      var sticky = $('.theme-main-menu'),
        scroll = $(window).scrollTop();
      if (scroll >= 100) sticky.addClass('fixed');
      else sticky.removeClass('fixed');

    });




    // ------------------------- Add OnepageNav
    if ($('body').length) {
      // Smooth scrolling using jQuery easing
      $('a.js-scroll-trigger[href*="#"]:not([href="#"])').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: (target.offset().top - 54)
            }, 1000, "easeInOutExpo");
            return false;
          }
        }
      });

      // Closes responsive menu when a scroll trigger link is clicked
      $('.js-scroll-trigger').on('click', function () {
        $('.navbar-collapse').collapse('hide');
      });

      // Activate scrollspy to add active class to navbar items on scroll
      $('body').scrollspy({
        target: '#mega-menu-holder',
        offset: 100
      });
    }

    // ------------------------------ Video Blog 
    var embed = $(".embed-video");
    if (embed.length) {
      embed.fitVids();
    }


    // ------------------------ Market Rate Slider
    var mSlider = $("#market-rate");
    if (mSlider.length) {
      mSlider.owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 1000,
        smartSpeed: 1200,
        autoplayHoverPause: true,
        lazyLoad: true,
        responsive: {
          0: {
            items: 1
          },
          500: {
            items: 2
          },
          992: {
            items: 3
          },
          1300: {
            items: 4,
          }
        },
      })
    }



    // ------------------------------- Testimonial Slider
    var tSlider = $(".testimonial-slider");
    if (tSlider.length) {
      tSlider.owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        autoplay: true,
        margin: 30,
        autoplayTimeout: 4000,
        smartSpeed: 1200,
        autoplayHoverPause: true,
        lazyLoad: true,
        responsive: {
          0: {
            items: 1
          },
          500: {
            items: 1
          },
          992: {
            items: 2
          }
        },
      })
    }


    // ------------------------------- Testimonial Slider
    var tSlider = $(".testimonial-slider-two");
    if (tSlider.length) {
      tSlider.owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        autoplay: true,
        margin: 30,
        autoplayTimeout: 4000,
        smartSpeed: 1200,
        autoplayHoverPause: true,
        lazyLoad: true,
        responsive: {
          0: {
            items: 1
          },
          992: {
            items: 2
          },
          1530: {
            items: 3
          }
        },
      })
    }


    // ------------------------------- Partner Slider
    var pSlider = $(".partner-slider");
    if (pSlider.length) {
      pSlider.owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1200,
        autoplayHoverPause: true,
        lazyLoad: true,
        responsive: {
          0: {
            items: 2
          },
          768: {
            items: 3
          },
          992: {
            items: 4
          },
          1200: {
            items: 5
          }
        },
      })
    }


    // ------------------------------- Work Progress Slider
    var pSlider = $(".progress-slider");
    if (pSlider.length) {
      pSlider.owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        margin: 30,
        autoplayTimeout: 4000,
        smartSpeed: 1200,
        autoplayHoverPause: true,
        lazyLoad: true,
        responsive: {
          0: {
            items: 1
          },
          576: {
            items: 2
          },
          1550: {
            items: 3
          }
        },
      })
    }


    // ------------------------- Road Map
    var timeline = $('#timeline-frame');
    if (timeline.length) {

      var events = [
        {
          date: 'Dec 28, 2018',
          content: '<p>Development <br> Started</p>'
        },
        {
          date: 'June 14, 2019',
          content: '<p>Pre-ICO Opens</p>'
        },
        {
          date: 'October 24, 2019',
          content: '<p>Private Coin <br> Round</p>'
        },
        {
          date: 'November 14, 2019',
          content: '<p>Pre-ICO <br> Closes</p>'
        },
        {
          date: 'December 24, 2019',
          content: '<p>Decentralized <br> Platform Launch</p>'
        },
        {
          date: 'January 15, 2020',
          content: '<p>App Integration <br> Process</p>'
        },
        {
          date: 'Q2 - 2020',
          content: '<p>Future significant expand stage</p>'
        },
        {
          date: 'Q3 - 2020',
          content: '<p>Future significant expand stage 2</p>'
        },
        {
          date: 'Q4 - 2020',
          content: '<p>Future significant expand stage 3</p>'
        },
        {
          date: 'Q1 - 2021',
          content: '<p>Future significant expand stage 4</p>'
        },
        {
          date: 'Q2 - 2021',
          content: '<p>Future significant expand stage 5</p>'
        },
        {
          date: 'Q3 - 2021',
          content: '<p>Future significant expand stage 6</p>'
        },
        {
          date: 'Q4 - 2021',
          content: '<p>Future significant expand stage 7</p>'
        },
        {
          date: 'Q1 - 2022',
          content: '<p>Future significant expand stage 8</p>'
        },
        {
          date: 'Q2 - 2022',
          content: '<p>Future significant expand stage 9</p>'
        }
      ];

      timeline.roadmap(events, {
        eventsPerSlide: 6,
        slide: 1,
        prevArrow: '<i style="color: white" class="fa fa-angle-left" aria-hidden="true"></i>',
        nextArrow: '<i style="color: white" class="fa fa-angle-right" aria-hidden="true"></i>'
      });
    }





    // -------------------- Remove Placeholder When Focus Or Click
    $("input,textarea").each(function () {
      $(this).data('holder', $(this).attr('placeholder'));
      $(this).on('focusin', function () {
        $(this).attr('placeholder', '');
      });
      $(this).on('focusout', function () {
        $(this).attr('placeholder', $(this).data('holder'));
      });
    });


    // ----------------------------- Counter Function
    var timer = $('.timer');
    if (timer.length) {
      timer.appear(function () {
        timer.countTo();
      });
    }

    // ------------------------------------- Fancybox
    var fancy = $(".fancybox");
    if (fancy.length) {
      fancy.fancybox({
        arrows: true,
        animationEffect: "zoom-in-out",
        transitionEffect: "zoom-in-out",
      });
    }


    // ------------------------------ Language Switcher
    var plang = $('#polyglotLanguageSwitcher');
    if (plang.length) {
      plang.polyglotLanguageSwitcher({
        effect: 'fade',
        testMode: true,
        onChange: function (evt) {
          console.log("The selected language is: " + evt.selectedItem);
          setLanguage(evt.selectedItem);
          getLanguage();
        }
      });
    };


    // ---------------------------------- Validation Alert
    var closeButton = $(".closeAlert");
    if (closeButton.length) {
      closeButton.on('click', function () {
        $(".alert-wrapper").fadeOut();
      });
      closeButton.on('click', function () {
        $(".alert-wrapper").fadeOut();
      })
    };


    // ------------------------------- Related Blog Slider
    var tSlider = $(".related-blog-slider");
    if (tSlider.length) {
      tSlider.owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        smartSpeed: 1100,
        lazyLoad: true,
        responsive: {
          0: {
            items: 1
          },
          500: {
            items: 2
          },
          992: {
            items: 3
          }
        },
      })
    };


    // -------------------------------- Accordion Panel
    if ($('.theme-accordion > .panel').length) {
      $('.theme-accordion > .panel').on('show.bs.collapse', function (e) {
        var heading = $(this).find('.panel-heading');
        heading.addClass("active-panel");

      });
      $('.theme-accordion > .panel').on('hidden.bs.collapse', function (e) {
        var heading = $(this).find('.panel-heading');
        heading.removeClass("active-panel");
        //setProgressBar(heading.get(0).id);
      });
      $('.panel-heading a').on('click', function (e) {
        if ($(this).parents('.panel').children('.panel-collapse').hasClass('in')) {
          e.stopPropagation();
        }
      });
    };
  });

  $(window).on('load', function () { // makes sure the whole site is loaded

    // -------------------- Site Preloader
    $('#loader').fadeOut(); // will first fade out the loading animation
    $('#loader-wrapper').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({ 'overflow': 'visible' });


    // ------------------------------- AOS Animation 
    AOS.init({
      duration: 1000,
      mirror: true
    });



  })

})(jQuery)