var font;
function preload() { 

font = loadFont('Birdsofparadise.ttf'); }

var points;
function setup() { 

createCanvas(600, 600); 
stroke(55); 
points = font.textToPoints('Bathspa', 100, 300, 120, { sampleFactor: 0.15 });

background(5); 
for (var i = 0; i < points.length; i++) { 
    var p = points[i]; 
    ellipse(p.x, p.y, 3, 3); 
  } 
}