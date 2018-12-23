var img;
var smallPoint, largePoint;
   
function randomIntFromInterval(min,max){
  return Math.floor(Math.random()*(max-min+1)+min);
}

function setup(){
  var cnv = createCanvas(700, 700,WEBGL);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  smallPoint = 10;
  largePoint = 40;
}

function draw(){
  background(0);
  rotateY(frameCount * 0.001);
  for(var j = 0; j < 5; j++){
    push();
    for(var i = 0; i < 80; i++){
      translate(sin(frameCount * 0.0005 + j) * 100, sin(frameCount * 0.01 + j) * 20, i * 0.05);
      rotateZ(frameCount * 0.002);
      push();
      var rand0 = randomIntFromInterval(100,150)
      fill(rand0,0,0,240);
      sphere(8, 6, 4); 
      pop();
    }
    pop();
  }
}
