$(window).on("load", function () {
  $("#checkoutModal").modal("show");
  $(".pay").html(`Pay Rs.${sum}`);
});
