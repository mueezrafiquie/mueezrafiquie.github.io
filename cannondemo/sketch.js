// Millis Demo 
// Mueez

let cannonX;
let cannonY;
let cannonW;
let cannonL;
let cannonAngle;

let bullets = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  cannonX = 75;
  cannonY = height - 150;
  cannonW = 50;
  cannonL = 125;
  cannonAngle = 0;
}

function draw() {
  background(220);

  displayCannon();
  updateBullets();
}


function displayCannon() {
  push();
  translate(cannonX, cannonY);
  cannonAngle = atan2(mouseY - cannonY, mouseX - cannonX);
  rotate(cannonAngle);
  rect(0, -cannonW/2, cannonL, cannonW);
  circle(0, 0, cannonW)
  pop();
}


function mouseClicked() {
  fire();
}

function fire() {
  let thisBullet = {
    x: cannonX,
    y: cannonY,
    r: cannonW,
    angle: cannonAngle,
    speed: 1
  };
  bullets.push(thisBullet);
}

function updateBullets() {
  for(let thisBullet of bullets) {
    thisBullet.x += thisBullet.speed * cos(thisBullet.angle);
    thisBullet.y += thisBullet.speed * sin(thisBullet.angle);
    circle(thisBullet.x, thisBullet.y, thisBullet.r);
  }
}