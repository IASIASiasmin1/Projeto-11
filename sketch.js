var sea, seaImg;
var ship, shipImg; 

function preload(){

  seaImg = loadImage ("sea.png");
  shipImg = loadAnimation ("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png")
}

function setup(){

  createCanvas(400,400);

 sea = createSprite (200, 180, 400, 20);
 ship = createSprite (200, 180, 200, 50);
 
 ship.addAnimation ("navegando", shipImg);
}

function draw() {
  background("blue");
  
  sea.addImage ("sea", seaImg);
  sea.velocityX=-9
  sea.scale=0.5

  if (sea.x < 0) {
    sea.x = sea.width/2;
  }
  
  ship.scale=0.3;
  drawSprites();
}
