if (document.readyState !== 'loading') {
  navigate();
} else {
  document.addEventListener('DOMContentLoaded', navigate);
}

var vh = window.innerHeight;
//get nav items
var nav = document.getElementsByClassName("navitems");
//get heading elements
var heads = document.getElementsByClassName("heading");
//turn heading elements into an array, no longer needed
var headsarr = Array.from(heads); 
//declare y position array
var ypos = [];


function navigate() {
  //when navitem clicked, scroll to corresponding section, leaving 120px on top
  for (let i = 0; i < nav.length; i++) {
    nav[i].addEventListener("click", function () {
      window.scrollTo({
        top: heads[i].offsetTop - 120,
        left: 0,
        behavior: 'smooth'
      });
    });
  }
  
  //function to remove active style from navitems
  function removeActive() {
    for (let i = 0; i < nav.length; i++) {
      nav[i].classList.remove("active");
    }
  }

  //when scrolled
  window.addEventListener("scroll", function () {
    for (let i = 0; i < heads.length; i++) {
      ypos[i] = heads[i].getBoundingClientRect().top;
    }
    //match navbar item to active part on screen
    for (let i = 0; i < ypos.length; i++) {
      if (i < ypos.length - 1) {
        if (ypos[i] < vh / 2 && ypos[i + 1] > vh / 2) {
          removeActive();
          nav[i].classList.add("active");
        }
      } else {
        if (ypos[i] < vh / 2) {
          removeActive();
          nav[i].classList.add("active");
        }
      }
    }
  });
};
