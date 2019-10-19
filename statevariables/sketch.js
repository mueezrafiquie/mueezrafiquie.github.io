// Interactive Scene
// Mueez Rafiquie
// Sept 14, 2019
//
//The objective of this game is the avoid the projetile by moving the plane around with the WASD keys. If you get hit, simply press the space bar and the game 
//will reset. You can additionally use the up and down arrows as well as a mousewheel or trackpad to change the size of the image.
//
//Extra for Experts Additions: In this project I added a sound component which is heard when you press the space bar to reset, used the windowResized() function 
//to allow the game to stay playable with a change in window size, used the mouseWheel() function to change the size of the plane with the mousewheel.




let timeBetweenWaves;
let lastTimeWaveWasSent;

let plane;
let planeX;
let planeY;
let canPlaneMove = true;
// let scalar = 0.1;
let scalar = 0.2;

let shotType = "basic shot"
let gameMode = "start"

let basicShot = [];
let doubleShot = [];
let aliens = [];










function preload() {

  plane = loadImage("assets/plane.png");
  sky = loadImage("assets/skybackground.jpg");
  alienImage = loadImage("assets/alien.png");
  //loading images

  soundFormats("mp3");
  shootingSound = loadSound("assets/shootingsound.mp3");
  //loading sounds
}


//creating canvas and defining variables in setup()
function setup() {
  createCanvas(windowWidth, windowHeight); //creating canvas

  createNewAliens();

  timeBetweenWaves = 5000;
  lastTimeWaveWasSent = 0;


  planeX = width / 2;
  planeY = height / 1.1;

  imageMode(CENTER);

  canPlaneMove = true;

  shootingSound.setVolume(0.2); //setting a volume for reset sound
}



function draw() {
  image(sky, 0, 0, width * 2, height * 2);  //drawing background
  moveInsideCanvas();
  shoot();
  sendAlienWaves()
  moveAliens();
  drawHitBox();
  detectIfHitAndDestroyAlien();
  image(plane, planeX, planeY, plane.width * scalar, plane.height * scalar); //drawing the plane image
}


//all put inside the draw loop so the image keeps responding when input is continously given

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
  } else if (planeY - 210 * scalar < height * 0.65) {
    // 325
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











function keyPressed() {
  if (keyCode === 32) {
    let basicShotValues = {
      x: planeX,
      y: planeY - 210 * scalar,
      r: 5,
      dy: -5
    };
    basicShot.push(basicShotValues)

    let doubleShotValues = {
      x: planeX,
      y: planeY - 210 * scalar,
      r: 5,
      dy: -5
    };
    doubleShot.push(doubleShotValues)
  }
}

function shootBasicShot() {
  for (let i = 0; i < basicShot.length; i++) {
    basicShot[i].y += basicShot[i].dy;
    noStroke()
    fill(0)
    ellipse(basicShot[i].x, basicShot[i].y, basicShot[i].r * 2, basicShot[i].r * 2)
    if (basicShot[i].y < 0) {
      basicShot.shift()
    }
  }
}

function shootDoubleShot() {
  for (let i = 0; i < doubleShot.length; i++) {
    doubleShot[i].y += doubleShot[i].dy;
    noStroke()
    fill(0)
    ellipse(doubleShot[i].x - 5, doubleShot[i].y, doubleShot[i].r * 2, doubleShot[i].r * 2)
    ellipse(doubleShot[i].x + 5, doubleShot[i].y, doubleShot[i].r * 2, doubleShot[i].r * 2)
    if (doubleShot[i].y < 100) {
      doubleShot.shift()
    }
  }
}

function shoot() {
  if (shotType === "basic shot") {
    shootBasicShot();
  }
  else if (shotType === "double shot") {
    shootDoubleShot();

  }
}

















function detectIfHitAndDestroyAlien() {
  if (shotType === "basic shot") {
    for (let i = 0; i < basicShot.length; i++) {
      for (let j = 0; j < aliens.length; j++) {
        if (basicShot[i].x > aliens[j].x - 28 &&
          basicShot[i].x < aliens[j].x + 25 &&
          basicShot[i].y > aliens[j].y - 25 &&
          basicShot[i].y < aliens[j].y + 25) {

          // basicShot.splice(i, 1);
          aliens.splice(j, 1);
        }

      }
    }
  }
  // else if (shotType === "double shot") {
  //   for (let i = 0; i < basicShot.length; i++) {
  //     for (let j = 0; j < aliens.length; j++) {
  //       if (basicShot[i].x > aliens[j].x - 28 &&
  //         basicShot[i].x < aliens[j].x + 25 &&
  //         basicShot[i].y > aliens[j].y - 25 &&
  //         basicShot[i].y < aliens[j].y + 25) {
  //         console.log("yup")
  //       }
  //       else {
  //         console.log("nope")
  //       }
  //     }
  //   }
  // }
}

class Alien {
  constructor(x, y, dy) {
    this.x = x;
    this.y = y;
  }

  moveIndividualAliens() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(0, 1);
    imageMode(CENTER)
    image(alienImage, this.x, this.y, 50, 50)
  }

  individualHitBox() {
    noStroke()
    noFill()
    rect(this.x - 28, this.y - 25, 53, 50)
  }
}

function createNewAliens() {
  aliens.push(new Alien(width * random(0.05, 0.12), 150),
    new Alien(width * random(0.20, 0.30), 150),
    new Alien(width * random(0.35, 0.45), 150),
    new Alien(width * random(0.50, 0.60), 150),
    new Alien(width * random(0.70, 0.90), 150));
}

function moveAliens() {
  for (let i = 0; i < aliens.length; i++) {
    aliens[i].moveIndividualAliens();
    if (aliens[i].y > height) {
      aliens.shift();
    }
  }
}

function sendAlienWaves() {
  if (millis() >= lastTimeWaveWasSent + timeBetweenWaves) {
    createNewAliens()
    moveAliens()
    lastTimeWaveWasSent = millis();
  }
}


function drawHitBox() {
  for (let i = 0; i < aliens.length; i++) {
    aliens[i].individualHitBox();
  }
}