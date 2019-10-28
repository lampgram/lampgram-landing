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
    $('#products-hub').html(language.products_hub);
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
    $('#purchase-coins').html(language.purchase_coins);
    $('#certificate-desc').html(language.certificate_desc);
    $('#invest-title').html(language.invest_title);
    $('#private-sale-text').html(language.private_sale_text);
    $('#list-text').html(language.list_text);
    $('#team-text').html(language.team_text);
    $('#currency-text').html(language.currency_text);
    $('#price-text').html(language.price_text);
    $('#email-text').html(language.email_text);
    $('#fullname-text').html(language.fullname_text);
    $('#send-btn').html(language.send_btn);
    $('.intro-lead-in').html(language.intro_lead_in);
    $('.intro-heading').html(language.intro_heading);
    $('.intro-btn').html(language.intro_btn);
    $('.services-text').html(language.services_text);
    $('.service-desc').html(language.service_desc);
    $('.ecommerce-text').html(language.ecommerce_text);
    $('.ecommerce-desc').html(language.ecommerce_desc);
    $('.blockchain-text').html(language.blockchain_text);
    $('.blockchain-desc').html(language.blockchain_desc);
    $('.security-text').html(language.security_text);
    $('.security-desc').html(language.security_desc);
    $('.portfolio-text').html(language.portfolio_text);
    $('.portfolio-desc').html(language.portfolio_desc);
    $('.daps-text').html(language.daps_text);
    $('.dapps-desc').html(language.dapps_desc);
    $('.gateways-text').html(language.gateways_text);
    $('.gateways-desc').html(language.gateways_desc);
    $('.dec-text').html(language.dec_text);
    $('.dec-desc').html(language.dec_desc);
    $('.ui-text').html(language.ui_text);
    $('.ui-desc').html(language.ui_desc);
    $('.modules-text').html(language.modules_text);
    $('.smart-text').html(language.smart_text);
    $('.about-desc').html(language.about_desc);
    $('.date-1').html(language.date1);
    $('.date-1-text').html(language.date1_text);
    $('.date-1-desc').html(language.date1_desc);
    $('.date-2').html(language.date2);
    $('.date-2-text').html(language.date2_text);
    $('.date-2-desc').html(language.date2_desc);
    $('.date-3').html(language.date3);
    $('.date-3-text').html(language.date3_text);
    $('.date-3-desc').html(language.date3_desc);
    $('.date-4').html(language.date4);
    $('.date-4-text').html(language.date4_text);
    $('.date-4-desc').html(language.date4_desc);
    $('.our-story').html(language.our_story);
    $('.amazing-team').html(language.amazing_team);
    $('.amazing-team-desc').html(language.amazing_team_desc);
    $('.skilled-team-text').html(language.skilled_team_text);
  }
  function setLanguage(lang) {
    localStorage.setItem('language', lang);
  }


  $(document).on('ready', function () {
    getLanguage();
    $(`#${localStorage.getItem('language')}`).attr("selected", true);



    // top_items = JSON.parse(top_items);
    // console.log(top_items);
    // let top_items_filtered = ``;
    // top_items.forEach(item => {
    // 	top_items_filtered = top_items_filtered + `${item.name}/$${item.price}/${item}`
    // });
    // console.log(top_items_filtered);
    // top_els_div.innerHTML = top_els_div;
  })


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
  fetch('https://lampgram.com/api/landing', { 'Access-Control-Allow-Origin': '*' }).then(
    data => data.json()
  ).then(top_items => {
    if (document.getElementById('top-price1'))
      top_items.forEach((el, i) => {
        (document.getElementById(`top-price${i + 1}`)).innerHTML = `${el.price === 'Free' ? el.price : '$' + el.price}`;
        (document.getElementById(`top-name${i + 1}`)).innerHTML = el.name;
        (document.getElementById(`top-link${i + 1}`)).setAttribute('href', `https://lampgram.com/store/product/${el._id}`);
        (document.getElementById(`top-img${i + 1}`)).setAttribute('src', el.image_url);
        if (el.price !== 'Free')
          (document.getElementById(`title${i + 1}`)).innerHTML = `<form action="https://www.coinpayments.net/index.php" method="post">
        <input type="hidden" name="cmd" value="_pay_simple">
        <input type="hidden" name="reset" value="1">
        <input type="hidden" name="merchant"
          value="f5c91579d80dd1c52ed36cabd00e4146">
        <input type="hidden" name="item_name" value="${el.name}">
        <input type="hidden" name="item_desc" value="${el.description}">
        <inpu type="hidden" name="item_number" value="item-number1">
        <input type="hidden" name="invoice" value="invoice-number1">
        <input type="hidden" name="currency" value="USD">
        <input type="hidden" name="amountf" value="${el.price}">
        <input type="hidden" name="want_shipping" value="0">
        <input type="hidden" f="success_url"
          value="https://lampgram.com">
        <input type="hidden" name="cancel_url"
          value="https://lampgram.com">
        <button type="submit" class="common-btn">Checkout Now</button>
      </form>`
      else {
        (document.getElementById(`title${i + 1}`)).innerHTML = `<a href="${el.downloadLink}"><button  type="submit" class="common-btn">Download Now</button></a>`
      }

      })

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
  });


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

    var events = [];

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