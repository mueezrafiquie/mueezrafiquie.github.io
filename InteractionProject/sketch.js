// Interactive Scene
// Mueez Rafiquie
// Sept 14, 2019
//
//The objective of this game is the avoid the projetile by moving the plane around with the WASD keys. If you get hit, simply press the space bar and the game 
//will reset. You can additionally use the up and down arrows as well as a mousewheel or trackpad to change the size of the image.
//
//Extra for Experts Additions: In this project I added a sound component which is heard when you press the space bar to reset, used the windowResized() function 
//to allow the game to stay playable with a change in window size, used the mouseWheel() function to change the size of the plane with the mousewheel.




let canPlaneMove = true;
let canProjectileMove = true;
//creating global variables to allow for the starting and stopping of the plane and projectile

let plane;
let scalar = 1;
let x;
let y;
//creating global variables for image

let circleX;
let circleY;
let dx;
let dy;
let circleR;
//creating global variables for projectile


function preload() {
  plane = loadImage("assets/plane.png");
  sky = loadImage("assets/skybackground.jpg");
  //loading images

  soundFormats("mp3");
  shootingSound = loadSound("assets/shootingsound.mp3");
  //loading sounds
}

function setup() {
  createCanvas(windowWidth, windowHeight); //creating canvas

  dx = random(-10, 10);
  dy = random(-10, 10);
  //setting projectile speech to a random value between -10 and 10

  x = width / 2;
  y = height / 1.75;
  imageMode(CENTER);
  //setting starting point for plane and centering its cordinate origin

  canPlaneMove = true

  circleX = width - 10;
  circleY = height - 5;
  circleR = 60;
  //defining projectile dimensions

  shootingSound.setVolume(0.2); //setting a volume for reset sound
}
//creating canvas and defining variables in setup()

function draw() {
  image(sky, 0, 0, width * 2, height * 2);  //drawing background
  

  isHit(); //calling isHit() function so game can detect if the projectile is touching the plane

  moveInsideCanvas(); //allowing plane to move inside of canvas

  moveUntilHit(); //allowing plane to move until it comes in contact with the projectile in which case it freezes both

  drawHitBox(); //drawing hit-box

  moveProjectile(); //moving projectile

  image(plane, x, y, plane.width * scalar, plane.height * scalar); //drawing the plane image
}
//all put inside the draw loop so the image keeps responding when input is continously given.


function windowResized() {
  setup();
}
//allows canvas size to change while keeping the game playable

function mouseWheel() {
  if (canPlaneMove === true) {
    if (event.delta > 0) {
      scalar *= 1.8;
    } else if (event.delta < 0) {
      scalar /= 1.8;
    }
  }
}
//adding mouseWheel function which will use the same scalar variable to control the size of the image

function movePlane() {
  if (canPlaneMove === true) {
    if (keyCode === UP_ARROW) {
      scalar *= 1.02;
    } else if (keyCode === DOWN_ARROW) {
      scalar /= 1.02;
    }
    //using a multiplying factor to change size of image

    if (keyIsDown(87)) {
      image(sky, 0, 0, width * 2, height * 2); //w
      y -= 10;
    } else if (keyIsDown(65)) {
      image(sky, 0, 0, width * 2, height * 2); //a
      x -= 10;
    } else if (keyIsDown(83)) {
      image(sky, 0, 0, width * 2, height * 2); //s
      y += 10;
    } else if (keyIsDown(68)) {
      image(sky, 0, 0, width * 2, height * 2); //d
      x += 10;
    }
  }
}
 //changing x and y cords with WASD keys to move image

function keepInsideCanvas() {
  if (keyIsPressed && isInsideCanvas() === "over west") {
    x += 10;
  } else if (keyIsPressed && isInsideCanvas() === "over east") {
    x -= 10;
  } else if (keyIsPressed && isInsideCanvas() === "over north") {
    y += 10;
  } else if (keyIsPressed && isInsideCanvas() === "over south") {
    y -= 10;
  }
}
 //changes the x or y cord to move the plane back toward the inside of canvas when it hits the edge to keep it in 

function isInsideCanvas() {
  if (x + 160 * scalar > width) {
    return "over east";
  } else if (x - 160 * scalar < 0) {
    return "over west";
  } else if (y + 120 * scalar > height) {
    return "over south";
  } else if (y - 130 * scalar < 0) {
    return "over north";
  } else {
    return true;
  }
}
//checks if is image is inside canvas and if not returns which direction it is over

function moveInsideCanvas() {
  if (keyIsPressed && isInsideCanvas() === true) {
    movePlane();
    //controlling the image with WASD keys
  } else {
    keepInsideCanvas();
    //keeping image inside cavas if at the edge
  }
}

function drawHitBox() {
  noFill();
  noStroke();
  rect(x - 20 * scalar, y - 114 * scalar, 40 * scalar, 227 * scalar);
  rect(x - 148 * scalar, y - 50 * scalar, 295 * scalar, 40 * scalar);
  rect(x - 48 * scalar, y + 76 * scalar, 98 * scalar, 25 * scalar);
}
//creating three seperate hit boxes around the plane image that adjust with size

function moveUntilHit() {
  if (isHit() === true) {
    canPlaneMove = false;
    canProjectileMove = false;
    dx = 0;
    dy = 0;
  } else if (isHit() === false) {
    moveRandomly();
  }
}
//makes it so when the projectile hits the plane both it and plane stop moving until reset by the space bar

function isHit() {
  if (
    circleX > x - 19 * scalar &&
    circleX < x + 21 * scalar &&      //rectangle one
    circleY > y - 113 * scalar &&
    circleY < y + 114 * scalar
  ) {
    return true;
  } else if (
    circleX > x - 147 * scalar &&
    circleX < x + 148 * scalar &&     //rectangle two
    circleY > y - 49 * scalar &&
    circleY < y - 11 * scalar
  ) {
    return true;
  } else if (
    circleX > x - 47 * scalar &&
    circleX < x + 51 * scalar &&      //rectangle three
    circleY > y + 75 * scalar &&
    circleY < y + 102 * scalar
  ) {
    return true;
  } else {
    return false;
  }
}
//function that returns whether or not the projectile is touching one of the three hit boxes

function moveRandomly() {
  if (dx < 10 && dy < 10) {
    dx = random(dx - 5, dx + 5);
    dy = random(dy - 5, dy + 5);
  } else {
    dx = dx;
    dy = dy;
  }
}
//changes the projectiles direction and speed randomly 

function moveProjectile() {
  circleX += dx;
  circleY += dy;
  //moves projectile

  if (circleX > width - circleR / 2 || circleX < 0 + circleR / 2) {
    dx *= -1;
  } else if (circleY > height - circleR / 2 || circleY < 0 + circleR / 2) {
    dy *= -1;
  }
  //keeps projectile inside the canvas

  fill(0);
  circle(circleX, circleY, circleR);
  //drawing projectile
}
//allows projectile to move across the screen without going off

function keyPressed() {
  if (keyCode === 32) {
    canPlaneMove = true; //allows plane to move again 

    let xValues = [width - 40, 40];
    let yValues = [height - 50, 50];
    //creating local variables to reset the projectile to one of the four corners of the screen 

    moveRandomly()
    //reseting projectile movement 

    circleX = random(xValues);
    circleY = random(yValues);
    //moves projectile to one of the four corners 

    shootingSound.play();
    //plays a sound when reseting 
  }
}
//reseting the game
