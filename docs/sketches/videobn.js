let fingers;

function setup() {
  createCanvas(660, 240);
  // specify multiple formats for different browsers
  fingers = createVideo(['/vc/docs/sketches/fingers.mov', '/vc/docs/sketches/fingers.webm']);

}

function draw() {
  background(150);
  image(fingers, 0, 0); // draw the video frame to canvas
  filter(GRAY);
  image(fingers, 340, 0); // draw a second copy to canvas
}
