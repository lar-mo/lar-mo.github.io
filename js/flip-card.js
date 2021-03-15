$(document).ready(function(){

  $(".hero_image").click(function(){
    $(this).toggle();
    $(this.nextElementSibling).fadeToggle(750);
  });

  $(".content").click(function(){
    $(this).toggle();
    $(this.previousElementSibling).fadeToggle(750);
  });

  $('header').click(function(){
    $('body').load(location.href);
  });

  $('.empty_row').click(function(){
    $('body').load(location.href);
  })

});
