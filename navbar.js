$(document).ready(function () {
  top_content = $("#projectbrief").offset().top;
  subs = document.getElementsByClassName("subtitles");
  subsarr = Array.from(subs);
  seg = [];
  for (let i = 0; i < subsarr.length; i++) {
    seg[i] = subsarr[i].offsetTop;
  }
  seg.unshift(top_content);
  nav = document.getElementsByClassName("navitems");

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

  top_check = $("#projecthead").offset().top - $(window).scrollTop();
  if (top_check < 120) {
    $("#homelink").addClass("movedup");
    $("#navigation").addClass("movedup");
    $("#contentnav").addClass("showing");
    $("#header").addClass("withshadow");
  }
  //when scrolled, show content nav bar
  $(window).scroll(function () {
    let top_of_window = $(window).scrollTop();
    let bottom_of_window = $(window).scrollTop() + $(window).height();
    let top_of_project = $("#projecthead").offset().top - $(window).scrollTop();
    //when top of banner reaches bottom of top bar, show shadow and content nav bar
    if (top_of_project < 120) {
      $("#homelink").addClass("movedup");
      $("#navigation").addClass("movedup");
      $("#contentnav").addClass("showing");
      $("#header").addClass("withshadow");
    } else {
      $("#header").removeClass("withshadow");
      $("#contentnav").removeClass("showing");
      $("#homelink").removeClass("movedup");
      $("#navigation").removeClass("movedup");
    }
    //match navbar item to active part on screen
    for (let i = 0; i < seg.length; i++) {
      if (i < seg.length - 1) {
        if (seg[i] < bottom_of_window && seg[i + 1] > bottom_of_window) {
          removeActive();
          $(nav[i]).addClass("activepart");
        }
      } else {
        if (seg[i] < bottom_of_window) {
          removeActive();
          $(nav[i]).addClass("activepart");
        }
      }
    }
  });
});
