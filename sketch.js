var song;
function setup(){
  song = loadSound('SurviveTest.mp3');
  createCanvas(windowWidth, windowHeight);
  song.loop();
}
function draw() {
   rect(10, 10 ,10, 10);
   song.play();
}
