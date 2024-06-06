
var colors = ['rgb(192,192,216)','rgb(19,0,255)','rgb(0,132,255)'];
var rand;

function setup() {
	createCanvas(500, 500);
	background(220);
	frameRate(1);
	noStroke();
}

function draw() {
	for(var x=0;x < 550;x += 100) {
		for (var y=0;y < 550;y += 100) {
			rand = int(random(3));
			fill(colors[rand]);
			ellipse(x,y,100,100);	
		}
	}		
}