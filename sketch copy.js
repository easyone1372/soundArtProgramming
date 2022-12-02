var wave;
var playing=false;
var button;

function setup() {
  //createCanvas(displayWidth, displayHeight); //기기 사이즈에 맞춰서 생성됨
  createCanvas(720,256);
  wave = new p5.Oscillator();
  wave.setType('sine');
  //wave.start();
  wave.freq(440);
  wave.amp();

  button = createButton('play/pause');
  button.mousePressed(toggle);

}

/*
function draw() {
  
}
*/

function toggle(){
  if(!playing){
    wave.start();
    wave.amp(0.5,1);
    playing = true;
  }
  else{
    wave.amp(0,1);
    playing = false;
  }
}
