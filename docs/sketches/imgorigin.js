let img;
function preload() {
	img = loadImage('../sketches/Wolv.jpg')
} 


function draw(){
    image(img, 0, 0, img.width, img.height);

    updatePixels();
}


function setup() {
	createCanvas(604, 339);
	img.loadPixels();
  
	// pixelDensity(1) for not scaling pixel density to display density
	// for more information, check the reference of pixelDensity()
	pixelDensity(1);
  }
