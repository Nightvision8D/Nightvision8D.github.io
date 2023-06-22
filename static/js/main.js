window.addEventListener("scroll", function () {
  var header = document.querySelector(".header");
  var image = document.querySelector(".bgimg-1");
  if (this.window.innerWidth >= 620) {
    header.classList.toggle("sticky", window.scrollY > image.clientHeight);
  }
});
