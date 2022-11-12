$(document).ready(function () {
  nav = document.getElementsByClassName("navitems");
  top_check = $("#projecthead").offset().top - $(window).scrollTop();
  vh = window.innerHeight;

  //when navitem clicked, scroll to corresponding section, leaving space on top
  $(".navitems").on("click", function (scrollto) {
    scrollto.preventDefault();
    $("body, html").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top - 140,
      },
      600
    );
  });
  //remove active style from navitems
  function removeActive() {
    for (i = 0; i < nav.length; i++) {
      $(nav[i]).removeClass("activepart");
    }
  }

  if (top_check < 120) {
    $("#homelink").addClass("movedup");
    $("#navigation").addClass("movedup");
    $("#contentnav").addClass("showing");
    $("#header").addClass("withshadow");
  }

  //experiment - lift header and navbar after 5 seconds
  function hideNav() {
    $("#homelink").removeClass("movedup");
    $("#header").removeClass("withshadow");
    $("#homelink").addClass("hideup");
    $("#navigation").addClass("hideup");
    $("#contentnav").addClass("hideup");
  }

  //when scrolled, show content nav bar
  $(window).scroll(function () {
    // let top_of_window = $(window).scrollTop();
    // let bottom_of_window = $(window).scrollTop() + $(window).height();
    let top_check = $("#projecthead").offset().top - $(window).scrollTop();

    let brief_ypos = document
      .getElementById("projectbrief")
      .getBoundingClientRect().top;
    let subs = document.getElementsByClassName("heading");
    let subsarr = Array.from(subs); //turn class elements into an array
    let ypos = [];
    for (let i = 0; i < subsarr.length; i++) {
      ypos[i] = subsarr[i].getBoundingClientRect().top;
    } //create an array of headings' y-positions
    ypos.unshift(brief_ypos); //add project brief's y-position to the beginning of the y-position array

    //when top of banner reaches bottom of top bar, show shadow and content nav bar
    if (top_check < 120) {
      $("#homelink").addClass("movedup");
      $("#navigation").addClass("movedup");
      $("#contentnav").addClass("showing");
      $("#header").addClass("withshadow");
      //setTimeout(hideNav, 5000);
    } else {
      $("#header").removeClass("withshadow");
      $("#contentnav").removeClass("showing");
      $("#homelink").removeClass("movedup");
      $("#navigation").removeClass("movedup");
    }
    //match navbar item to active part on screen
    for (let i = 0; i < ypos.length; i++) {
      if (i < ypos.length - 1) {
        if (ypos[i] < vh / 2 && ypos[i + 1] > vh / 2) {
          removeActive();
          $(nav[i]).addClass("activepart");
        }
      } else {
        if (ypos[i] < vh / 2) {
          removeActive();
          $(nav[i]).addClass("activepart");
        }
      }
    }
  });
});
