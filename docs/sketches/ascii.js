var cnv,img;
var resdiv;
var options = [' ','`','.',',-',"':",';_~','"','*|','!l',
'+=','>','<L','\\i','/^','1?','Jv','r','()cx','7}','sz',
'3u','2Ckty{','jn','4FVY','5P[]af','qw','Sde','Eo',
'NOZ','9HXgh','GTU','$AIm','QW','KM','%8','#06@','bp',
'D','&','R','B'];
var gui,btn,livebtn;
var live = false;
var capture;
var pg;

function setup() {
  //paragraph for display of ascii result
  resdiv = createP('');
  
  //video capture elements
  pg = createGraphics(800,600);
  capture = createCapture(VIDEO);
  capture.size(60, 40);
  capture.hide();
  
  //gui elements
  
  cnv = createCanvas(400,300);
  background(255);

  img = loadImage("/vc/docs/sketches/Ryuk.jpg", function(pic){
    calcImg(pic);
  });
}

function draw() {
  image(capture, 0, 0, width, height);
  if (live) calcCapture();
}

function calcImg(pic) {
  var res = '<pre>';
  for (var i=0; i<60; i++) {
    var line = '';
    for (var j=0; j<140; j++) {
      var x = pic.get(2+round(j*5.714),5+i*10);
      var v = round((1-x[0]/255.0)*40);
      var index = floor(random(options[v].length));
      var chr = options[v][index];
      if (chr==' ') chr='&nbsp;';
      if (chr=='<') chr='&lt;';
      if (chr=='>') chr='&gt;';
      if (chr=='"') chr='&quot;';
      line += chr;
    }
    res += line+'<br>';
  }
  res += '</pre>'
  resdiv.html(res);
}
