var song;
function setup(){
  song = loadSound('SurviveTest.mp3');
  createCanvas(windowWidth, windowHeight);
}
function draw() {
   rect(10, 10 ,10, 10);
   song.play();
}
