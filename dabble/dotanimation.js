dots = document.getElementsByClassName("anidot");

window.addEventListener("mousemove", function (event) {
  var x = event.clientX;
  pct = 1 - x / window.innerWidth;
  for (i = 0; i < dots.length; i++) {
    dots[i].style.animationDuration = 0.5 + 2 * pct + "s";
  }
});
