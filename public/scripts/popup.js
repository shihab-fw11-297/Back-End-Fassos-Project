var modal = document.querySelector("#modal");
var modalOverlay = document.querySelector("#modal-overlay");
var closeButton = document.querySelector("#close-button");
var openButton = document.querySelector("#open-button");

closeButton.addEventListener("click", function () {
  modal.classList.toggle("closed");
  modalOverlay.classList.toggle("closed");
});

openButton.addEventListener("click", function () {
  modal.classList.toggle("closed");
  modalOverlay.classList.toggle("closed");
});

var modal2 = document.querySelector("#modal2");
var modalOverlay2 = document.querySelector("#modal-overlay2");
var closeButton2 = document.querySelector("#close-button2");
var openButton2 = document.querySelector("#open-button2");

closeButton2.addEventListener("click", function () {
  modal2.classList.toggle("closed2");
  modalOverlay2.classList.toggle("closed2");
});

openButton2.addEventListener("click", function () {
  modal2.classList.toggle("closed2");
  modalOverlay2.classList.toggle("closed2");
});