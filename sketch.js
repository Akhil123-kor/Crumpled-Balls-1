
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper_ball,db,db2,db3;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper_ball=new Paper(35,635,50)

	db=new Dustbin(480,610,10,100)
	db2=new Dustbin(380,655,190,10)
	db3=new Dustbin(280,610,10,100)

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
Engine.update(engine)
  rectMode(CENTER);
  background(0);
  paper_ball.display()
  db.display()
  db2.display()
  db3.display()
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paper_ball.body,paper_ball.body.position,{x:85,y:-85})
	 }
   }
