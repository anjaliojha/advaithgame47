var police,policeImage;
var thief,thiefImage;
var ground,groundImage,obstacles,obstacleImage;
var obstacle2Image,obstacle3Image;
var treasure,treasure1Image,treasure2Image;
var treasure3Image,treasure4Image;


function preload(){
groundImage = loadImage("Road.png");
thiefImage = loadAnimation("Runner-1.png","Runner-2.png");
policeImage = loadImage("car1.png");
treasure1Image =loadImage("treas1.png");
treasure2Image =loadImage("treasure2.jpg");
treasure3Image =loadImage("treas3.png");
treasure4Image =loadImage("treas4.png");
}

function setup(){
 createCanvas(600,800);
ground=createSprite(300,300);
ground.addImage("ground",groundImage);

//ground.y=ground.height/2;
thief=createSprite(300,400,20,20);
thief.addAnimation("thief",thiefImage);
thief.scale=0.05;

police=createSprite(300,700,20,20);
police.addImage(policeImage)
police.scale=0.5

}

function draw(){
  background("brown");
  console.log(police.x);
  ground.velocityY=2
  if(ground.y>400){
    ground.y=300
  }
  if(keyDown(LEFT_ARROW)){
    police.x=police.x-2;
  }
  if(keyDown(RIGHT_ARROW)){
    police.x=police.x+2;
  }
  spawnTreasure();
  spawnObstacles();
  drawSprites();
}
function spawnObstacles(){
    if(frameCount%200=== 0 ){
     obstacles=createSprite(300,0,20,20);
     obstacles.velocityY=2;
    rand = Math.round(random(1,4));
   switch(rand){
     case 1:obstacles.addImage(obstacleImage);
     break;
     case 2:obstacles.addImage(obtstacleImage2);
     break;
     case 3:Obstacles.addImage(obtstacleImage3);
     break;
     case 4:obstacles.addImage(obstacleImage4);
     break;
   }
    }

}
function spawnTreasure(){
  if(frameCount%300=== 0){
   treasure=createSprite(thief.x,thief.y,20,20);
   treasure.shapeColor="yellow"
   treasure.velocityY=2;
   ran = Math.round(random(1,4));
   switch(ran){
     case 1:treasure.addImage(treasure1Image);
     break;
     case 2:treasure.addImage(treasure2Image);
     break;
     case 3:treasure.addImage(treasure3Image);
     break;
     case 4:treasure.addImage(treasure4Image);
     break;
   }
  }
}
