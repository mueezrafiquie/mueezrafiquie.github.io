// Interactive Scene
// Mueez
// Sept 9, 2019



let plane;
let scalar = 1;
let x;
let y;

function preload() {
  plane = loadImage("assets/plane.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2; 
  y = height / 1.25;
}

function draw() {

  background(255);

  if (keyIsPressed) {
      if (keyCode === UP_ARROW) {
        scalar *= 1.02;
      }
      else if (keyCode === DOWN_ARROW) {
        scalar /= 1.02;
      }
      if (keyIsDown(87)) {
        background(255)
        y -= 10
      }
      else if (keyIsDown(65)) {
        background(255)
        x -= 10
      }
      else if (keyIsDown(83)) {
        background(255)
        y += 10
      }
      else if (keyIsDown(68)) {
        background(255)
        x += 10
      }
    }

  imageMode(CENTER);

  image(plane, x, y, plane.width * scalar, plane.height * scalar );
}

function mouseWheel() {


}






// let n = 100
//
// function mousePressed() {
//  if (keyIsPressed) {
//    if (key === "r") {
//      rect(mouseX, mouseY, n, n)
//    }
//    else if (key === "e") {
//      ellipse(mouseX,mouseY,n,n);
//    }
//  }
// }

// function keyPressed() {
//  if (key === "b") {
//    background(0);
//    stroke(255);
//    fill(255);
//  }
//   else if (key === "w") {
//     background(255);
//     stroke(0);
//     fill(0);
//   }
//   else if (keyCode === UP_ARROW) {
//     n += 5;
   
//   }
//   else if (keyCode === DOWN_ARROW) {
//     n -= 5;
//   }
// }