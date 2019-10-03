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
let scalar = 0.1;
let planeX;
let planeY;
//creating global variables for image

let basicShot;

let shotType = "basic shot"

// let shotX;
// let shotY;
let shotDy;
// let shotR;
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

  shotDy = 5;
  // shotDy = random(-10, 10);
  //setting projectile speech to a random value between -10 and 10

  planeX = width / 2;
  planeY = height / 1.1;
  basicShot = {
    x: planeX,
    y: planeY,
    r: 30
  };
  imageMode(CENTER);
  //setting starting point for plane and centering its cordinate origin

  canPlaneMove = true

  // shotX = planeX;
  // shotY = planeY - 210 * scalar;
  // shotR = 30;
  //defining projectile dimensions

  shootingSound.setVolume(0.2); //setting a volume for reset sound
}
//creating canvas and defining variables in setup()

function draw() {
  image(sky, 0, 0, width * 2, height * 2);  //drawing background

  moveInsideCanvas();


  image(plane, planeX, planeY, plane.width * scalar, plane.height * scalar); //drawing the plane image
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
      imageMode(CENTER)
      image(sky, 0, 0, width * 2, height * 2); //w
      planeY -= 10;
    } else if (keyIsDown(65)) {
      image(sky, 0, 0, width * 2, height * 2); //a
      planeX -= 10;
    } else if (keyIsDown(83)) {
      image(sky, 0, 0, width * 2, height * 2); //s
      planeY += 10;
    } else if (keyIsDown(68)) {
      image(sky, 0, 0, width * 2, height * 2); //d
      planeX += 10;
    }
  }
}
//changing x and y cords with WASD keys to move image

function keepInsideCanvas() {
  if (keyIsPressed && isInsideCanvas() === "over west") {
    planeX += 10;
  } else if (keyIsPressed && isInsideCanvas() === "over east") {
    planeX -= 10;
  } else if (keyIsPressed && isInsideCanvas() === "over north") {
    planeY += 10;
  } else if (keyIsPressed && isInsideCanvas() === "over south") {
    planeY -= 10;
  }
}
//changes the x or y cord to move the plane back toward the inside of canvas when it hits the edge to keep it in 

function isInsideCanvas() {
  if (planeX + 150 * scalar > width) {
    return "over east";
  } else if (planeX - 130 * scalar < 0) {
    return "over west";
  } else if (planeY + 210 * scalar > height) {
    return "over south";
  } else if (planeY - 210 * scalar < 325) {
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
  rect(planeX - 20 * scalar, planeY - 114 * scalar, 40 * scalar, 227 * scalar);
  rect(planeX - 148 * scalar, planeY - 50 * scalar, 295 * scalar, 40 * scalar);
  rect(planeX - 48 * scalar, planeY + 76 * scalar, 98 * scalar, 25 * scalar);
}


function shootProjectile(someProjectilesYcord) {

}



function keyPressed() {
  if (keyCode === 32) {
    circle(planeX, basicShot.y, basicShot.r);

    if (shotType = "basic shot") {
      // for (let i = basicShot.y; i < height; i += 5) {
      //   basicShot.y -= shotDy;
      //   fill(0);
      //   circle(planeX, basicShot.y, basicShot.r);
      // }
    }
  }
}





// shootingSound.play();
//plays a sound when reseting
//reseting the game



//   //moves projectile

//   if (circleX > width - circleR / 2 || circleX < 0 + circleR / 2) {
//     shotDx *= -1;
//   } else if (circleY > height - circleR / 2 || circleY < 0 + circleR / 2) {
//     shotDy *= -1;
//   }
//   // keeps projectile inside the canvas


//creating three seperate hit boxes around the plane image that adjust with size

// function moveUntilHit() {
//   if (isHit() === true) {
//     canPlaneMove = false;
//     canProjectileMove = false;
//     shotDx = 0;

//   } else if (isHit() === false) {
//     moveRandomly();
//   }
// }
//makes it so when the projectile hits the plane both it and plane stop moving until reset by the space bar

// function isHit() {
//   if (
//     basicShotX > planeX - 19 * scalar &&
//     basicShotX < planeX + 21 * scalar &&      //rectangle one
//     circleY > planeY - 113 * scalar &&
//     circleY < planeY + 114 * scalar
//   ) {
//     return true;
//   } else if (
//     basicShotX > planeX - 147 * scalar &&
//     basicShotX < planeX + 148 * scalar &&     //rectangle two
//     circleY > planeY - 49 * scalar &&
//     circleY < planeY - 11 * scalar
//   ) {
//     return true;
//   } else if (
//     basicShotX > planeX - 47 * scalar &&
//     basicShotX < planeX + 51 * scalar &&      //rectangle three
//     circleY > planeY + 75 * scalar &&
//     circleY < planeY + 102 * scalar
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }
//function that returns whether or not the projectile is touching one of the three hit boxes

// function moveRandomly() {
//   if (shotDx < 10 && shotDy < 10) {
//     shotDx = random(shotDx - 5, shotDx + 5);
//     shotDy = random(shotDy - 5, shotDy + 5);
//   } else {
//     shotDx = shotDx;
//     shotDy = shotDy;
//   }
// }
//changes the projectiles direction and speed randomly 