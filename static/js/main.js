// check if scroll is bigger than image size to add sticky class to navbar
window.addEventListener("scroll", function () {
  var header = document.querySelector(".header");
  var image = document.querySelector(".bgimg-header");
  if (this.window.innerWidth >= 620) {
    header.classList.toggle("sticky", window.scrollY > image.clientHeight);
  }
});

// add toggle music if user is hovered over SC Bikini Bottom text
document.addEventListener("DOMContentLoaded", function () {
  var el = document.getElementById("bikini");
  el.addEventListener("mouseenter", function () {
    try {
      document.getElementById("spongebob_music").play();
    } catch (err) {}
  });
  el.addEventListener("mouseleave", function () {
    try {
      document.getElementById("spongebob_music").pause();
    } catch (err) {}
  });
});
