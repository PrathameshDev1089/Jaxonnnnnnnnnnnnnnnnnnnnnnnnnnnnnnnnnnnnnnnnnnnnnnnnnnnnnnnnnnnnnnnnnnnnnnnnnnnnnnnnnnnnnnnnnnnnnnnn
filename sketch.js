
var path;
var pathImg;
var runner;
var runnerImg;
var invisibleGround1;
var invisibleGround2;

function preload(){
  //pre-load images
  pathImg = loadImage("path.png");
  runnerImg = loadImage("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 1.2;

  runner = createSprite(200,320);
  runner.addImage(runnerImg);
  runner.scale = 0.1;

  invisibleGround1 = createSprite(30,200,20,400);
  invisibleGround1.visible = false;

  invisibleGround2 = createSprite(370,200,20,400);
  invisibleGround2.visible = false;

}

function draw() {
  background(0);

runner.x = mouseX;

if(path.y > 400){
  path.y = height/2;
}

runner.collide(invisibleGround1);
runner.collide(invisibleGround2);
drawSprites();
}
