/*Global variables defined before functions*/
var index = 0;
var gallery = ["applefest_cover.jpg", "applefest_1.jpg", "applefest_2.jpg", "applefest_3.jpg", "applefest_4.jpg"];
/*Images in image gallery retrieved from 
        - applefest_cover.jpg: http://www.downtownithaca.com/ithaca-events/Apple%20Harvest%20Festival%20Presented%20by%20Tompkins%20Trust
        - applefest_1.jpg: https://tnuqq21kt870t8n1egkbrmbr-wpengine.netdna-ssl.com/wp-content/uploads/2015/10/Applefest_Sam-Fuller3.jpg 
        - applefest_2.jpg: https://theithacan.org/media/apples-to-apples-annual-apple-harvest-festival-brings-thousands-to-the-commons-2/
        - applefest_3.jpg: http://ambassadors.as.cornell.edu/category/uncategorized/
        -applefest_4.jpg: https://www.youtube.com/watch?v=wifT888ypuY*/
var apple_festival = document.getElementById('apple_festival');
var buttons = document.getElementById("buttons").getElementsByTagName("span"); 

/*Event handlers. Perform certain functions when onclick*/
document.getElementById("next_image").onclick = myNext;
document.getElementById("prev_image").onclick = myPrev;
document.getElementById("1").onclick = myButton;
document.getElementById("2").onclick = myButton;
document.getElementById("3").onclick = myButton;
document.getElementById("4").onclick = myButton;
document.getElementById("5").onclick = myButton;
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
    apple_festival.src = 'images/' + gallery[index];
    buttons[index].className = "on";
}
