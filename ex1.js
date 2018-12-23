var img;
var smallPoint, largePoint;

function randomIntFromInterval(min,max){
  return Math.floor(Math.random()*(max-min+1)+min);
}

function preload() {
  img = loadImage("https://res.cloudinary.com/dxsjynyks/image/upload/v1545572327/datalabs/example5.png");
}

function setup() {
  createCanvas(720, 400);
  smallPoint = 3;
  largePoint = 5;
  imageMode(CENTER);
  noStroke();
  background(0);
  img.loadPixels();
}

function draw() {
  var pointillize = map(mouseX, 0, width, smallPoint, largePoint);
  var x = floor(random(img.width));
  var y = floor(random(img.height));
  var pix = img.get(x, y);
  var rand3 = randomIntFromInterval(50,250)
  fill(pix, rand3);
  var rand = randomIntFromInterval(pointillize - 3,pointillize+20)
  var rand0 = randomIntFromInterval(4,10)
  for (var i = 0; i < rand0; i ++) {
    ellipse(x, y, pointillize, pointillize + rand);
    rotate(PI/rand0);
  }
}

