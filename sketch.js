var bg,bg2,form,system,code,security;
var car1
var car2
var score=0;

function preload() {
  bg = loadImage("background.jpg");
  bg2 = loadImage("helicopter.png")
  car1 = loadImage("car1.png")
  car2 = loadImage("car2.png")
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()

  car1 = createSprite(100,350)
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);

  if(score === 3) {
    clear()
    background(bg2)
    fill("black")
    textSize(40);
    text("City Escaped Yay!!",250, 200);

  }

  drawSprites()
}