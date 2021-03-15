// Credit:
// https://codepen.io/nickcil/pen/sfutl
// https://stackoverflow.com/questions/13725263/changing-background-opacity-of-div-using-rgba
$(window).scroll(function(){
  $("header").css("background-color", 'rgba(128, 128, 128,' + (0.7 + $(window).scrollTop() / 300) + ')');
});
