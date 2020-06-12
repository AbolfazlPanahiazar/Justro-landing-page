$(window).on("load", () => {
  $(".loader").hide();
});

$("#check-s").click(() => {
  if ($("#check-s").is(":checked") && $("#check").is(":checked")) {
    $("#check").prop("checked", false);
  }
});

$("#check").click(() => {
  if ($("#check").is(":checked") && $("#check-s").is(":checked")) {
    $("#check-s").prop("checked", false);
  }
});
