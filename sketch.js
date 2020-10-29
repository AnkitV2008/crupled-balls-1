
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObject
var dustbinObject

function setup() {
	createCanvas(1600,800);


	engine = Engine.create();
	world = engine.world;

	
    ground = new Ground(width/2,670,width,20)
    paperObject= new Paper(200,450,40)
    dustbinObject = new dustbin(1200,650);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paperObject.display();
  dustbinObject.display();
 

  drawSprites();
 
}
function keyPressed(){
if (keyCode===UP_ARROW)
{
  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
}

}


