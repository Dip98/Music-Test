var song;
function setup() {
  createCanvas(windowWidth, windowHeight);
  song = loadSound('Survive-Soundtrack.mp3')l
}
function draw() {
    song.play();
    rect(10, 10, 10, 10)
}
