// //set item height to width
// var w = $(".item").width();
// $(".item").css({
//   height: w + "px"
// });
// $(".thumbnail").css({
//   width: w + "px",
//   height: w + "px",
//   "object-fit": "cover"
// });

// //resize items on window resize
// $(window).resize(function() {
//   var w = $(".item").width();
//   console.log(w);
//   $(".item").css({
//     height: w + "px"
//   });
//   $(".thumbnail").css({
//     width: w + "px",
//     height: w + "px",
//     "object-fit": "cover"
//   });
// });

//open and close modal
var modal = document.getElementsByClassName("modal");
var anchor = document.getElementsByClassName("item");
var close = document.getElementsByClassName("closebtn");

for (let i = 0; i < anchor.length; i++) {
  anchor[i].onclick = function() {
    modal[i].style.display = "block";
  };
  close[i].onclick = function() {
    modal[i].style.display = "none";
  };
  window.onclick = function(event) {
    if (event.target == modal[i]) {
      console.log(modal[i]);
      modal[i].style.display = "none";
    }
  };
}

//stop video when closing modal
var source = $("#player").attr("src");
close[0].onclick = function() {
  $("#player").attr("src", "");
  $("#player").attr("src", source);
  modal[0].style.display = "none";
};
