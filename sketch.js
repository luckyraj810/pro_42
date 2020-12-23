const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var t1,t2,t3,t4;
var r;
var drops=[];
var engine,world;

var maxDrops=100;

var thunderCreatedFrame=0;

var umbrella;
var thunder;

function preload(){

   t1=loadImage("1.png");
   t2=loadImage("2.png");
   t3=loadImage("3.png");
   t4=loadImage("4.png");
}

function setup(){
   
    engine = Engine.create();
    world = engine.world;

    createCanvas(400,700);
   umbrella=new Umbrella(200,500);

   if(frameCount%150===0){
       for(var i=0; i<maxDrops; i++){
           drops.push(new Drop(random(0,400),random(0,500)));
       }
   }
}

function draw(){
    Engine.update(engine);
    background(0);
      

    r=Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder=createSprite(random(10,370),random(10,30),10,10);
        switch(r){
            case 1:thunder.addImage(t1);
            break;
            case 2:thunder.addImage(t2);
            break;
            case 3:thunder.addImage(t3);
            break;
            case 4:thunder.addImage(t4);
            break;
            default:break;
        }
        thunder.scale=random(0,3,0.6);
    }
    if(thunderCreatedFrame+10===frameCount && thunder){
        thunder.destroy();
    }
    umbrella.display();
    for(var i=0;i<maxDrops;i++){
        drops[i].showDrop();
        drops[i].updateY();
    }
    drawSprites();
}   

