let gumballs = [];


function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(255);
	if (gumballs.length < 50) {
		gumballs.push(new Gumball());
	}
	gumballs.forEach((gumball) => {
		gumball.move();
		gumball.wallCollide();
		gumball.show();
	});
}
