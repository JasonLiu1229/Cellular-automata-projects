/*Example code for testing*/
function setup() {
  createCanvas(400, 400);
  background(220);
  stroke(0);
  strokeWeight(8);
  noFill();
}

function draw() {
    if (mouseIsPressed) {
        line(mouseX, mouseY, pmouseX, pmouseY);
    }
}