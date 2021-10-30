var bg,bgImg;
var player, shooterImg, shooter_shooting,shotingSound;
var zombie,zombieImg,zombieGroup,loseSound
var ground,heart,heartImg,heartImg2,heartImg3;
     
 var  heartCount = 3

function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png");
  shooter_shooting = loadImage("assets/shooter_3.png");
  zombieImg = loadImage ("assets/zombie.png");
  bgImg = loadImage("assets/bg.jpeg");
  shotingSound = loadSound("./assets/lose.mp3");
  loseSound = loadSound("./assets/explosion.mp3");
  heartImg3 = loadImage("assets/heart_3.png")
  heartImg2 = loadImage("assets/heart_2.png")
  heartImg = loadImage("assets/heart_1.png");
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  
  /*bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1*/
  


player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,250,450)

   ground = createSprite(windowWidth/2,windowHeight/1.10,5000,20)
      //score = createSprite(40,50,60,30);
    zombieGroup = createGroup();
     score = 0
    
   heart = createSprite(1200,50,10,10);
   heart.addImage(heartImg3)
   heart.scale = 0.3

}

function draw() {
 background(bgImg);
  //background(0); 
  spawnZombies();
  fill("white")
  textSize(25);
  text("Zombies Killed: "+ score, windowWidth/2,30);
  

  //moving the player up and down and making the game mobile compatible using touches
/*if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}*/
if(keyDown("UP_ARROW")&& player.y >= 100) {
  player.velocityY = -12;}
  player.velocityY = player.velocityY + 0.8
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}
if(keyDown("RIGHT_ARROW")){
player.x = player.x +30

}
player.collide(ground)


if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
  shotingSound.play();
  zombieGroup.destroyEach();
  score = score + 1
  
 
}


else if(keyWentUp("space")){
  player.addImage(shooterImg)
}
if(zombieGroup.isTouching(player)){
  if(heartCount === 3){
    
    heart.addImage(heartImg2)
  }
  else if(heartCount === 2){
    
    heart.addImage(heartImg)
  } 
  else if(heartCount === 1){
      heart.visible=false;
  }
  heartCount = heartCount -1
}



drawSprites();

}
function spawnZombies() {
  
 
  if (frameCount % 50 === 0) {
    zombie = createSprite(1200,800,1,1);
    zombie.y = Math.round(random(100,700));
    console.log(zombie.y)    
    zombie.addImage(zombieImg);
    zombie.scale = 0.14;
    zombie.velocityX=-1;
    zombie.debug = true
    zombie.setCollider("rectangle",0,0,300,900)
    //zombie.lifetime = 200;
    zombieGroup.add(zombie);}
    /*if(zombie.isTouching(player)){
      loseSound.play();
}*/
  }
