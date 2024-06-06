function setup() {
  createCanvas(400, 400);
}

function draw() {
  fill(255,0,5)
  background(150,100,255);
  //rect(x,y,width,height)
  rect(100,150,150,50)
  fill(0)
  //ellipse (x,y,width,height)
  ellipse(225,200,50,40)

  ellipse(160,200,50,40)
  
  fill(255)
  //triangle(x1,x2,y1,y2,z1,z2)
  triangle(100,150,150,200,100,200)

  stroke(0)
  strokeWeight(3)
  //line(y1,y2,x1,x2)
  line(200,150,200,200)
}