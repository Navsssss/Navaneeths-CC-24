let particles = [];
let nums = 200;
let noiseScale = 800;
let textToDisplay = "BATH SPA UNIVERSITY";
let showText = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  for (let i = 0; i < nums; i++) {
    particles[i] = new Particle(random(width), random(height));
  }
}

function draw() {
  background(0, 10);
  for (let i = 0; i < nums; i++) {
    particles[i].move();
    particles[i].display();
    particles[i].checkEdge();
  }
  if (showText) {
    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text(textToDisplay, width / 2, height / 2);
  }
}

function mousePressed() {
  showText = true;
  setTimeout(function() {
    showText = false;
  }, 2000);
}

function Particle(x, y) {
  this.pos = createVector(x, y);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.maxSpeed = 2;
  this.diameter = 10;

  this.move = function() {
    let angle = noise(this.pos.x / noiseScale, this.pos.y / noiseScale) * TWO_PI;
    this.acc.x = cos(angle);
    this.acc.y = sin(angle);
    this.acc.mult(0.1);
    this.vel.add(this.acc);
    this.vel.limit(this.maxSpeed);
    this.pos.add(this.vel);
  }

  this.display = function() {
    stroke(255);
    strokeWeight(2);
    point(this.pos.x, this.pos.y);
  }

  this.checkEdge = function() {
    if (this.pos.x > width || this.pos.x < 0 || this.pos.y > height || this.pos.y < 0) {
      this.pos.x = random(width);
      this.pos.y = random(height);
    }
  }
}