var garden,rabbit,apple,orangeL,redL;
var gardenImg,rabbitImg,carrotImg,orangeImg,redImg;
var score=0;
var gameState=0;
var checking =false

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("basket2.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
  bombimg = loadImage("bomb.png")
}


function setup(){
  
  createCanvas(500,500);
// Moving background
//garden=createSprite(200,200);
//garden.addImage(gardenImg);

appleg =new Group();
orangeg= new Group();
redg=new Group();
bombg =new Group();
//creating boy running
rabbit = createSprite(160,470,20,20);
rabbit.scale =0.7
rabbit.addImage(rabbitImg);
button =createButton("Play")
button.position(200,250)
button.class("customButton")
button.mousePressed(()=>{
  check();

})
}

function draw() {
  background(gardenImg);
  
  if(gameState == 0 ){
    background(gardenImg)
    fill("red")
    textSize(35)
    strokeWeight(3)
    text("Catch It!!",200,200)
    fill("yellow")
    textSize(20)
    text("warning:Avoid the Bombs ",8,460)
  }


if(gameState==1){
  
  // boy moving on Xaxis with mouse'
  
  rabbit.x = World.mouseX;

 
  
   drawSprites();
   textSize(25)
   fill("black")
   strokeWeight(2)
   stroke("black")
   text("Score : "+score,30,50)
  
  var select_sprites = Math.round(random(1,3));

  if(frameCount% Math.round(random(350,500)) == 0){
    bomb= createSprite(random(50, 350),40, 10, 10);
    bomb.addImage(bombimg)
    bomb.scale=0.3
    bomb.velocityY = 5
    bombg.add(bomb)
  }
  
  if(rabbit.isTouching(bombg)){
    gameState =2;
  }
  if (frameCount % 80 == 0) {
    if (select_sprites == 1) {
      createApples();
    } else if (select_sprites == 2) {
      createOrange();
    }else {
      createRed();
    }

  }
  appleg.overlap(rabbit,a1);
  orangeg.overlap(rabbit,a2);
  redg.overlap(rabbit,a3);
  
if(score>5 && score<10){
  apple.velocityY=4.5
  orangeL.velocityY=4.5
  redL.velocityY=4.5
}

if(score>10 && score<20){
  apple.velocityY=5.5
  orangeL.velocityY=5.5
  redL.velocityY=5.5
}
}
if(gameState ==2){
  background("black");
  textSize(32)
  textFont("cursive")
  fill("red")
  text("Game Over!!",230,250)
}
}
function check()
{
  if(gameState==0){
  gameState =1;
  button.hide();
  }
}

function a1(apple){
  
    score+=1;
    apple.remove();
  
}
function a2(orange){
  
  score+=1;
  orange.remove();

}
function a3(red){
  
  score+=1;
  red.remove();

}
function createApples() {
apple = createSprite(random(50, 350),40, 10, 10);
apple.addImage(appleImg);
apple.scale=0.07;
apple.velocityY = 3;
apple.lifetime = 150;
appleg.add(apple);

  
}

function createOrange() {
orangeL = createSprite(random(50, 350),40, 10, 10);
orangeL.addImage(orangeImg);
orangeL.scale=0.08;
orangeL.velocityY = 3;
orangeL.lifetime = 150;
orangeg.add(orangeL)
}

function createRed() {
redL = createSprite(random(50, 350),40, 10, 10);
redL.addImage(redImg);
redL.scale=0.06;
  redL.velocityY = 3;
  redL.lifetime = 150;
  redg.add(redL)
}
