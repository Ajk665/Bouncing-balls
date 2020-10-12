const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;

function setup() {
  createCanvas(600,600);
  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic:true
  }
  object = Bodies.rectangle(300,550,600,10,options);
  World.add(world,object);
  var options2 = {
    restitution:1
  }
  console.log(object.position.x);
  object2 = Bodies.circle(300,20,20,options2);
  World.add(world,object2);
  
  var options3 = {
      restitution:0.75,
      friction:0.25,
      density:0.5
  }

  object3 = Bodies.circle(350,50,20,options3);
  World.add(world,object3);
}

function draw() {
  background(0,0,0);
  Engine.update(engine);
  rectMode(CENTER);
  rect(object.position.x,object.position.y,600,10);
  ellipseMode(RADIUS);
  ellipse(object2.position.x,object2.position.y,20,20);
  ellipse(object3.position.x,object3.position.y,20,20);
}