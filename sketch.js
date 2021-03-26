var fixedRect, movingRect;

function setup() {
  createCanvas(800,800);
  
  fixedRect = createSprite(200,300,50,80);
  fixedRect.shapeColor= 'green';

  movingRect= createSprite(300,300,80,30);
  movingRect.shapeColor= "green";

  movingRect.debug = true;
  fixedRect.debug= true;
}

function draw() {
  background(0);  

  movingRect.x =mouseX;
  movingRect.y = mouseY;

  console.log(movingRect.x-fixedRect.x);

  if(movingRect.x-fixedRect.x< movingRect.width/2+fixedRect.width/2 &&
  fixedRect.x-movingRect.x< movingRect.width/2+fixedRect.width/2
  && movingRect.y-fixedRect.y< movingRect.height/2+fixedRect.height/2
  && fixedRect.y-movingRect.y<  movingRect.height/2+fixedRect.height/2){
    fixedRect.shapeColor= "red";
    movingRect.shapeColor="red"

  }
  else{
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }

  drawSprites();
}