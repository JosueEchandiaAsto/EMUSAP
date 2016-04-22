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
    maxwidth: 1100,
    namespace: "rslides-btns"
  })

  var $Comment = $(".Comment")
  var $buttonCommentshow = $(".show-C")
  var $buttonCommenthide = $(".hide-C")

  var showComment = function() {
    $Comment.addClass("is-active")
    $buttonCommenthide.addClass("is-active")
  }
  var hideComment = function() {
    $Comment.removeClass("is-active")
    $buttonCommenthide.removeClass("is-active")
  }
  $($buttonCommentshow).on("click",showComment)
  $($buttonCommenthide).on("click",hideComment)


})()
