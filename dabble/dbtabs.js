function makeactive() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", " ");
  this.className += " active";
}

var ctgr = document.getElementsByClassName("ctgr");
var content = document.getElementsByClassName("gridcontainer");

for (let i = 0; i < ctgr.length; i++) {
  ctgr[i].addEventListener("click", makeactive);
  ctgr[i].addEventListener("click", function () {
    ctgrtxt = ctgr[i].textContent;
    console.log(ctgrtxt);

    for (let i = 0; i < content.length; i++) {
      let contenttxt = content[i].id;
      if (ctgrtxt.toLowerCase() === contenttxt.toLowerCase()) {
        content[i].style.display = "block";
      } else {
        content[i].style.display = "none";
      }
    }
  });
}
