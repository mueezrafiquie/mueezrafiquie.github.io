// Line Art Demo
// Mueez
// Sept 9, 2019


let gear;
// let w;
// let h;


let scalar = 1;


function preload() {
  gear = loadImage("assets/plane.png");
  // w = width
  // h = height
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);

  if (keyIsPressed) {
      if (keyCode === UP_ARROW) {
        scalar *= 1.02;
      }
      else if (keyCode === DOWN_ARROW) {
        scalar /= 1.02
      }

    }
  

  imageMode(CENTER);
  image(gear, mouseX, mouseY, gear.width * scalar, gear.height * scalar );
}




// function keyPressed() {
  
//   if (keyIsDown(38)) {
//     w += 10
//     h += 10
//   }
//   else if (keyIsDown(40)) {
//     w -= 10
//     h -= 10
//   }
// }