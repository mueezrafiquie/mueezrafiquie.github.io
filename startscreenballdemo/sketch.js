// Bouncing Ball Demo with Start Menu and State variables
// Mueez

let x;
let y;
let dx = 13;
let dy = 13;
let r;
let state = "menu"

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  r = 50;
}

function draw() {
  background(255)

  if (state === "menu") {
    showMenu();
    checkIfButtonClicked();
  }
  else if (state === "circle") {
    displayCircle()
    moveShape()
  }
  else if (state === "rectangle") {
    displayRectangle()
    moveShape()
  }
}


function showMenu() {
  //rectangle button
  rectMode(CENTER);
  fill(255, 0, 0, 125)
  rect(width / 2, height / 2 - 100, 400, 100)
  textAlign(CENTER, CENTER);
  textSize(50)
  fill(0)
  text("Rectangle", width / 2, height / 2 - 100)

  //circle button
  fill(255, 0, 0, 125)
  rect(width / 2, height / 2 + 100, 400, 100)
  fill(0)
  text("Circle", width / 2, height / 2 + 100)
}

function checkIfButtonClicked() {
  if (mouseIsPressed) {
    if (mouseX > width/2 - 200 && mouseX < width/2 + 200 &&
        mouseY > height/2 - 100 - 75 && mouseY < height/2 - 100 + 75) {
          state = "rectangle";
        }
    if (mouseX > width/2 - 200 && mouseX < width/2 + 200 &&
      mouseY > height/2 + 100 - 75 && mouseY < height/2 + 100 + 75) {
        state = "circle";
          }
  }
}


function windowResized() {
  setup();
}

function keyPressed() {
  if (keyCode === 32) {
    background(255)
    x = width / 2
    y = height / 2
  }
}


function moveShape() {
  x += dx;
  y += dy;
}

function displayCircle() {
  if (x > width - r / 2 || x < 0 + r / 2) {
    dx *= -1;
  }

  else if (y > height - r / 2 || y < 0 + r / 2) {
    dy *= -1;
  }

  fill(0);
  circle(x, y, r);
}


function displayRectangle() {
  if (state === "rectangle") {

    fill(0)
    rect(x, y, r, r)

    if (x > width - r || x < 0) {
      dx *= -1;
    }

    else if (y > height - r || y < 0) {
      dy *= -1;
    }
  }
}