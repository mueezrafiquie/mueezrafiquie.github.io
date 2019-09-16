// Bouncing Ball Demo
// Mueez

let x;
let y;
let dx = 13;
let dy = 13;
let r;
let mode = "rectangle"


function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = height/2;
  r = 100;
}

function draw() {
  background(255)


  moveShape()

  if (mode === "circle") {
    displayCircle()
  }

  if (mode === "rectangle") {
    displayRectangle()
  }
}

function windowResized() {
  setup();
}

function keyPressed() {
  if (keyCode === 32) {
    background(255)
    x = width/2
    y = height/2
  }
}


function moveShape() {
  x += dx;
  y += dy;
}


function displayCircle() {
  if (x > width - r/2 || x < 0 + r/2) {
    dx *= -1;
  }

  else if (y > height - r/2 || y < 0 + r/2) {
    dy *= -1;
  }

  fill(0);
  circle(x, y, r);
}


function displayRectangle() {
  if (mode === "rectangle") {

    fill(0)
    rect(x, y, r, r)

    if (x > width - r || x < 0 ) {
      dx *= -1;
    }

    else if (y > height - r || y < 0) {
      dy *= -1;
    }
  }
}