var monkey_anim,monkey
var jungle_img,jungle
var stone_img,stones
var banana_img,bananas,score
var ground
function preload(){
monkey_anim=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
jungle_img=loadImage("jungle.jpg");
banana_img=loadImage("banana.png");
stone_img=loadImage("stone.png");
}
function setup() {
  createCanvas(400, 400);
  
  
  jungle=createSprite(200,200,400,400);
  jungle.addAnimation("jungle",jungle_img);
  jungle.velocityX=-2
  monkey=createSprite(125,355,20,20);
  monkey.addAnimation("monkey",monkey_anim);
  monkey.scale=0.10
  bananas=createGroup();
  stones=createGroup();
  ground = createSprite(200,390,400,2);
  ground.visible=false;
  score = 0
}

function draw() {
  background(220);
  if (jungle.x<0){
    jungle.x=jungle.width/2;  
  }
  if(keyDown("space") && monkey.y >= 302){
    monkey.velocityY = -12 ;
  }
  if(bananas.isTouching(monkey)){
    bananas.destroyEach();
    score=score+1
  }
  if(stones.isTouching(monkey)){
    monkey.scale=0.10
  }
  switch (score){
    case 10: monkey.scale=0.12
       break ;
    case 20: monkey.scale=0.14
       break ;
    case 30: monkey.scale=0.16
       break ;
    case 40: monkey.scale=0.20
       break ;
    default : break;   
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  drawSprites();
  text("Score :"+score,300,40) 
  banana();
  stone();
}
function banana () {
  if (World.frameCount % 80 === 0 ) {
    var ran = Math.round(random(180,200));
    console.log(ran);
    var banana_1 = createSprite(400,200);
    banana_1.y = ran;
    banana_1.addImage("Banana",banana_img);
    banana_1.scale=0.04;
    banana_1.velocityX=-4;
    bananas.add(banana_1);
  }
}
function stone () {
 if (frameCount % 100 === 0){
  var stone_1 = createSprite(400,370);
  stone_1.addImage("Stone",stone_img);
  stone_1.scale=0.10;
  stone_1.velocityX=-4;
  stones.add(stone_1); 
  }
}