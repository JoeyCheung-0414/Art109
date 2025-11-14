

var socket; 

function setup() {
    createCanvas(500, 500);
    background(51);

    socket = io.connect('http://localhost:3000');
}

function draw() {
    ellipse(mouseX, mouseY, 60, 60);
}

