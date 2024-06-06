var img, x, y;
function preload() {
img = loadImage("1.jpg");

}

function setup() {
createCanvas (400, 400);
background(0);
noStroke();
image(img, 0, 0);
img.resize(400, 400);
image(img, 0, 0);
}

function draw() {
background(0);
x = mouseX;
y = mouseY;
image( img, 0, 0);
var c = get(x, y);
fill(c);
  ellipse(x,y,100,100);
}