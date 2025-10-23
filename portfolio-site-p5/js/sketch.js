

function setup() {
  let canvas;
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

}

function mouseMoved() {
  drawCircle(mouseX, mouseY);
  drawCircle(mouseX - 50, mouseY - 75);
}

function drawCircle(_x,_y) { 
  strokeWeight(0);
  fill(random(200, 255), random(200, 255), random(200, 255),);

  ellipse(_x, _y, 30, 30);
}