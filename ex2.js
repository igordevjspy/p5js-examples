function randomIntFromInterval(min,max){
  return Math.floor(Math.random()*(max-min+1)+min);
}

var xspacing = 8; 
var w;
var maxwaves = randomIntFromInterval(8,12);
var theta = 0.0;
var amplitude = new Array(maxwaves);
var ampli0 = randomIntFromInterval(5,15)
var ampli1 = randomIntFromInterval(40,80)
var period0 = 100
var period1 = 900
var theta0 = 0.1
var ellipse0 = randomIntFromInterval(6,12)
var dx = new Array(maxwaves);
var yvalues;

function preload(){
  img = loadImage("https://res.cloudinary.com/dxsjynyks/image/upload/v1545572327/datalabs/example5.png");
}

function setup(){
  createCanvas(710, 400);
  frameRate(30);
  colorMode(RGB, 255, 255, 255, 100);
  w = width + 16;
  for (var i = 0; i < maxwaves; i++){
    amplitude[i] = random(ampli0,ampli1);
    var period = random(period0,period1);
    dx[i] = (TWO_PI / period) * xspacing;
  }
  yvalues = new Array(floor(w/xspacing));
  imageMode(CENTER);
  img.loadPixels();
}

function draw(){
  background(0);
  calcWave();
  renderWave();
}

function calcWave(){
  theta += theta0
  for (var i = 0; i < yvalues.length; i++){
    yvalues[i] = 0;
  }
  
  for (var j = 0; j < maxwaves; j++){
    var x = theta;
    for (var i = 0; i < yvalues.length; i++){
      if (j % 2 == 0)  yvalues[i] += sin(x)*amplitude[j];
      else yvalues[i] += cos(x)*amplitude[j];
      x+=dx[j];
    }
  }
}

function renderWave(){
  fill(255,50);
  ellipseMode(CENTER);
  for (var x = 0; x < yvalues.length; x++){
    var pix = img.get(x*xspacing, width/2+yvalues[x]);
    fill(pix, 50);
    for (var i = 0; i < 1; i ++){
      ellipse(x*xspacing,width/2+yvalues[x],ellipse0,ellipse0);
    }
  }
}
