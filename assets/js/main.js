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

})

