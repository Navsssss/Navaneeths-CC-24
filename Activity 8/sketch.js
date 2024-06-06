let mic;
let fft;

function setup() {
  createCanvas(600, 400);

  mic = new p5.AudioIn();
  mic.start();

  fft = new p5.FFT();
  fft.setInput(mic);

  noStroke();
  colorMode(HSB, 360, 100, 100, 100);
}

function draw() {
  background(0, 15);

  let spectrum = fft.analyze();

  for (let i = 0; i < spectrum.length; i++) {
    let x = map(i, 0, spectrum.length, 0, width);
    let y = map(spectrum[i], 0, 255, height, 0);

    fill(i, 255, 255);
    rect(x, y, width / spectrum.length, height - y);
  }
}