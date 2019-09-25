// Interactive Scene
// Mueez Rafiquie
// Sept 14, 2019

let canMove = true;

let plane;
let scalar = 1;
let x;
let y;
// Creating global variables for image

let circleX;
let circleY;
let dx;
let dy;
let circleR;
// Creating global variables for projectile

// let lastTimeSpeedIncreased = 0;
// let waitTime = 500;

// Time variables


function preload() {
  plane = loadImage("assets/plane.png");
  sky = loadImage("assets/skybackground.jpg");
   
  soundFormats('mp3');
  shootingSound = loadSound('assets/shootingsound.mp3');
}
//preloading image so there's no delay in presenting it


function setup() {
  createCanvas(windowWidth, windowHeight);
  dx = random(-15, 15)
  dy = random(-15, 15)

  x = width / 2; 
  y = height / 1.75;
  imageMode(CENTER);   

  circleX = width - 10;
  circleY = height - 5;
  circleR = 50;

  shootingSound.setVolume(0.2);
}
//creating canvas and defining variables in setup()


function draw() {
  image(sky, 0, 0, width*2, height*2);
  
  if (keyIsPressed && isInsideCanvas() === true) {
    move();
    //controlling the image with WASD keys 
  }
  else {
    keepInsideCanvas();
    //keeping image inside cavas if at the edge
  }

  isHit() //calling isHit() function 

  if (isHit() === true) { 
    canMove = false
    dx = 0 
    dy = 0
  }

  if (isHit() === false) {
    moveRandomly()
  }
  //telling projectile to vary speed and direction while not in contact with the hit-box



  //stopping projectile once it comes in contact with the planes hit-box


  image(plane, x, y, plane.width * scalar, plane.height * scalar );
  //drawing the image

  noFill()
  noStroke()
  rect(x - 20 * scalar, y - 114 * scalar, 40 * scalar, 227 * scalar)
  rect(x - 148 * scalar, y - 50 * scalar, 295 * scalar, 40 * scalar)
  rect(x - 48 * scalar, y + 76 * scalar, 98 * scalar, 25 * scalar)
  //drawing hit-box
  
  moveShape();
  displayCircle();
 
  //moving projectile
}
//all put inside the draw loop so the image keeps responding when input is continously given. 
//For example: keys being held down




function isHit() {
  if (circleX > x -19 * scalar && circleX < x + 21 * scalar && circleY > y - 113 * scalar && circleY < y + 114 * scalar) {
    return true
  }
  else if (circleX > x - 147 * scalar && circleX < x + 148 * scalar && circleY > y - 49 * scalar && circleY < y - 11 * scalar) {
    return true
  }
  else if (circleX > x - 47 * scalar && circleX < x + 51 * scalar && circleY > y + 75 * scalar && circleY < y + 102 * scalar) {
    return true
  }
  else {
    return false
  }
}
//function that returns whether or not the projectile is touching one of the three hit boxes

function moveRandomly() {
  if (dx < 10 && dy < 10) {
    dx = random(dx - 5, dx + 5)
    dy = random(dy - 5, dy +5)
  }
  else {
    dx = dx
    dy = dy
  }
}

function windowResized() {
  setup();
}
//allows canvas size to change if you want to use the function 


function mouseWheel() {
  if (event.delta > 0) {
    scalar *= 1.02;
  }
  else if (event.delta < 0) {
    scalar /= 1.02;
  }
}
//adding mouseWheel function which will use the same scalar variable to control the size of the image


function keepInsideCanvas() {
  if (keyIsPressed && isInsideCanvas() === "over west"){
    x += 10;
  }
  else if (keyIsPressed && isInsideCanvas() === "over north") {
    y += 10;
  }
  else if (keyIsPressed && isInsideCanvas() === "over east") {
    x -= 10;
  }
  else if (keyIsPressed && isInsideCanvas() === "over south") {
    y -= 10;
  }
  // changes the x or y cord to keep image inside of the canvas
}


function isInsideCanvas() {
  if (x + (160 * scalar) > width) {
    return "over east";
  }
  else if (x - (160 * scalar) < 0) {
    return "over west"
  }
  else if (y + (120 * scalar) > height) {
    return "over south";
  }
  else if (y - (130 * scalar) < 0) {
    return "over north";
  }
  else {
    return true;
  }
  //checks if is image is inside canvas and if not returns which direction it is over 
  //multiplying by scalar allows for the function to work as the size of the image changes
}


function move() {
  if (canMove === true) {
    if (keyCode === UP_ARROW) {
      scalar *= 1.02;
    }
    else if (keyCode === DOWN_ARROW) {
      scalar /= 1.02;
    }
    //using a multiplying factor to change size of image

    if (keyIsDown(87)) {       //w
      image(sky, 0, 0, width*2, height*2);
      y -= 10;
    }
    else if (keyIsDown(65)) {  //a
      image(sky, 0, 0, width*2, height*2);
      x -= 10;
    }
    else if (keyIsDown(83)) {  //s
      image(sky, 0, 0, width*2, height*2);
      y += 10;
    }
    else if (keyIsDown(68)) {  //d
      image(sky, 0, 0, width*2, height*2);
      x += 10;
    }
  }
    //changing x and y cords with WASD keys to move image
}


function moveShape() {
  circleX += dx;
  circleY += dy;
}
//moves projectile 


function displayCircle() {
  if (circleX > width - circleR/2 || circleX < 0 + circleR/2) {
    dx *= -1;
  }

  else if (circleY > height - circleR/2 || circleY < 0 + circleR/2) {
    dy *= -1;
  }
  //keeps projectile inside the canvas

  fill(0);
  circle(circleX, circleY, circleR);
}
//drawing projectile


function keyPressed() {
  if (keyCode === 32) {
    canMove = true

    dx = random(-15, 15)
    dy = random(-15, 15)

    circleX = width - 40
    circleY = height - 50

    shootingSound.play();
  }
}
//reseting projectile position and speed


