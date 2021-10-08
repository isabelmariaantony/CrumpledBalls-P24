
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	rect1 = Bodies.rectangle(width-300 ,height-50, 200 , 5 , {isStatic:true});
	World.add(world, rect1);
	rect1Sprite=createSprite(width-300, height-50, 200,5);
	rect1Sprite.shapeColor=color(255,0,0)

	rect2 = Bodies.rectangle(width-400 ,height-100, 5 , 100 , {isStatic:true});
	World.add(world, rect2);
	rect2Sprite=createSprite(width-400 ,height-100, 5 , 100 );
	rect2Sprite.shapeColor=color(255,0,0)

	rect3 = Bodies.rectangle(width-200 ,height-100, 5 , 100 , {isStatic:true});
	World.add(world, rect3);
	rect3Sprite=createSprite(width-200 ,height-100, 5 , 100 );
	rect3Sprite.shapeColor=color(255,0,0)

paper = new Paper(50,50,50)	
ground = new Ground(width/2, height-20, 1400, 20)	
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(180);
  paper.display()
  ground.display()
  drawSprites();
 
}
function keyPressed(){
	if (keyCode=== UP_ARROW)
{
	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
}}


