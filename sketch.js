
var monkey, monkey_running;
var back, backgroundImg, ground;
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstaclesGroup;
var score=0;

function preload(){
  
monkey_running = loadAnimation("sprite_0.png, sprite_1.png, sprite_2.png, sprite_3.png, sprite_4.png, sprite_5.png, sprite_6.png, sprite_7.png, sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  
  obstacleImage = loadImage("obstacle.png");
  
  backgroundImg = loadImage("jungle.jpg");
 
}



function setup() {
  createCanvas(800, 400);
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(400,348,900,10);
  ground.visible = false;
  
  back = createSprite(300,30);
  back.addImage("back", backgroundImg);
  back.depth = monkey.depth;
  monkey.depth = monkey.depth +1;
  
  
  obstaclesGroup = new Group();
  FoodGroup = new Group();
  
  

  
}


function draw() {
  background(245);
  
  score = score + Math.round(getFrameRate()/50);
  
  textSize(45);
  fill("brown");
  text("Score: "+ score, 480,50);
  
  
  if(keyDown("space")){
      monkey.velocityY = -13.5;
     }
  
  console.log(monkey.y);
  
   monkey.velocityY = monkey.velocityY + 1.3
  
  monkey.collide(ground);
  
  switch(score){
    case 200: monkey.scale=0.12;
      break;
      case 300: monkey.scale=0.14;
      break;
      case 400: monkey.scale=0.16;
      break;
      case 500: monkey.scale=0.18;
      break;
      case 600: monkey.scale=0.20;
      break;
      case 700: monkey.scale=0.22;
      break;
      case 800: monkey.scale=0.22;
      break;
      case 900: monkey.scale=0.24;
      break;
      case 1000: monkey.scale=0.26;
      break;
      case 1100: monkey.scale=0.28;
      break;
      case 1200: monkey.scale=0.30;
      break;
      case 1400: monkey.scale=0.32;
      break;
      case 1600: monkey.scale=0.34;
      break;
      case 1800: monkey.scale=0.36;
      break;
      default:break;
  }
  
  if(obstaclesGroup.isTouching(monkey)){
    monkey.scale = 0.12;
    score = 0;
  }
  
  if(FoodGroup.isTouching(monkey)){
    FoodGroup.destroyEach();
  }
  
  text.depth = back.depth;
  text.depth = text.depth + 1;
  
spawnBananas();
spawnObstacles();
drawSprites();  
}

function spawnObstacles(){
   
  if(frameCount%275===0){
    var obstacle = createSprite(800,325);
    obstacle.velocityX = -7;
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstaclesGroup.add(obstacle);

  }
}

function spawnBananas(){
  
  if(frameCount%100===0){
    var banana = createSprite(800,235);
    banana.velocityX = -7;
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    FoodGroup.add(banana);
    
    
  }
}






