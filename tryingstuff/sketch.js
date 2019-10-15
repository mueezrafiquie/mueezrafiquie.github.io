let aliens = []

function preload() {
  alienImage = loadImage("assets/alien.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  aliens.push(new Alien(width * 0.15, 150), new Alien(400, 150), new Alien(600, 150)); 
}

function draw() {
  background(0);
  moveAliens();
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
  }
}


function moveAliens() {
  for (let i = 0; i < aliens.length; i++) {
    aliens[i].move();
    if (aliens[i].y > 400) {
      aliens.shift();
    }
  }
}
