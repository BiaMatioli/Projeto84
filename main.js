canvas = document.getElementById("canvas1");
ctx = canvas.getContext("2d");

window.addEventListener("keydown", keyDown);

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
    img_img = new Image();
    img_img.onload = uploading;
    img_img.src = img_image;
}

function uploading() {
    ctx.drawImage(img_img, img_x, img_y, img_width, img_height);
}

function keyDown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if ((keyPressed >= 97 && keyPressed <= 122) || (keyPressed >= 65 && keyPressed <= 90)) {
        aplhabetkey();
        document.getElementById("d1").innerHTML = "Você pressionou uma tecla alfabeto";
        console.log("tecla alfabeto");
    }

    else if(keyPressed >= 48 && keyPressed <= 57) {
        numberkey();
        document.getElementById("d1").innerHTML = "Você pressionou uma tecla numérica";
        console.log("tecla numérica");
    }

    else if(keyPressed >= 37 && keyPressed <= 40) {
        arrowkey();
        document.getElementById("d1").innerHTML = "Você pressionou uma tecla direcional";
        console.log("tecla direcional");
    }

    else if(keyPressed == 17 && keyPressed == 18 && keyPressed == 27) {
        specialkey();
        document.getElementById("d1").innerHTML = "Você pressionou uma tecla especial";
        console.log("tecla especial");
    }

    else {
        otherkey();
        document.getElementById("d1").innerHTML = "Você pressionou uma tecla de símbolo/outro";
    }
}

function aplhabetkey() {
    img_image = "alfabeto.png";
    add();
}

function numberkey() {
    img_image = "número.png";
    add();
}

function arrowkey() {
    img_image = "direcional.png";
    add();
}

function specialkey() {
    img_image = "especial.png";
    add();
}

function otherkey() {
    img_image = "outras.png";
    add();
}
