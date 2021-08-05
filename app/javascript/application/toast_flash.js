import * as bootstrap from "bootstrap";

document.addEventListener("turbolinks:load", function () {
  var toastElList = [].slice.call(document.querySelectorAll(".toast"));
  var toastList = toastElList.map(function (toastEl) {
    return new bootstrap.Toast(toastEl).show();
  });
});