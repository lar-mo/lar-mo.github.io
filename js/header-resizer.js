// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};
  function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector("header").style.padding = "8px";
    $('#logo').css('width', '25px');
    $('header').css('box-shadow',        '3px 3px 5px 4px rgba(25,25,25,0.4)');
    $('header').css('-moz-box-shadow',   '3px 3px 5px 4px rgba(25,25,25,0.4)');
    $('header').css('-webkit-box-shadow','3px 3px 5px 4px rgba(25,25,25,0.4)');
  } else {
    document.querySelector("header").style.padding = "19px";
    $('#logo').css('width', '50px');
    $('header').css('box-shadow','');
    $('header').css('-moz-box-shadow','');
    $('header').css('-webkit-box-shadow','');
  }
}
