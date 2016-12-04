/*Global variables defined before functions*/
var index = 0;
var gallery = ["applefest_cover.jpg", "applefest_1.jpg", "applefest_2.jpg", "applefest_3.jpg", "applefest_4.jpg"];
var apple_festival = document.getElementById('apple_festival');
var buttons = document.getElementById("buttons").getElementsByTagName("span"); 

/*Event handlers. Perform certain functions when onclick*/
document.getElementById("next_image").onclick = myNext;
document.getElementById("prev_image").onclick = myPrev;
document.getElementById("one").onclick = myButton;
document.getElementById("two").onclick = myButton;
document.getElementById("three").onclick = myButton;
document.getElementById("four").onclick = myButton;
document.getElementById("five").onclick = myButton;
// document.getElementById("buttons").getElementsByTagName("span").onclick = myButtons;

/*Press next tab to select next image from the gallery*/
function myNext(){
    for (var i = 0; i < buttons.length; i++) { 
        if (buttons[i].className == "on") {
            buttons[i].className = "";
            break;
        }
    }

    if (index < gallery.length - 1) {
        buttons[index + 1].className = "on";
        index += 1;
        apple_festival.src = 'images/' + gallery[index];
    }else{
        index = 0;
        apple_festival.src = 'images/' + gallery[index];
        buttons[0].className = "on";
    }
}

/*Press previous tab to select next image from the gallery*/
function myPrev(){
    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].className == "on") {
            buttons[i].className = "";
            break;
        }
    }

    if (index > 0) {
        buttons[index - 1].className = "on";
        index -= 1;
        apple_festival.src = 'images/' + gallery[index];
    }else{
        index = gallery.length - 1;
        apple_festival.src = 'images/' + gallery[index];
        buttons[gallery.length - 1].className = "on";
    }
}

/*Press different buttons to alter the image displayed*/
function myButton(){
    var myIndex = parseInt(this.getAttribute('index'));
    index = myIndex - 1;

    for (var j = 0; j < buttons.length; j++) {
        if (this.className == "on") {
            return;
        }

        if (buttons[j].className == "on") {
            buttons[j].className = "";
            break;
        }
    }
    apple_festival.src = 'images/' + gallery[index];
    buttons[index].className = "on";
}
