//game
//eddson jose
let player, playerX, playerY, playerSpeed;
function setup() {
  createCanvas(windowWidth, windowHeight);
  playerX = width/2;
  playerY = height/2;
  playerSpeed = 5;
}
function draw() {
  fill(200); noStroke(); background(20);
  circle(playerX, playerY, 5);
  if (keyIsDown(87)) {playerY -= playerSpeed;}//w
  if (keyIsDown(65)) {playerX -= playerSpeed;}//a
  if (keyIsDown(83)) {playerY += playerSpeed;}//s
  if (keyIsDown(68)) {playerX += playerSpeed;}//d
  if (playerX <= 0) {playerX = 0;}
  else if (playerX >= windowWidth) {playerX = windowWidth;}
  else if (playerY <= 0) {playerY = 0;}
  else if (playerY >= windowHeight) {playerY = windowHeight;}
}
