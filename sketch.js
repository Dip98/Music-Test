var song;
function preload(){
  song = loadSound('Survive-Soundtrack.mp3');
}
function setup() {
  createCanvas(windowWidth, windowHeight);
}
function draw() {
    song.play();
    rect(10, 10, 10, 10)
}
