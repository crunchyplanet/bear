import { annotate } from "https://unpkg.com/rough-notation?module";

var hls = document.getElementsByClassName("hl");
var hlarr = Array.from(hls);
var passed = [];
var ypos = [];
var vh = window.innerHeight;
for (let i = 0; i < hlarr.length; i++) {
  passed[i] = 0;
}

window.onscroll = function () {
  for (let i = 0; i < hlarr.length; i++) {
    ypos[i] = hlarr[i].getBoundingClientRect().top;
  }
  var annotations = [];

  for (let i = 0; i < hlarr.length; i++) {
    annotations[i] = annotate(hlarr[i], {
      type: "highlight",
      color: "#a6dde8",
      iterations: 1,
      multiline: true,
    });
  }

  for (let i = 0; i < ypos.length; i++) {
    if (passed[i] == 0) {
      if (ypos[i] < (2 * vh) / 3) {
        annotations[i].show();
        passed[i] = 1;
      }
    }
  }
};

// const a1 = document.getElementById('ooo1');
// const a2 = document.getElementById('ooo2');

// const b1 = annotate(a1, { type: 'highlight', color: '#d8f0ee', iterations: 1, multiline: true });
// const b2 = annotate(a2, { type: 'highlight', color: '#d8f0ee', iterations: 1, multiline: true });

// b1.show();
// b2.show();
