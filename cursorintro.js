const cursorEl = document.getElementById("cursorintro");
const typedTextSpan = document.getElementById("introtext");
const tagEl = document.getElementById("tag");
const typeInd = document.getElementById("typeind");

const textArray = ["Hey there!", "Thanks for stopping by.", "Feel free to look around : )"];
const typingDelay = 50;
let charIndex = 0;
let strIndex = 0;

function addClass() {
  //change tag style
  tagEl.classList.add("typing");
  //show type indicator
  typeInd.style.display = "inline";
}

function type() {
  if (strIndex == textArray.length) {
    //all strings finished typing
    setTimeout(toRestState, 300);
    setTimeout(removeCursor, 2500);
    //show and hide chat
    tagEl.addEventListener("mouseover", show);
    tagEl.addEventListener("mouseout", toRestState);
  } else {
    var timer = setInterval(showNextChar, typingDelay);
  }
  function showNextChar() {
    if (charIndex == textArray[strIndex].length) {
      //stop when all characters in the current string typed
      clearInterval(timer);
      strIndex++;
      charIndex = 0;
      setTimeout(clearText, 1500); //clear text after delay
      function clearText() {
        typedTextSpan.textContent = "";
        type();
      }
    } else {
      //show next character
      typedTextSpan.textContent += textArray[strIndex].charAt(charIndex);
      charIndex++;
    }
  }
}

function toRestState() {
  typedTextSpan.style.display = "none";
  typeInd.style.display = "none";
  tagEl.classList.remove("typing");
}

function removeCursor() {
  cursorEl.classList.add("fadeout");
}

function show() {
  typedTextSpan.innerHTML = "👀";
  typedTextSpan.style.display = "inline";
  //typeInd.style.display = "inline";
  tagEl.classList.add("typing");
}

function start() {
  setTimeout(addClass, 3000);
  setTimeout(type, 3200);
}

document.addEventListener("DOMContentLoaded", start);
