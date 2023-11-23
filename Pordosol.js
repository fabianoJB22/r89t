let sunY;
let isSunRising = true;

function setup() {
  createCanvas(800, 600);
  sunY = height * 0.8; // Posição inicial do sol
}

function draw() {
  background(0, 150, 255); // Céu azul do dia

  // Sol
  fill(255, 200, 0);
  ellipse(width * 0.5, sunY, 100, 100);

  // Mar
  fill(0, 100, 200);
  rect(0, height * 0.7, width, height * 0.3);

  // Chão da praia
  fill(255, 235, 179);
  rect(0, height * 0.7, width, height * 0.1);

  // Movimento do sol
  if (isSunRising) {
    sunY -= 1; // Move o sol para cima
    if (sunY < height * 0.2) {
      isSunRising = false;
    }
  } else {
    sunY += 1; // Move o sol para baixo
    if (sunY > height * 0.8) {
      isSunRising = true;
    }
  }
}
