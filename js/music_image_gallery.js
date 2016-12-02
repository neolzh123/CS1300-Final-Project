/*Global variables defined before functions*/
var index = 0;
var gallery = ["music_eems.jpg", "music_alter.jpg", "music_riley_owens.jpg", "music_sunny_weather.jpg", "wailin_brass_band.jpg"];
var apple_festival = document.getElementById('apple_festival');
var buttons = document.getElementById("buttons").getElementsByTagName("span"); 

/*Event handlers. Perform certain functions when onclick*/
document.getElementById("next_image").onclick = myNext;
document.getElementById("prev_image").onclick = myPrev;

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
        apple_festival.src = 'images/music/' + gallery[index];
    }else{
        index = 0;
        apple_festival.src = 'images/music/' + gallery[index];
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