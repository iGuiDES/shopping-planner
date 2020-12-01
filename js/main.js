$("ul").on("click", ".section-list-p", function () {
  $(this).toggleClass("done");
});

$("ul").on("click", "span", function (event) {
  event.stopPropagation();
  $(this)
    .parent()
    .fadeOut(function () {
      $(this).remove();
    });
});

$("input").keypress(function (event) {
  if (event.which === 13) {
    let valueInput = $(this).val();
    if (valueInput === "") {
      $(".heading-input").css("border", "2px solid red");
    } else {
      $(".heading-input").css("border", "1px solid #b690e7");
      $("ul").append(
          "<li>" + "<p>" + valueInput + "</p>" + "<span><i></i></span>" + "</li>"
      );
      $("li p").addClass("section-list-p");
      $("li").addClass("section-list");
      $("span").addClass("section-remove-list");
      $("i").addClass("far fa-trash-alt");
    }
    $(this).val("");
  }
});