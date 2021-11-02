const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ball,rope;
var ball_con;


var Ball;
var star;
var bg_img;


function preload(){
  bg_img = loadImage('background.jpg');
  ball = loadImage('ball.png');
  star = loadImage('star.png');

  
}


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  rope = new Rope(200,50,20,20);

  ball = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,ball);
  fruit_con = new Link(rope,ball);

  
}


function draw() 
{
  background(51);
  image(bg_img,width/2,height/2,490,690);

  image(Ball,ball.position.x,ball.position.y,70,70);
  rope.show();
  Engine.update(engine);
  drawSprites();

  
}

