document.addEventListener("DOMContentLoaded", function () {
  let text = document.getElementById("bikini");

  text.addEventListener("mouseenter", function () {
    let modal = document.getElementById("bikini_modal");
    modal.style.display = "block";
  });

  text.addEventListener("mouseleave", function () {
    let modal = document.getElementById("bikini_modal");
    modal.style.display = "none";
  });
});
