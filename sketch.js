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
