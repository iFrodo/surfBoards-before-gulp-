$(function () {
  //обрабатываем клик по блоку с классом horizontal-slider__title
  $(".horizontal-slider__title").on("click", function (e) {
    e.preventDefault();
    //получаем нужные нам данные
    let $this = $(this),
      //получаем всё блоки list
      container = $this.closest(".horizontal-slider__list"),
      //получаем li по которому кликнули
      item = $this.closest(".horizontal-slider__item"),
      //получаем все другие li
      items = container.find(".horizontal-slider__item"),
      //выбираем из li активный
      activeItem = items.filter(".active"),
      //выбираем из li по которому кликнули блок контен
      content = item.find(".horizontal-slider__content-box"),
      //выбираем у li с классом active блок контент
      activeContent = activeItem.find(".horizontal-slider__content-box");

    //если нет li с классом active по которому кликнули
    if (!item.hasClass("active")) {
      //убираем класс active
      items.removeClass("active");
      //добавляем active кликнутому
      item.addClass("active");
      //у того у кого был active задаём ширину 0
      activeContent.animate({
        width: "0px",
      });
      //кликнутому 530
      content.animate({
        width: "35vw",
        height: "100vh",
      });
      //иначе
    } else {
      item.removeClass("active");
      content.animate({
        width: "0px",
        height: "0",
      });
    }
  });

  // клик вне аккордеона
  $(document).on("click", function (e) {
    let $this = $(e.target);
    if (!$this.closest(".horizontal-slider__list").length) {
      $(".horizontal-slider__content-box").animate({
        width: "0px",
      });
      $(".horizontal-slider__item").removeClass("active");
    }
  });
});