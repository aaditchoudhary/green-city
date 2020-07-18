var helicopter;
var packageBody,ground;
var bord;
var bord2;
var bord3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
  createCanvas(800, 400);
    ground=createSprite(400,390,800,20)
    
    helicopter=createSprite(0,350,20,20);
    helicopter.velocityX=2;


    bord=createSprite(670,350,20,50)
    bord2=createSprite(705,380,90,20)
    bord3=createSprite(740,350,20,50)
    bord.shapeColour=("red");
    bord2.shapeColour=("red");
    bord3.shapeColour=("red");

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(0,380,20);
  ellipse.velocityX=2

  if(keyDown("up")) {
    helicopter.velocityY = -10;
   }
  helicopter.velocityY = helicopter.velocityY + 0.8
 
  helicopter.collide(ground )
  helicopter.collide(bord )
  helicopter.collide(bord2 )
  helicopter.collide(bord3 )

  
  ground.fill=("red");
  drawSprites();
}

//function keypressed(){
  //if(keyCode === UP_ARROW) {
  //  Matter.Body.applyForce(helicopter.body,helicopter.body.postion,{x:85,y:-85})
 // }
//}












