const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true,
        friction: 0.2
    }
    var ball_options ={
        restitution : 0.8
    }
    var box_options ={
        restitution : 0.8
    }
 
    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    ball = Bodies.circle(200,200,30,ball_options);
    World.add(world,ball);

    box = Bodies.rectangle(300,200,50,50,box_options);
    World.add(world,box);

    console.log(ground);
    console.log(ball);
    console.log(box);

}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,30,30);
    rectMode(CENTER);
    rect(box.position.x,box.position.y,50,50);
}