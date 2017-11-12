let gumballs = [];


function setup() {
	createCanvas(windowWidth, windowHeight);
	gumballs[0] = new Gumball();
}

function draw() {
	background(255);
	gumballs[0].show();
	gumballs[0].move();
	if (gumballs[0].offscreen()) {
		gumballs[0].x = random(gumballs[0].radius, width - gumballs[0].radius);
		gumballs[0].y = - gumballs[0].radius;
		gumballs[0].velocity.x = 0;
		gumballs[0].velocity.y = 0; 
	}
}
