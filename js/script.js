$(function() {
  $('.menu-box').on('click', function() {
    $('.sp-menu').toggleClass("show");
    return false;
  });

  $(".sp-menu .Close").on("click",function(){
  	$(".sp-menu").removeClass("show");
  	return false;
  });
});

