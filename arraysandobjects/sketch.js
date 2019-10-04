// Arrays and Objects Demo
// Mueez




let shapes = [];


function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(0);
  shoot()
}

function mousePressed() {
  let someShape = {
    x: mouseX,
    y: mouseY,
    r: random(10, 50),
    color: color(random(255), random(255), random(255), random(255)),
    dy: random(1, 20)
  };
  shapes.push(someShape);
}




    // if (shotType = "basic shot") {
    // for (let i = basicShot.y; i < height; i += 5) {
    //   basicShot.y -= shotDy;
    //   fill(0);
    //   circle(planeX, basicShot.y, basicShot.r);
    // }
    // }