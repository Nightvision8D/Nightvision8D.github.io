window.addEventListener("load", function () {
  let current = window.location.pathname;
  let links = this.document.getElementsByClassName("link");
  console.log(current);
  for (var i = 0; i < links.length; i++) {
    var link = links.item(i);
    if (link.classList.contains("underline")) {
      link.classList.remove("underline");
    }
    if (link.getAttribute("href") == current) {
      link.classList.add("underline");
    }
  }
  if (current == "/smallmatch.html" || current == "/bigmatch.html") {
    let dropBtns = this.document.getElementsByClassName("dropbtn");
    dropBtns[0].classList.add("underline");
  }
  if (current.startsWith("/match")) {
    let dropBtns = this.document.getElementsByClassName("dropbtn");
    dropBtns[1].classList.add("underline");
  }
});
