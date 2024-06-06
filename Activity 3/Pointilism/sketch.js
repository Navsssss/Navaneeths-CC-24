var img, x, y;
function preload() {
img = loadImage("1.jpg");
}

function setup() {
createCanvas (500, 500);
background(0);
noStroke();
image(img, 0, 0);
img.resize(500, 500);
image(img, 0, 0);
}



function draw() {
x = random(width);
y = random(height);
var c = img.get(x, y);
fill(c[0], c[1], c[2], 420);
  ellipse (x,y,40,35);
}