// Random Circles Demo
// Mueez

let fish;
let newImage

function preload() {
  fish = loadImage("assets/fish.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  newImage = greyScale(fish)
}

function draw() {
  background(225);

  // imageMode(CENTER)
  image(newImage, 0, 0)

}


function greyScale(sourceImage) {
  let img = createImage(sourceImage.width, sourceImage.height);

  img.loadPixels();
  sourceImage.loadPixels();

  for (let x = 0; x < sourceImage.width; x++) {
    for (let y = 0; y < sourceImage.height; y++) {
      let p = sourceImage.get(x, y);

      let r = red(p);
      let g = green(p);
      let b = blue(p);

      let newPixel = color((r+g+b)/3, (r+g+b)/3, (r+g+b)/3);

      if (dist(mouseX, mouseY, x, y)) {
        img.set(x, y, newPixel);
      }
      else {
        img.set(x, y, )
      }

      // img.set(x, y, color(255, 0, 0))
    }
  }
  
  img.updatePixels();
  return img;
}