/*Global variables defined before functions*/
var index = 0;
var gallery = ["https://www.youtube.com/embed/CftfIwFDr9w", "https://www.youtube.com/embed/GEHOe5PtL7s", "https://www.youtube.com/embed/7lBtJauMnyM", "https://www.youtube.com/embed/oQ0Ej0Rtc64", "https://www.youtube.com/embed/XPINYpOwcyY"];
/*These videos were found (in order) from 
    - https://www.youtube.com/watch?v=EtM0LNQ-pMo
    - https://www.youtube.com/watch?v=CftfIwFDr9w 
    - https://www.youtube.com/watch?v=GEHOe5PtL7s 
    - https://www.youtube.com/watch?v=7lBtJauMnyM 
    - https://www.youtube.com/watch?v=oQ0Ej0Rtc64*/
var apple_festival = document.getElementById('music_video');
var buttons = document.getElementById("buttons").getElementsByTagName("span"); 

/*Event handlers. Perform certain functions when onclick*/
document.getElementById("next_image").onclick = myNext;
document.getElementById("prev_image").onclick = myPrev;
document.getElementById("1").onclick = myButton;
document.getElementById("2").onclick = myButton;
document.getElementById("3").onclick = myButton;
document.getElementById("4").onclick = myButton;
document.getElementById("5").onclick = myButton;

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
        apple_festival.src = gallery[index];
    }else{
        index = 0;
        apple_festival.src = gallery[index];
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
        apple_festival.src = gallery[index];
    }else{
        index = gallery.length - 1;
        apple_festival.src = gallery[index];
        buttons[gallery.length - 1].className = "on";
    }
}

function myButton(){
    var myIndex = parseInt(this.getAttribute('id'));
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
    apple_festival.src = gallery[index];
    buttons[index].className = "on";
}