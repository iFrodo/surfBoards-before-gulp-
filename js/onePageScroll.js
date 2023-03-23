//methods
// $.fn.fullpage.setAllowScrolling(false);

let doFullpage = document.documentElement.clientWidth;
$(document).ready(function () {
  if (doFullpage > 768) {
    $("#fullpage").fullpage({
      scrollOverflow: false,
      resize: false,
      //options here
      autoScrolling: true,
      scrollHorizontally: true,
      verticalCentered: false,
      fitToSection: false,
      navigation: true,
      scrollOverflow: false,
      // fixedElements:('.header')
    });
  }
});
