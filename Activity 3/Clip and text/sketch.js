let img;
let maskImg;
let myFont;

function preload() {

  img = loadImage('2.jpg');
  myFont = loadFont('Comfortaa-Light.ttf');
}

function setup() {
  createCanvas(400, 400);
  maskImg = createGraphics(50,60);
  maskImg.textFont(myFont);
  maskImg.textSize(20);
  maskImg.textAlign(CENTER, CENTER);
  maskImg.fill(0);  
  maskImg.text("CAR", width / 20, height / 20);
  img.mask(maskImg);
}

function draw() {
  background(20);
  image(img, 0, 0);
}
