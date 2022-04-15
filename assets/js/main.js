$(document).ready(function () {



  if ($('.snap-wrapper').length) {
    $('.snap-wrapper').scroll(function () {
      let isScroll = this.scrollTop > 100
      if (isScroll && !$('.main-navbar').hasClass('mobile-nav')) {
        $('.main-navbar').addClass('mobile-nav')
        $('.main-navbar').removeClass('navbar-expand-lg')
      }
      if (!isScroll && $('.main-navbar').hasClass('mobile-nav')) {
        $('.main-navbar').removeClass('mobile-nav')
        $('.main-navbar').addClass('navbar-expand-lg')
      }
    })
  }

  if ($(".partners-slider").length) {
    $('.partners-slider').slick({
      slidesToShow: 4,
      centerPadding: '100px',
      responsive: [
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    })
  }

  if ($(".testimonial-slider").length) {
    $('.testimonial-slider').slick({
      slidesToShow: 1,
      centerPadding: '100px',
      responsive: [
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    })
  }

  $('.our-team-list-wrapper .read-more-btn').click(function () {
    $('body').addClass('modal-open');
    $(this).parents('.list-item').find('.read-more-wrapper').addClass('active')
  })

  $('.our-team-list-wrapper .read-more-wrapper .cross-icon-wrapper').click(function () {
    $('body').removeClass('modal-open');
    $(this).parents('.read-more-wrapper').removeClass('active')
  })

  $('.our-team-list-wrapper .read-more-btn').click(function () {
    $('body').addClass('modal-open');
    $(this).parents('.list-item').find('.read-more-wrapper').addClass('active')
  })

  $('#ec-card .counting span').click(function () {
    $('#ec-card .counting span').removeClass('active');

    $(this).addClass('active');

    $(this).parents('.app-section').removeClass('second')
    $(this).parents('.app-section').removeClass('third')
    $(this).parents('.app-section').removeClass('fourth');

    $(this).parents('.app-section').find('.counting-list li').removeClass('active')
    if ($(this).html() == 2) {

      $(this).parents('.app-section').addClass('second')
    }
    if ($(this).html() == 3) {
      $(this).parents('.app-section').addClass('third')
    }
    if ($(this).html() == 4) {
      $(this).parents('.app-section').addClass('fourth')
    }
    $(this).parents('.app-section').find(`.counting-list li:nth-child(${$(this).html()})`).addClass('active')
    // console.log('aaa', a)
    // $(this).parents('.read-more-wrapper').removeClass('active')
  })

  if ($('#ec-card .app-section .counting-list li').length > 0) {
    $('#ec-card .app-section .counting-list li:first-child').addClass('active');
  }



})

