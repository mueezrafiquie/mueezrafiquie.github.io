let alien1;
let alien2;
let alien3;

let aliens = []

function preload() {
  alienImage = loadImage("assets/alien.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);


  alien1 = new Alien(150, 150);
  alien2 = new Alien(400, 150);
  alien3 = new Alien(600, 150);
}


function draw() {
  background(0);

  alien1.move();
  alien2.move();
  alien3.move();
}

class Alien {

  constructor(x, y, dy) {
    this.x = x;
    this.y = y;
    this.dy = dy;
  }

  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(0, 5);
    image(alienImage, this.x, this.y, 50, 50)
    
    for (let i = 0; i < 5; i++) {
      

    }
  }
}



