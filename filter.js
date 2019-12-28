function activate() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", " ");
    this.className += " active";
}
var ftrs = document.getElementsByClassName("filter");
var boxes = document.getElementsByClassName("box");

for (let i = 0; i < ftrs.length; i++) {
    ftrs[i].addEventListener("click", activate);
    ftrs[i].addEventListener("click", function () {
        let ctg = ftrs[i].textContent;
        console.log(ctg);
        // if (ctg == "All") {
        //     for (let i = 0; i < boxes.length; i++) {
        //         boxes[i].style.display = "inline-block";
        //     }
        // }
        if (ctg == "Product Design") {
            for (let i = 0; i < boxes.length; i++) {
                boxes[i].style.display = "inline-block";
                if (boxes[i].className != "box ux") {
                    boxes[i].style.display = "none";
                }
            }
        }
        if (ctg == "Visual/Motion Design") {
            for (let i = 0; i < boxes.length; i++) {
                boxes[i].style.display = "inline-block";
                if (boxes[i].className != "box gm") {
                    boxes[i].style.display = "none";
                }
            }
        }
        // if (ctg == "Animation") {
        //     for (let i = 0; i < boxes.length; i++) {
        //         boxes[i].style.display = "inline-block";
        //         if (boxes[i].className != "box animation") {
        //             boxes[i].style.display = "none";
        //         }
        //     }
        // }
    });
}

