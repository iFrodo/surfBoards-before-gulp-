const validateFields = (form, fieldsArray) => {
  fieldsArray.forEach((field) => {
    field.removeClass("input-error");
    if (field.val().trim() === "") {
      field.addClass("input-error");
    }
  });
  const errorFields = form.find(".input-error");
  return errorFields.length === 0;
};

$(".form__btn").click((e) => {
  e.preventDefault();

  const form = $(".form");
  const name = form.find("[name = 'name']");
  const phone = form.find("[name = 'phone']");
  const comment = form.find(".form__input--textarea");
  const to = form.find("[name = 'to']");
  const content = $(".modal__content");
  isValid = validateFields(form, [name, phone, comment, to]);

  if (isValid) {
    const request = $.ajax({
      url: "https://webdev-api.loftschool.com/sendmail",
      method: "post",
      data: {
        name: name.val(),
        phone: phone.val(),
        comment: comment.val(),
        to: to.val(),
      },
    });
    request.done((data) => {
      content.removeClass("error-text");
      content.text(data.message);
    });
    request.fail((data) => {
      content.text(data.statusText);
      content.addClass("error-text");
    });
    request.always(() => {
      $(".form-modal").css({ height: "100%", width: "100%" });
    });
  }
});

$(".btn--close").click((e) => {
  e.preventDefault();
  $(".form-modal").css({ height: "0%", width: "0%" });
});
