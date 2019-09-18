// Interactive Scene
// Mueez Rafiquie
// Sept 14, 2019


let plane;
let scalar = 1;
let x;
let y;
// Creating global variables for image

// let circleX;
// let circleY;
// let dx = 13;
// let dy = 13;
// let circleR;
// Creating global variables for projectile

function preload() {
  plane = loadImage("assets/plane.png");
  sky = loadImage("assets/skybackground.jpg");
}
//preloading image so there's no delay in presenting it

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2; 
  y = height / 1.75;
  imageMode(CENTER);  //centering image 

  // circleX = width/2;
  // circleY = height/2;
  // circleR = 100;
}
//creating canvas and defining variables in setup()


function draw() {
  image(sky, 0, 0, windowWidth, windowHeight)
  background(255)

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

  // moveShape()
  // displayCircle()


}
//all put inside the draw loop so the image keeps responding when input is continously given. 
//For example: keys being held down



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
  //changing x and y cords with WASD keys to move image
}




// function moveShape() {
//   circleX += dx;
//   circleY += dy;
// }

// function displayCircle() {
//   if (circleX > width - circleR/2 || circleX < 0 + circleR/2) {
//     dx *= -1;
//   }

//   else if (circleY > height - circleR/2 || circleY < 0 + circleR/2) {
//     dy *= -1;
//   }

//   fill(0);
//   circle(circleX, circleY, circleR);
// }
















// function keyPressed() {
//   if (keyCode === 32) {
//     background(255)
//     circleX = width/2
//     circleY = height/2
//   }
// }



