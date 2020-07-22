/**
 * Images clicks
*/

let photos = new Array(
    "./assets/emoji/lian-hi.PNG",
    "./assets/emoji/lian-cool.PNG", 
    "./assets/emoji/lian-smile.PNG",
    "./assets/emoji/lian-hmm.PNG",
    "./assets/emoji/lian-give-an-eye.PNG",
    "./assets/emoji/lian-query.PNG",
    "./assets/emoji/lian-yes.PNG",
    "./assets/emoji/lian-finish.PNG",
    "./assets/emoji/lian-happy-face.PNG",
    "./assets/emoji/lian-mask.PNG"
    )

let i = 0;
let j = photos.length;
let image = document.getElementById("image");

function arrowForward() {
    if(i != j-1){
        i++
    }
    image.src = photos[i]
}

function arrowBack() {
    if(i != 0){
        i--
    }
    image.src = photos[i]
}

/**
 * Button click for DateTime
*/

let dateTimeText = document.getElementById("answer-text");

function displayDate() {
    if(dateTimeText.style.display !== "block"){
        dateTimeText.style.display = "block"
        dateTimeText.innerText = Date();
    }else{
        dateTimeText.style.display = "none"
    }
}

