var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(2000,2000);
  bullet=createSprite(50,200,50,10);
  wall=createSprite(1500,200,thickness,height/2);
  speed=random(55,90);
  weight=random(400,1500);
  thickness=random(20,80);
  bullet.velocityX=speed;
  bullet.shapeColor="black";
  wall.shapeColor="white";
}

function draw() {
  background(255,255,255);

if(bullet.isTouching(wall)){
  damage=0.5*speed*speed/(thickness*thickness*thickness)
if(damage>10){
wall.shapeColor="red";
}
if(damage<10&&damage>0){
wall.shapeColor="green";
}
}

  drawSprites();
}