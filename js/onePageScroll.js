//methods
// $.fn.fullpage.setAllowScrolling(false);

let doFullpage = document.documentElement.clientWidth;
$(document).ready(function () {
  //что бы не работал на мобилках
  // if (doFullpage > 768) {
    $("#fullpage").fullpage({
      //options here
      scrollOverflow: false,


      autoScrolling: true,
      scrollHorizontally: true,
      verticalCentered: false,
      fitToSection: false,
      navigation: true,
      scrollOverflow: false,
      // fixedElements:('.header')
    });
  }
);
