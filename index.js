var song;
function setup() {
  createCanvas(windowWidth, windowHeight);
  song = loadSound('SurviveTest.mp3');
}
function mousePressed() {
  if (song.isPlaying()) {
    song.stop();
  } else {
    song.play();
  }
}
rect(10, 100, 10, 10);
