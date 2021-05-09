
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;
function preload()
{
	boy=loadImage("images/boy.png");
	tree=loadImage("images/tree.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground1= new ground(400,695,800,20)
mango1=new mango(600,300,22)
mango2=new mango(600,380,22)
mango3=new mango(680,410,22)
mango4=new mango(770,340,22)
mango5=new mango(680,280,22)
stone1=new stone(100,700,22)
sling1 = new SlingShot(stone1.body,{x:55,y:540})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  image(boy , 20,460,200,300);
  ground1.display();
  stone1.display();
  image(tree, 500,200,310,500)
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

 sling1.display();
 stone1.display();
  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})
}


function mouseReleased(){
sling1.fly()


}


function keypressed(){
if(keyCode === 32){

Matter.body.setPosition(stone1.body, {x:235, y:420})
sling1.attach(stone1.body);
}

}


