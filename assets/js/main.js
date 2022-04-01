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