var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


    engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	
	 
	 
	 rect1 =Bodies.rectangle(360,575,20,75,{isStatic:true} );
	 rect2 =Bodies.rectangle(400,615,75,20,{isStatic:true} );
	 rect3 =Bodies.rectangle(440,575,20,75,{isStatic:true} );
	World.add(world,rect1);
	World.add(world,rect2);
	World.add(world,rect3);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  fill("blue");
  rectMode(CENTER)
  rect(rect1.position.x,rect1.position.y,20,75);
  fill("blue");
  rectMode(CENTER)
  rect(rect2.position.x,rect2.position.y,100,20);
  fill("blue");
  rectMode(CENTER)
  rect(rect3.position.x,rect3.position.y,20,75);
  drawSprites();

}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
 Matter.Body.setStatic(packageBody,false);
  }
}



