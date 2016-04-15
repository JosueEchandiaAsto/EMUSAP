(function() {
  $(window).scroll(function(){
  var nav = $('#nav'),
      scroll = $(window).scrollTop();

  if (scroll >= 112) nav.addClass('fixed-nav');
  else nav.removeClass('fixed-nav');
  });

  $(".rslides").responsiveSlides({
    auto: true,
    pager: true,
    nav: true,
    speed: 500,
    maxwidth: 1000,
    namespace: "rslides-btns"
  })
})()
