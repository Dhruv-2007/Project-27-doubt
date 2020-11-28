
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof1 = new Roof(400,50,600,40);

	bobObject1 = new Bob(580,200,53.5);
	bobObject2 = new Bob(520,200,53.5);
	bobObject3 = new Bob(460,200,53.5);
	bobObject4 = new Bob(400,200,53.5);
	bobObject5 = new Bob(340,200,53.5);
	bobObject6 = new Bob(280,200,53.5);
	bobObject7 = new Bob(220,200,53.5);

	rope1 = new Rope(bobObject1.body,roof1.body);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  bobObject6.display();
  bobObject7.display();

  roof1.display();
}



