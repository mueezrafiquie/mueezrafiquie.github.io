// Millis Demo 
// Mueez

let isGrey = true
let lasttimecolorswitched = 0
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

  if (millis() > lasttimecolorswitched + waittime) {
    isGrey = !isGrey
    lasttimecolorswitched = millis()
  }
}