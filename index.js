var song;
function setup() {
  createCanvas(windowWidth, windowHeight);
  song = loadSound('SurviveTest.mp3', ok);
}
function ok(){
  song.play();
}
