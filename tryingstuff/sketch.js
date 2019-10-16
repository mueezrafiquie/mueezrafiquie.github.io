let aliens = []


function preload() {
  
  alienImage = loadImage("assets/alien.png");

}

function setup() {
  createCanvas(windowWidth, windowHeight);

  aliens.push(new Alien(width * random(0.05, 0.12), 150), new Alien(width * random(0.20, 0.30), 150), new Alien(width * random(0.35, 0.45), 150), new Alien(width * random(0.50, 0.60), 150), new Alien(width * random(0.70, 0.90), 150));
}

function draw() {
  background(0);
  moveAliens();
  drawHitBox();
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
    fill(255)
    circle(this.x, this.y, 55)
  }
}




function moveAliens() {
  for (let i = 0; i < aliens.length; i++) {
    aliens[i].moveIndividualAliens();
    if (aliens[i].y > 400) {
      aliens.shift();
    }
  }
}



function drawHitBox() {
  for (let i = 0; i < aliens.length; i++) {
    aliens[i].individualHitBox();
  }
}