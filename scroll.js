var timer = null;
window.addEventListener(
  "scroll",
  function () {
    if (document.getElementById("header").classList.contains("withshadow")) {
      if (timer !== null) {
        clearTimeout(timer);
      }
      timer = setTimeout(function () {
        // do something
        document.getElementById("header").style.display = "none";
      }, 1000);
    }
  },
  false
);
