$('.slick-carousel').slick({
  infinite: true,
  slidesToShow: 2, // Shows a three slides at a time
  slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
  arrows: false, // Adds arrows to sides of slider
  dots: false, // Adds the dots on the bottom
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


$('#testimonial-slider').slick({
  arrows: false
})


wow = new WOW(
  {
    boxClass: 'wow',      // default
    animateClass: 'rotateInDownLeft', // default
    offset: 0,          // default
    mobile: true,       // default
    live: true        // default
  }
)

wow.init();

new fullpage('#fullpage', {

});
