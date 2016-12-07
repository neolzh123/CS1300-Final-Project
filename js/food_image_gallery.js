/*Global variables defined before functions*/
var index = 0;
var gallery = ["applepizza.jpg", "caramel_apples.jpg", "applepie.jpg", "applecider.jpg", "apples.jpg"];
/*These images came from
    - applepizza.jpg: http://cookdiary.net/wp-content/uploads/images/Apple_Pizza_5053.jpg
    - caramel_apples.jpg: http://thefoodiepatootie.com/wp-content/uploads/2014/10/caramel-apples-recipe.jpg
    - applepie.jpg: http://keeprecipes.com/sites/keeprecipes/files/24026_1360179318_0.jpg
    - applecider.jpg: http://s3.amazonaws.com/etntmedia/media/images/ext/489087461/apple-cider.jpg
    - apples.jpg: http://greatist.com/sites/default/files/styles/fb-1200x630/public/wp-content/uploads/2011/11/Apples.jpg?itok=u4daunae
    */
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
        apple_festival.src = 'images/food/' + gallery[index];
    }else{
        index = 0;
        apple_festival.src = 'images/food/' + gallery[index];
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
        apple_festival.src = 'images/food/' + gallery[index];
    }else{
        index = gallery.length - 1;
        apple_festival.src = 'images/food/' + gallery[index];
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
    apple_festival.src = 'images/food/' + gallery[index];
    buttons[index].className = "on";
}
