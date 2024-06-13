var song;
function preload(){
  song = loadSound('SurviveTest.mp3');
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  song.loop();
}
function draw() {
   rect(10, 10 ,10, 10)
}
