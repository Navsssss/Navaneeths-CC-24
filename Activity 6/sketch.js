let trail = [];

function setup() {
  createCanvas(800,800);
}

function draw() {
  background(20);
  trail.push({ x: mouseX, y: mouseY });
  for (let i = 0; i < trail.length; i++) {
    ellipse(trail[i].x, trail[i].y, 100, 100);
  }
  if (trail.length > 50) {
    trail.splice(0, 1);
  }
}
