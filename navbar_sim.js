$(document).ready(function () {
  top_content = $("#projecttitle").offset().top;

  top_check = $("#projecttitle").offset().top - $(window).scrollTop();
  if (top_check < 120) {
    $("#homelink").addClass("nudge");
    $("#navigation").addClass("nudge");
    $("#header").addClass("withshadow");
  }
  //when scrolled, show content nav bar
  $(window).scroll(function () {
    let top_of_window = $(window).scrollTop();
    let bottom_of_window = $(window).scrollTop() + $(window).height();
    let top_of_project =
      $("#projecttitle").offset().top - $(window).scrollTop();
    //when top of banner reaches bottom of top bar, show shadow and content nav bar
    if (top_of_project < 120) {
      $("#homelink").addClass("nudge");
      $("#navigation").addClass("nudge");
      $("#header").addClass("withshadow");
    } else {
      $("#header").removeClass("withshadow");
      $("#homelink").removeClass("nudge");
      $("#navigation").removeClass("nudge");
    }
  });
});
