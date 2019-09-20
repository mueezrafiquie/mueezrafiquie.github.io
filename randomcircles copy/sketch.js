// Millis Demo 
// Mueez

let isGrey = true
let lastwaittime = 0
let waittime = 2000

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if (isGrey) {
    background(220)
  }
  else {
    background(0)
  }

    if (millis() > lastwaittime + waittime) {
      isGrey = !isGrey
      lastwaittime = millis()
    }
}