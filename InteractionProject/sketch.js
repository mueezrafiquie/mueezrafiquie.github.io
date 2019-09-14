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
  y = height / 1.25;
}
//creating canvas and defining variables in setup()

function mouseWheel() {
  if (event.delta > 0) {
    scalar *= 1.02;
  }
  else if (event.delta < 0) {
    scalar *= 0.98;
  }
}
//adding mouseWheel function which will use the same scalar variable to control the size of the image

function draw() {

  background(255);

  if (keyIsPressed) {
      if (keyCode === UP_ARROW) {
        scalar *= 1.02;
      }
      else if (keyCode === DOWN_ARROW) {
        scalar /= 1.02;
      }
      //using a multiplying factor to change size of image

      if (keyIsDown(87)) {
        background(255);
        y -= 10;
      }
      else if (keyIsDown(65)) {
        background(255);
        x -= 10;
      }
      else if (keyIsDown(83)) {
        background(255);
        y += 10;
      }
      else if (keyIsDown(68)) {
        background(255);
        x += 10;
      }
      //controlling the image with WASD keys 
    }
  image(plane, x, y, plane.width * scalar, plane.height * scalar );
  //drawing the image
}
//all put inside the draw loop so the image keeps responding when input is continously given. 
//For example: keys being held down