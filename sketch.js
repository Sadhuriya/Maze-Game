
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var maze1,maze2,maze3,maze4,maze5,maz6,maze7
,maze8,maze9,maze10,maze11,maze12,maze13,maze14,
maze15,maze16,maze17,maze18,maze19,maze20

var Almond,AppleImg,BroccoliImg,CarrotImg,CheeseImg,ChickenImg,EggImg,Egg2Image,GuavaImg,MangoImg,MilkImg,Milk2Img,Milk3Img;
var MushroomImg,OrangeJuiceImg,PeanutsImg,StrawberryImg,TunaImg,TheNutrientTestImg;
var almondImg

function preload(){

//loading the images

//almondImg=loadImage("Images/Almonds.png");
// appleImg=loadImage("Images/Apple.png");
// broccoliImg=loadImage("Images/Broccoli.png");
// peanutsImg=loadImage("Images/Peanuts.png");
// strawberryImg=loadImage("Images/Strawberry.png");
// chickenImg=loadImage("Images/Chicken.png");
// eggImg=loadImage("Images/Egg.png");


}

function setup(){

createCanvas(1600,800);



engine = Engine.create();
world = engine.world;

maze1= new Maze(100,100,200,PI)
maze2= new Maze(200,650,200,PI)
maze3= new Maze(250,100,200,PI)
maze3= new Maze(200,450,200,PI)
maze4= new Maze(200,300,200,PI)
maze5= new Maze(400,100,200,PI/2)
maze6= new Maze(600,100,200,PI/2)
maze7= new Maze(800,100,200,PI/2)
maze8= new Maze(1000,100,200,PI/2)
maze9= new Maze(1200,100,200,PI/2)
maze10= new Maze(1200,300,200,PI)
maze11= new Maze(1200,450,200,PI)
maze12= new Maze(1200,780,200,PI)
maze13= new Maze(1200,380,200,PI/2)
maze14= new Maze(1200,175,200,PI/2)
maze15= new Maze(380,760,200,PI/2)
maze16= new Maze(580,760,200,PI/2)
maze17= new Maze(780,760,200,PI/2)
maze18= new Maze(980,760,200,PI/2)
maze19= new Maze(1180,760,200,PI/2)
maze20= new Maze(315,760,200,PI)
maze21= new Maze(495,560,200,PI/2)
maze22= new Maze(500,580,200,PI)
maze23= new Maze(400,260,140,PI)
maze24= new Maze(510,260,140,PI)
maze25= new Maze(300,430,200,PI)
maze26= new Maze(500,340,200,PI/2)
maze27= new Maze(720,760,200,PI)
maze28= new Maze(720,700,200,PI)
maze29= new Maze(700,500,100,PI/2)
maze30= new Maze(850,760,540,PI)
maze31= new Maze(1050,250,200,PI/2)
maze32= new Maze(1050,300,200,PI/2)
maze33= new Maze(830,290,230,PI/2)
maze34= new Maze(620,310,130,PI)
maze35= new Maze(910,760,200,PI)
maze36= new Maze(950,500,100,PI/2)
maze37= new Maze(950,650,150,PI)
maze38= new Maze(1030,650,100,PI/2)
maze39= new Maze(630,670,250,PI/2)
maze40= new Maze(530,370)
maze41= new Maze(315,760)
maze42= new Maze(315,760)
maze43= new Maze(315,760)
maze44= new Maze(315,760)
maze45= new Maze(315,760)
maze46= new Maze(315,760)
maze47= new Maze(315,760)
maze48= new Maze(315,760)
maze49= new Maze(315,760)
maze50= new Maze(315,760)

//Almond = createSprite(700,500,30,30);
 //Almond.addImage(almondImg);

// AppleImg=createSprite(700,500,30,30);
// AppleImg.addImage(appleImg);

// BroccoliImg=createSprite(700,500,30,30);
// BroccoliImg.addImage(broccoliImg);

// PeanutsImg=createSprite(700,500,30,30);
// PeanutsImg.addImage(peanutsImg);

// StrawberryImg=createSprite(700,500,30,30);
// StrawberryImg.addImage(strawberryImg);

// ChickenImg=createSprite(700,500,30,30);
// ChickenImg.addImage(chickenImg);

// EggImg=createSprite(700,500,30,30);
// EggImg.addImage(eggImg);

}

function draw(){
background("rgb(173,216,230)")

Engine.update(engine)

maze1.display();
maze2.display();
maze3.display();
maze4.display();
maze5.display();
maze6.display();
maze7.display();
maze8.display();
maze9.display();
maze10.display();
maze11.display();
maze12.display();
maze13.display();
maze14.display();
maze15.display();
maze16.display();
maze17.display();
maze18.display();
maze19.display();
maze20.display();
maze21.display();
maze22.display();
maze23.display();
maze24.display();
maze25.display();
maze26.display();
maze27.display();
maze28.display();
maze29.display();
maze30.display();
maze31.display();
maze32.display();
maze33.display();
maze34.display();
maze35.display();
maze36.display();
maze37.display();
maze38.display();
maze39.display();
maze40.display();
maze41.display();
maze42.display();
maze43.display();
maze44.display();
maze45.display();
maze46.display();
maze47.display();
maze48.display();
maze49.display();
maze50.display();

//drawSprites();

}