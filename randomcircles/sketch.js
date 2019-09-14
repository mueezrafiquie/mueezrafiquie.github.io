// Random Circles Demo
// Mueez

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(225);
}

function draw() {
  let x = random(0, width);
  let y = random(0, height);
  let size = random(10, 50)
  
  let r = random(0, 255);
  let g = random(0, 255);
  let b = random(0, 255);
  let o = random(0, 255)
  
  fill(r, g, b, o);
  noStroke();
  circle(x, y, size);
}

function keyPressed() {
  if (keyCode === 32) {
    background(255);
  }
}  