let img;
function preload() {
	img = loadImage('../sketches/Wolv.jpg')
} 

function draw(){
	image(img, 0, 0, img.width, img.height);
	
	loadPixels();
	for (var y = 0; y < height; y++) {
		for (var x = 0; x < width; x++) {
		  var index = (x + y * width)*4;
		  var r = pixels[index+0];
		  var g = pixels[index+1];
		  var b = pixels[index+2];
		  var a = pixels[index+3];     
		  
		  var bw = (r + g + b)/3;
		  
		  pixels[index+0] = bw;
		  pixels[index+1] = bw;
		  pixels[index+2] = bw;
	}
  }
  updatePixels();
}


function setup() {
	createCanvas(604, 339);
	img.loadPixels();
  
	// pixelDensity(1) for not scaling pixel density to display density
	// for more information, check the reference of pixelDensity()
	pixelDensity(1);
  }
