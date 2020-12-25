
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var treeImage, boyImage,

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	stone = new Rock(100, 600, 20);

	mango1 = new Mango(600, 100, 20);
	mango2 = new Mango(625, 120, 20);
	mango3 = new Mango(600, 150, 20);
	mango4 = new Mango(620, 100, 20);

	ground = new Ground(400, 700, 800, 30);


	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);  
  drawSprites();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();

  ground.display();
}



