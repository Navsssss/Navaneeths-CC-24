var img;
function preload() {
img = loadImage("2.jpg");
}

function setup () {
createCanvas (500, 500)
background(0);
image(img, 0, 0);
img.resize(500, 500);
image(img, 0, 0);
}

function draw() {
background(0);
image(img, 0, 0);
var v = map(mouseX, 0, width, 2, 20);
filter(POSTERIZE, v);
}