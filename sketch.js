var helicopterIMG, helicopter, package, packageIMG;
var packageBody,ground;
var canvas;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body; 

 function preload()
 {
 	helicopterIMG=loadImage("helicopter.png");
 	packageIMG=loadImage("package.png");
 }

function setup() {
	canvas = createCanvas(1525, 750);

	package = createSprite(width/2, 80, 10,10);
	package.addImage(packageIMG);
	package.scale = 0.2;

	helicopter=createSprite(width/2, 200, 10,10);
	helicopter.addImage(helicopterIMG);
	helicopter.scale=0.6;
	//helicopter.debug=true;					

	ground=createSprite(width/2, 650, width,10);
	ground.shapeColor=color(255);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(ground.width/2 , 200 , 5 , {restitution:0, isStatic:true, friction:0});
	World.add(world, packageBody);

	ground = Bodies.rectangle(width/2, 650 , width, 10 , {isStatic:true} );
 	World.add(world, ground);

	console.log(packageBody);
	 
	Engine.run(engine);
  
}

function draw() {
  background(0);

  Engine.update(engine);  

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,width,10);

  package.x= packageBody.position.x;
  package.y= packageBody.position.y;

  ellipseMode(RADIUS);
  ellipse(packageBody.position.x, packageBody.position.y, 10, 10);

  drawSprites();
} 

function keyPressed() {
	// Look at the hints in the document and understand how to make the package body fall only on
	if(keyCode === DOWN_ARROW){
		Matter.Body.setStatic(packageBody,false);
	}
   }
