const introDiv = document.getElementById("intro");
const contentSpan = document.getElementById("typedcontent");
const typeIndicator = document.getElementById("typeindicator");

const textArray = [
  "Hello! I draw boxes",
  "design digital experiences that solve problems."
];
const typingDelay = 60;
const backspaceDelay = 30;
let charIndex = 0;
let strIndex = 0;

function addClass() {
  //change style when typing
  introDiv.classList.add("typing");
}
function removeClass() {
  introDiv.classList.remove("typing");
}

function type() {
  if (strIndex > 2) {
    contentSpan.innerHTML += "<br>";
  } else {
    var timer = setInterval(showNextChar, typingDelay);
  }

  function showNextChar() {
    if (charIndex == textArray[strIndex].length) {
      //when all characters in the current string typed
      if (strIndex == 0) {
        clearInterval(timer);
        setTimeout(removeClass, 1000);
        setTimeout(strike, 1200);
        setTimeout(stopAni, 2000);
        function strike() {
          contentSpan.innerHTML =
            'Hello! I <span class="st"><span id="stroke"></span>draw boxes</span> ';
            document.getElementById("stroke").classList.add("inmotion");
          strIndex++;
          charIndex = 0;
          start();
        }
        function stopAni() {
          document.getElementById("stroke").classList.remove("inmotion");
        }
      } else if (strIndex == 1) {
        clearInterval(timer);
        setTimeout(function(){
          contentSpan.innerHTML += ' &#128230;';
        }, 1000);
        setTimeout(removeClass, 1000);
        // contentSpan.innerHTML += '<br>';
        // strIndex++;
        // charIndex = 0;
        // type();
      } 
    } else {
      //show next character
      contentSpan.innerHTML += textArray[strIndex].charAt(charIndex);
      charIndex++;
    }
  }
}

function start() {
  setTimeout(addClass, 1000);
  setTimeout(type, 1200);
}

document.addEventListener("DOMContentLoaded", start);
