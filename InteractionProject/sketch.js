// Interactive Scene
// Mueez Rafiquie
// Sept 14, 2019


let plane;
let scalar = 1;
let x;
let y;
// Creating global variables

function preload() {
  plane = loadImage("assets/plane.png");
}
//preloading image so there's no delay in presenting it

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2; 
  y = height / 1.75;
  imageMode(CENTER);  //centering image 
}
//creating canvas and defining variables in setup()


function draw() {
  background(255);

  if (keyIsPressed && isInsideCanvas() === true) {
    move();
    //controlling the image with WASD keys 
  }
  else {
    keepInsideCanvas();
    //keeping image inside cavas if at the edge
  }

  image(plane, x, y, plane.width * scalar, plane.height * scalar );
  //drawing the image
}
//all put inside the draw loop so the image keeps responding when input is continously given. 
//For example: keys being held down


function mouseWheel() {
  if (event.delta > 0) {
    scalar *= 1.02;
  }
  else if (event.delta < 0) {
    scalar *= 0.98;
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
  if (x + 150 > width) {
    return "over east";
  }
  else if (x - 150 < 0) {
    return "over west"
  }
  else if (y + 110 > height) {
    return "over south";
  }
  else if (y - 120 < 0) {
    return "over north";
  }
  else {
    return true;
  }
  //checks if is image is inside canvas and if not returns which direction it is over 
}

function move() {
  if (keyCode === UP_ARROW) {
    scalar *= 1.02;
  }
  else if (keyCode === DOWN_ARROW) {
    scalar /= 1.02;
  }
  //using a multiplying factor to change size of image

  if (keyIsDown(87)) {       //w
    background(255);
    y -= 10;
  }
  else if (keyIsDown(65)) {  //a
    background(255);
    x -= 10;
  }
  else if (keyIsDown(83)) {  //s
    background(255);
    y += 10;
  }
  else if (keyIsDown(68)) {  //d
    background(255);
    x += 10;
  }
  //chaning x and y cords with WASD keys to move image
}