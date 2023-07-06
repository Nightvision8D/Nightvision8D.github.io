// check if scroll is bigger than image size to add sticky class to navbar
window.addEventListener("scroll", function () {
  var header = document.querySelector(".header");
  var image = document.querySelector(".bgimg-header");
  if (this.window.innerWidth >= 620) {
    header.classList.toggle("sticky", window.scrollY > image.clientHeight);
  }
});

// toggle music playback if user is hovered over SC Bikini Bottom text
document.addEventListener("DOMContentLoaded", function () {
  var userClicked = false;
  // check if user clicked doc so no error message comes to console
  document.addEventListener("click", function () {
    userClicked = true;
  });
  var el = document.getElementById("bikini");
  // mouseenter event on text
  el.addEventListener("mouseenter", function () {
    try {
      // start playback
      if (userClicked) document.getElementById("spongebob_music").play();
    } catch (err) {}
  });
  el.addEventListener("mouseleave", function () {
    try {
      //stop playback on mouseleave
      document.getElementById("spongebob_music").pause();
    } catch (err) {}
  });
});
