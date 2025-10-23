let canvas; 

let xPos = 0;
let yPos = 0;
let easing = .1;

function setup() {
  canvas = createCanvas(600, 500);
  //canvas.position(0, 0);
  canvas.style("z-index", -2)

  canvas.parent('div-canvas');
  background(255);

}

function windowResized() {
  console.log("Bigger and Smaller");
  //resizeCanvas(windowWidth, windowHeight)
}

function draw() {
  background(255);
  drawCircle();
}

function mouseMoved() {
  //drawCircle(mouseX, mouseY);
  //drawCircle(mouseX - 50, mouseY - 75);
}

function drawCircle() {
  textAlign(CENTER);
  //fill(random(255), random(255), random(255), random(255));
  fill(69, 61, 219);
  textSize(20);
  
  xPos = xPos + ((mouseX - xPos) * easing);
  yPos = yPos + ((mouseY - yPos) * easing);

  text("Cat", xPos - 5, yPos - 5);
}