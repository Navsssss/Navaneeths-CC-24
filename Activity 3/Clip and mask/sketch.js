let img;
let maskImg;

function preload() {
  img = loadImage('2.jpg'); }

function setup() {
  createCanvas(300, 300);
  maskImg = createGraphics(500, 800);
  maskImg.fill(255);
  maskImg.ellipse(width / 2, height / 2, 400, 400);
  img.mask(maskImg);
}

function draw() {
  background(0);
  image(img, 0, 0);
}


