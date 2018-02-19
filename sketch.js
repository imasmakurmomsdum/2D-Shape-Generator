//This program is based on the website...
//http://paulbourke.net/geometry/supershape/

//It focuses on drawing supershapes using the 
//formula found on Paul Bourke's website.

//This equation is the supershape function


var sliderm;
var slidern1;
var slidern2;
var slidern3;
var slidera;
var sliderb;


var n1 = 1;
var n2 = 1;
var n3 = 1;
var m = 5;
var a = 1;
var b = 1;

function setup() {
	h1 = createElement('h1', 'This is a 2D Shape Generator with some randomness');
	createP("Use the sliders below to change the variables.");
	createCanvas(400, 400);

	createP("m : 0 - 30");
	sliderm = createSlider(0, 30, 5, 0.1);
	createP("n1 : 0.5 - 30");
	slidern1 = createSlider(0.5, 30, 1, 0.1);
	createP("n2 : 0 - 5");
	slidern2 = createSlider(0, 5, 1, 0.05);
	createP("n3 : 0 - 30");
	slidern3 = createSlider(0, 30, 1, 0.1);
	createP("a : 0.5 - 2");
	slidera = createSlider(0.5, 2, 1, 0.02);
	createP("b : 0 - 2");
	sliderb = createSlider(0, 2, 1, 0.02);

}

function supershape(theta) {

	var part1 = (1 / a) * cos(theta * m /4)
	part1 = abs(part1);
	part1 = pow(part1, n2);

	var part2 = (1 / b) * sin(theta * m /4)
	part2 = abs(part2);
	part2 = pow(part2, n3);

	var part3 = pow(part1 + part2, 1 / n1);

	if (part3 == 0) {
		return 0;
	}

	return (1 / part3);
}

function draw() {
	m = sliderm.value();
	n1 = slidern1.value();
	n2 = slidern2.value();
	n3 = slidern3.value();
	a = slidera.value();
	b = sliderb.value();
	background(50, 50, 150);

	translate(width / 2, height / 2);



	stroke(random(100, 100, 100));
	strokeWeight(random(10));
	noFill();

	var radius = 100;
	var total = 1000;
	var increment = TWO_PI / total;
	beginShape();

	for (var angle = 0; angle < TWO_PI; angle += increment) {

		var r = supershape(angle);
		var x = radius * r * cos(angle);
		var y = radius * r * sin(angle);
		vertex(x, y);


	}

	endShape(CLOSE);
}
