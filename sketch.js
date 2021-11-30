const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var circulo1;
var piedra1;
var hierro1;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    circulo1=new Rubber(800,300,90);
    piedra1=new stone(300,300,50,50);
    hierro1=new hierro(200,300,25,40);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    circulo1.display();
    piedra1.display();
    hierro1.display();
 
}