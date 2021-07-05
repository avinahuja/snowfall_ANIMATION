const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ccold,snowflake=[];
var iteration = 0;

function preload(){
  ccold  = loadImage("snow1.jpg")
}

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
    world = engine.world;

}

function draw() {
  background(ccold); 
  Engine.update(engine);
  var rand =Math.round(random(0,800))
   
  
  

  //rainbow snowman
  fill(Math.round(random(0,255)),Math.round(random(0,255)),Math.round(random(0,255)));
  //rect(0, 300, 397, 102);
  ellipse(200, 300, 150, 150);
  //fill(255, 0, 0);
  ellipse(200, 200, 100, 100);
  ellipse(200, 120, 75, 75);
  fill("black")
  ellipse(180, 120, 25, 25);
  ellipse(220, 120, 25, 25);
  strokeWeight(20);
  stroke(124, 107, 18);
  line(160, 200, 87, 132);
  line(240, 200, 329, 120)
  
  //spawnSnow()
  if (frameCount % 20 === 0) {
    snowflake[iteration] = new let_it_snow_let_it_snow_let_it_snow(rand,10,50,50)
    if(snowflake[iteration].y == 400){
       snowflake[iteration].destroy()
     }
    iteration++
    }
  for(var i = 0; i<iteration; i++)
    snowflake[i].display()
  
  
  drawSprites();
  

}
