let cor;
let circuloX; // horizontal
let circuloY; // vertical

function setup() {
  createCanvas(400, 400);
  background("black");
  cor = color(random(0, 255), random(0, 255), random(0, 255));
  circuloX = 200;
  circuloY = 200;
}

function draw() {
  circle(circuloX, circuloY, 25);
  if (mouseX < circuloX) {
    circuloX = circuloX - 1;
  }
  if (mouseX > circuloX) {
    circuloX = circuloX + 1;
  }

  if (mouseY < circuloY) {
    circuloY--;
  }
  
  if (mouseY > circuloY) {
    circuloY ++;
  }
  fill(cor);
  
  if (mouseIsPressed) {
    cor = color(random(0, 255), random(0, 255), random(0, 255));
  }
}
                      