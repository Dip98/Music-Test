var song;
function setup() {
  createCanvas(windowWidth, windowHeight);
  song = loadSound('Survive_Soundtrack.mp3');
}
function draw() {
    song.play();
    rect(10, 10 ,10, 10)
}
