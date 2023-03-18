const slider = $(".boards__list").bxSlider({
  pager: false,
  controls: false,
});

$(".boards__nav--next").click((e) => {
  e.preventDefault();
  slider.goToNextSlide();
});
$(".boards__nav--prev").click((e) => {
  e.preventDefault();
  slider.goToPrevSlide();
});
