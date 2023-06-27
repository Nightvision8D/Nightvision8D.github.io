// check if scroll is bigger than image size to add sticky class to navbar
window.addEventListener("scroll", function () {
  var header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 910);
});
