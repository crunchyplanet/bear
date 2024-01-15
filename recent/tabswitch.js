function makeactive() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", " ");
  this.className += " active";
}

var pjtab = document.getElementsByClassName("pjtab");
var embed = document.getElementsByClassName("figmaembed");

for (let i = 0; i < pjtab.length; i++) {
  pjtab[i].addEventListener("click", makeactive);
  pjtab[i].addEventListener("click", function () {
    for (let j=0; j < embed.length; j++) {
      if (j==i) {
        embed[j].style.display = "block";
      } else {
        embed[j].style.display = "none";
      }
    }
  });
}

