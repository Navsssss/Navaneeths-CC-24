function setup() {
  createCanvas(400, 400);
  background("#A5B0F2");
  noStroke();
}

function draw() {
  // Body
  fill("#48426d");
  rect(150, 50, 100, 150, 20);

  // Eyes
  fill("#ffffff");
  ellipse(170, 100, 30);
  ellipse(230, 100, 30);

  // Inner eyes
  fill("#2AFF00");
  ellipse(170, 100, 15);
  ellipse(230, 100, 15);

  // Mouth
  fill("#fe2343");
  ellipse(200, 150, 20);

  // Antennas
  fill("#F500FF");
  triangle(180, 50, 200, 30, 220, 50);
  triangle(180, 70, 200, 90, 220, 70);

  // Legs
  fill("#FFFFFF");
  rect(160, 190, 15, 30, 10);
  rect(190, 190, 15, 50, 10);
  rect(220, 190, 15, 40, 10);
}