let r,g,b;
function setup(){
  createCanvas(displayWidth, displayHeight);
  r=random(50,255);
  g=random(0,200);
  b=random(50,255);
}

function draw(){
  background(r,g,b);
  //console.log('draw');
  console.log(accelerationX, accelerationY, accelerationZ);
}

function deviceMoved(){
  background(255);
  Text(accelerationX+","+accelerationY+","+accleerationZ,10,10)
  r=map(accelerationX, -90,90,100,175);
  g=map(accelerationY, -90,90,100,200);
  b=map(acceleration,Z -90,90,100,200);

}