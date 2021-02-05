var red,redimage,redback,redbackimage;
var red2,boom2,chuck2,cabage2;
var starwars,starimage;
var b,bimage;
var music
var start,startimage;
var im,imimage;
var next;
var nextimage;
var s
// red var 
var deadline;
var spin,spin2,spinimage;
var yr;
var yr2;
var rground;
var rground2;
var rground3;
var rground4;
var rground5;
var rground6;
var rground7;
var li;
var rground8;
var rground9;
var rb1;
var rb2;
var rb3;
var rb4;
var rb5;
var rb6;
var rb7;
var rb8;
var rb9;
var rb10;
var rb11;
var rb12;
var button;
var gate;
var trophy;
var next;
var redlazer1;
var redlazer2;
var rc1;
var rc2;
var rc3;
var rc4;
var rg; 
var rg2;
var rg3;
var rg4;
var mw;
 var life;
var final;
var br;
var em;
var restart;
var home;
var gun,gunimage;
var lifemeter,lifeimage,medium,half,low,verylow;
var  l;
// level2;
var l2b1;
var l2b2;
var l2b3;
var l2b4;
var heart;
var l2b5;
var l2b6;
var l2b7;
var l2b8;
var l2b9;
var l2b10;
var l2b11;
var l2b12;
var l2b13;
var l2b14;
var l2b15;
var l2b16;
var l2b17;
var l2b18;
var l2b19;
var l2b20;
var l2b21;
var l2b22;
var l2b23;
var l2b24;
var l2b25;
var l2b26;
var l2b27;
var l2b28;
var l2b29;
var l2b30;
var l2b31;
var l2b32;
var l2b33;
var l2b34;
var l2b35;
var l2b36;
var l2b37;
var l2b38;
var l1;
var l2;
var l3;
 var l4;
var l2ground1;
var l2ground2;
var l2ground3;
var l2ground4;
var l2ground5;
var l2ground7;
var l2c2;
var l2c3;
var l2c1;
var l2c4;
var l2c5;
var l2c6;
var l2c7;
var slid;
var deathpart;
var button2;
var fnext;
var fhome;
var fch;
var o;

var gameState="start";

function preload(){
redimage=loadImage("red.png");
  bimage=loadImage("final battle.jpg");
  starImage=loadImage("Untitled.png");
  startimage=loadImage("start.png");
  imimage=loadImage("music.png")
   music=loadSound("asap.mp3");
  nextimage=loadImage("next.png")
  redbackimage=loadImage("redflip.png");
  lifeimage=loadImage("full.png");
  medium=loadImage("medium.png");
  half=loadImage("half.png");
  low=loadImage("low.png");
  verylow=loadImage("verylow.png");
  gunimage=loadImage("gun.png")
 s=loadSound("wars.mp3")
  spinimage=loadImage("spin1.png");
  chuckimage=loadImage("chuck.png")
  final=loadSound("final.mp3");
  em=loadSound("asap.mp3");
}

function setup() {
 createCanvas(1400,600);
  // normal objects
  
  //200 is real red pos
red=createSprite(200,200,20,20);
  red.addImage(redimage);
  red.scale=0.1;
  red.visible=false;
  red.debug=true;
  
  chuck=createSprite(12000,200,20,20);
  chuck.addImage(chuckimage);
  chuck.scale=0.1;
  chuck.visible=false;
  chuck.debug=true;

  b=createSprite(300,300);
  b.addImage(bimage);
  b.scale=0.7;
  
  starwars=createSprite(300,150);
  starwars.addImage(starImage);
  starwars.scale=0.7;
  
 start=createSprite(300,300);
  start.addImage(startimage);
  start.scale=0.4;
  

  
  next=createSprite(530,560);
  next.addImage(nextimage);
  next.scale=0.2
  next.visible=false;
  
  red2=createSprite(100,100);
  red2.addImage(redimage);
  red2.scale=0.2;
  red2.visible=false;
  
  chuck2=createSprite(300,100);
  chuck2.visible=false;
  chuck2.scale=0.2;
  chuck2.addImage(chuckimage);
  
  // red objects
  rground=createSprite(500,500,1000,200);
  rground.shapeColor="brown"
  rground.visible=false;
  
  rb1=createSprite(600,100,400,200)
  rb1.shapeColor="brown"
  rb1.visible=false;
  
  redlazer1=createSprite(500,250,5,100);
  redlazer1.shapeColor="red";
  redlazer1.visible=false;
  
  rb2=createSprite(1600,300,800,60);
  rb2.visible=false;
  
  rc1=createSprite(1440,250,50,50);
  rc1.shapeColor="red";
  rc1.visible=false;
  
  life=100;
  li=100
  br=30
  
  rc2=createSprite(1740,250,50,50);
  rc2.shapeColor="red";
  rc2.visible=false;
  
  rb4=createSprite(2300,50,900,50);
  rb4.shapeColor="brown"
  rb4.visible=false;
  
  rground2=createSprite(2600,450,1800,50);
  rground2.shapeColor="brown";
  rground2.visible=false;
  
  rg=createSprite(2500,70,20,20);
  rg.shapeColor="orange";
  rg.visible=false;
  
rb5=createSprite(3200,420,100,100);
  rb5.visible=false;
  rb5.shapeColor="brown";
  
  lifemeter=createSprite(0,50);
  lifemeter.addImage(lifeimage);
  lifemeter.visible=false;
  lifemeter.scale=0.3;
  
  gun=createSprite(0,0)
  gun.addImage(gunimage);
  gun.scale=0.2;
  gun.visible=false;
  
  rground3=createSprite(4000,200,900,100);
  rground3.visible=false;
  rground3.shapeColor="brown";
  rground.depth=2;
  
  
  
  
  rground4=createSprite(4500,550,1500,100);
  rground4.visible=false;
  rground4.shapeColor="brown";
  
  yr=createSprite(4800,200,1000,5);
  yr.visible=false;
  yr.shapeColor="yellow";
  
  spin=createSprite(4200,450,100,100);
  spin.shapeColor="red";

  spin.addImage(spinimage)
  spin.debug=true;
  spin.setCollider("circle",0,0,120);
  
  rc3=createSprite(3600,330,50,200);
  rc3.shapeColor="red";
  rc3.visible=false;
  rc3.depth=1;
  
  rground5=createSprite(6200,400,1500,100);
  rground5.shapeColor="brown";
  rground5.depth=13;
  rground5.visible=false;
  
  rb6=createSprite(5700,350,100,100);
  rb6.shapeColor="brown";
  rb6.visible=false;
  
  rb7=createSprite(6300,350,100,100);
  rb7.shapeColor="brown";
  rb7.visible=false;
  
  redlazer2=createSprite(6000,340,570,10);
  redlazer2.shapeColor="red";
  redlazer2.visible=false;
  
  rb8=createSprite(7500,50,900,50);
  rb8.shapeColor="brown";
  rb8.visible=false;
  
  rground6=createSprite(7500,550,900,50);
  rground6.visible=false;
  rground6.shapeColor="brown"
  
  rc4=createSprite(6800,350,50,50)
  rc4.shapeColor="red"
  rc4.visible=false;
  rc4.depth=0.1;
  
  rg2=createSprite(7200,80,10,20);
  rg2.shapeColor="orange";
  rg2.visible=false;
  
    rg3=createSprite(7500,80,10,20);
  rg3.shapeColor="orange";
  rg3.visible=false;
  
    rg4=createSprite(7800,80,10,20);
  rg4.shapeColor="orange";
  rg4.visible=false;
  
  rground7=createSprite(8700,550,1000,100);
  rground7.shapeColor="brown";
  rground7.visible=false;
  
  yr2=createSprite(8350,300,5,1000);
  yr2.shapeColor="yellow";
  
  spin2=createSprite(9000,400);
  spin2.addImage(spinimage);
  spin2.scale=0.7
      spin2.setCollider("circle",0,0,120);
  
  rground8=createSprite(10200,550,450,100);
  rground8.shapeColor="brown";
  
  rground9=createSprite(11300,550,450,100);
  rground9.shapeColor="brown"
  
  deadline=createSprite(5500,700,50000,100);
  deadline.shapeColor="red";
  deadline.visible=false;
  
   restart=createSprite(100,400);
  restart.visible=false;
  restart.shapeColor="orange";
  
  home=createSprite(400,400);
  home.visible=false;
  home.shapeColor="red"
  
  rb9=createSprite(11825,550,100,400);
  rb9.shapeColor="brown";
  
  rb10=createSprite(12200,50,1000,100);
  rb10.shapeColor="brown"
  
  rb11=createSprite(12200,400,1000,100)
  rb11.shapeColor="brown"
  
  rb12=createSprite(12800,200,400,500);
  rb12.shapeColor="brown";
  
  button=createSprite(12000,340,10,30);
  button.shapeColor="green"
  button.depth=0.1;
  
  gate=createSprite(12400,200,50,300);
  gate.shapeColor="brown";
  gate.depth=0.1;
  
  trophy=createSprite(12600,200,50,50);
  trophy.shapeColor="yellow";
  
  next2=createSprite(550,600,100,100);
  next2.shapeColor="lime";
  next2.visible=false;
  
  l2b1=createSprite(50,50,1000,100);
 l2b1.visible=false;
  l2b2=createSprite(50,300,1000,100);
l2b2.visible=false;
  
  l2b3=createSprite(500,400,100,300);
  l2b3.visible=false;
  
  l2b4=createSprite(800,550,1000,100);
  l2b4.visible=false;
  
  l2b5=createSprite(1200,250,500,100);
  l2b5.visible=false;
  
  l2ground=createSprite(1800,550,500,100);
  l2ground.visible=false;
  
  l2b6=createSprite(2025,450,200,350);
  l2b6.visible=false;
  
  l2ground2=createSprite(2800,550,900,100);
  l2ground2.visible=false;
  
  l2b7=createSprite(2800,50,900,100);
  l2b7.visible=false;
  
  l2ground3=createSprite(3800,550,600,100);
  l2ground3.visible=false;
  
  l2b8=createSprite(3370,400,100,400);
  l2b8.visible=false;
  
  l2ground4=createSprite(5800,550,50,100);
  l2ground4.visible=false;
  
  l2ground5=createSprite(6500,550,900,400)
  l2ground5.visible=false;
  
  l2ground6=createSprite(7600,550,900,50);
  l2ground6.visible=false;
  
  slid=createSprite(8000,300,200,30);
  slid.visible=false;
  
  o=createSprite(8000,260,100,10);
  o.visible=true;
  o.shapeColor="yellow"
 // dewhfuowhfouhfoehfoehfweohfurwofho3ovhnoehouhfourhvfohfohohfgiuwohc 
  l2c1=createSprite(800,500,50,50);
  l2c1.shapeColor="red";
  l2c1.visible=false;
  
  l1=createSprite(2535,80,10,10);
  l1.visible=false;
  l1.shapeColor="orange"
  
  l2=createSprite(2820,80,10,10);
  l2.visible=false;
  l2.shapeColor="orange";
  
  l3=createSprite(2934,80,10,10);
  l3.visible=false;
  l3.shapeColor="orange";
  
  l4=createSprite(3126,80,10,10);
  l4.visible=false;
  l4.shapeColor="orange"
  
  l2c2=createSprite(1200,500,100,50)
  l2c2.visible=false;
  l2c2.shapeColor="red"
  
  l2c3=createSprite(2037,250,100,50);
  l2c3.visible=false;
  l2c3.shapeColor="red";
  
  
  l2c7=createSprite(10466,300,300,100);
  l2c7.visible=false;
  l2c7.shapeColor="red"
  
  l2c8=createSprite(17626,250,100,100);
  l2c8.visible=false;
  l2c8.shapeColor="red"
  
  l2c4=createSprite(7517,500,300,100);
  l2c4.visible=false;
  l2c4.shapeColor="red"
  
 l2c5=createSprite(8750,200,50,50);
  l2c5.visible=false;
  l2c5.shapeColor="red"
  
  l2c6=createSprite(9412,500,400,100);
  l2c6.visible=false;
  l2c6.shapeColor="red";
  
  l2ground7=createSprite(8800,260,500,50);
  l2ground7.visible=false;
  
  l2b9=createSprite(8750,230,70,70);
  l2b9.visible=false;
  
  l2b10=createSprite(9030,300,50,450);
  l2b10.visible=false;
  
  l2b11=createSprite(9260,500,700,50);
  l2b11.visible=false;
  
  l2b12=createSprite(9600,300,300,100);
  l2b12.visible=false;
  
  l2b13=createSprite(10400,300,500,80);
  l2b13.visible=false;
  
  l2b14=createSprite(10550,400,80,200);
  l2b14.visible=false;
  
  l2b15=createSprite(11000,500,1500,80);
  l2b15.visible=false;
  
  l2b16=createSprite(11000,10,1200,60);
  l2b16.visible=false;
  
  l2b17=createSprite(11150,100,150,500);
  l2b17.visible=false;
  
  l2b18=createSprite(11750,300,150,100);
  l2b18.visible=false;
  
  l2b19=createSprite(12200,200,100,50);
  l2b19.visible=false;
  
  l2b20=createSprite(12370,330,390,50);
  l2b20.visible=false;
  l2b20.rotation=40;
  
  l2b21=createSprite(12630,500,800,80);
  l2b21.visible=false;
  
  l2b22=createSprite(12950,400,200,400);
  l2b22.visible=false;
  
  l2b23=createSprite(13500,400,100,50);
  l2b23.visible=false;
  
  l2b24=createSprite(13600,200,100,50);
  l2b24.visible=false;
  
  l2b25=createSprite(14000,300,800,100);
  l2b25.visible=false;
  
  l2b26=createSprite(14800,500,200,300);
  l2b26.visible=false;
  
  l2b27=createSprite(15400,500,200,300);
  l2b27.visible=false;
  
  l2b28=createSprite(16000,550,200,300);
  l2b28.visible=false;
  
  l2b29=createSprite(16000,50,200,500);
  l2b29.visible=false;
  
  l2b30=createSprite(16400,300,50,50);
  l2b30.visible=false;
  
  l2b31=createSprite(16600,300,50,50);
  l2b31.visible=false;
  
  l2b32=createSprite(16800,300,50,50);
  l2b32.visible=false;
  
  l2b33=createSprite(17500,500,100,400);
  l2b33.visible=false;
  
  l2b34=createSprite(17650,300,400,100);
  l2b34.visible=false;
  
  
  l2b35=createSprite(18400,100,900,100);

  
  l2b36=createSprite(18400,500,900,100);
  
  l2b37=createSprite(20300,300,1000,100);
  
  deathpart=createSprite(20500,300,10,10)
  deathpart.visible=false;
  
  button2=createSprite(20400,240,30,10);
  button2.visible=false;
  button2.shapeColor="green"
  
  heart=createSprite(5805,500,30,30);
  heart.visible=false;
  heart.shapeColor="pink"
  
  l=createSprite(0,50);
  l.addImage(lifeimage)
  l.visible=false;
  l.scale=0.3
  
  
  fnext=createSprite(550,600,100,100);
  fnext.shapeColor="lime";
  fnext.visible=false;

  
     fch=createSprite(100,400);
  fch.visible=false;
  fch.shapeColor="orange";
  
  fhome=createSprite(400,400);
  fhome.visible=false;
  fhome.shapeColor="red"
  
  rggroup=new Group();
  rbullet=new Group();
  rg1group=new Group();
  wgroup=new Group();
  group=new Group();
}

function draw() {
background("black");

  

  
  
  //level2

  
  
  if(gameState==="start"){
    final.stop();
    camera.x=300;
    camera.y=300;
        starwars.visible=true;
 
    b.visible=true;
    start.visible=true;
    next.visible=false;
    home.visible=false;
    restart.visible=false;

    if(mousePressedOver(start)&&gameState==="start"){
      gameState="play";
}
    
  }
  
  
  
  if(gameState==="play"){
    starwars.visible=false;

    b.visible=false;
    start.visible=false;
    next.visible=true;
    textSize(50);
    fill("red");
    textFont("horror")
    text("THE WAR",200,50);
    textSize(22);
    text("All birds are being killed for almost 5,000 years By a Empire.",30,80);
    text("called Galactic army.Pigs have ruled the whole star wars galaxy",30,110);
    text("for almost 1,000 years.",30,140)
    text("But the birds have made an allince to stop that empire",30,170);
        textSize(50);
    fill("red");
    textFont("horror")
    text("Story",250,230);
        textSize(22);
    text("Death star is an artifical pig planet.",30,250);
    text("But the main probelm is death star is destroying the birds planet.",30,280);
    text("To stop that. Birds need to defeat darth vader.",30,300);
    if(mousePressedOver(next)&&gameState==="play"){
      gameState="ch"
}
  }
  
  
  if(gameState==="ch"){
    final.stop();
next.visible=false;
chuck2.visible=true;
    red2.visible=true;
    gate.x=12400;
    gate.y=200;
    if(mousePressedOver(red2)&&gameState==="ch"){
gameState="play2"
    }
    if(mousePressedOver(red2)){
s.play();
    }

    if(mousePressedOver(chuck2)){
s.play();
    }
  }
  
  
  
  if(gameState==="play2"){
    red.visible=true;
      red.collide(rground);
    button2.visible-=true;
    spin.visible=true;
    red.collide(rb11)
    l2c8.visible=false;
    l2b14.visible=false;
    l2c6.visible=false;
    rground8.visible=true;
    l2c5.visible=false;
  red.collide(rb1);
    l2c7.visible=false;
    l1.visible=false;
  red.collide(rb2);
    l2c6.visible=false;
    l2c4.visible=false;
    l2b11.visible=false;
  red.collide(rb4);
    l2c3.visible=false;
    heart.visible=false;
    slid.visible=false;
red.collide(rb5);
    l2c2.visible=false;
  red.collide(rb6);
  red.collide(rb7);

  red.collide(rground4);
  red.collide(rground3);
  red.collide(rground2);
  red.collide(rground5);
  red.collide(rground8);
  red.collide(rground9);
  red.collide(rb8);
  red.collide(rb10);
  red.collide(rground6);
  spin.collide(rground4);
  spin2.collide(rground7);
  red.collide(rground7);
  red.collide(rb9);
    red.collide(l2b11)
  red.collide(rb12);
  red.collide(gate);
  red.collide(trophy);
    if(red.isTouching(button2)){
      gameState="win2";
      
    }
    deadline.visible=true;
    lifemeter.addImage(lifeimage)
    camera.x=red.x
    gun.x=red.x-12;

    gun.y=red.y+5
    restart.visible=false;
    l2b11.visible=true;
    home.visible=false;
        rb1.visible=true;
    if(frameCount%10===0){
 rb();
      bob2();
      bob4();
      bob3();
    }
   if(red.collide(button)){
     gate.velocityY=-1;
     
   }
    if(red.collide(trophy)&&gameState==="play2"){
      gameState="win"
      final.play();
    }
    
        if(frameCount%30===0){
umwall();
          umwall2();
    }
    
    
    if(keyDown("up")){
saber();
      red.x=red.x+15
    }
    spin.velocityY=spin.velocityY+22
    spin2.velocityY=spin2.velocityY+22
    red.velocityY=red.velocityY+2
  if(keyWentDown("space")&&red.y>200){
red.velocityY=-35
  }
    
   if( rggroup.isTouching(rground2)){
     rggroup.destroyEach();
}
    
       if( rg1group.isTouching(rground6)){
     rg1group.destroyEach();
}

    
    if(keyWentDown("enter")){
      gun.visible=true;
redgun();
    }
    if(keyWentUp("enter")){
gun.visible=false;
      br=br-30;
    }
    if(br===0){
rbullet.destroyEach();
    }
    chuck2.visible=false;
    lifemeter.x=red.x-170
rground.visible=true;
    spin2.visible=true;
    yr2.visible=true;
    rground6.visible=true;
  red2.visible=false;
       rb2.visible=true;
    rg2.visible=true;
      redlazer1.visible=true;
  red.visible=true;
    rc1.visible=true;
    rc2.visible=true;
    rc3.visible=true;
    rc4.visible=true;
    rb4.visible=true;
    rb5.visible=true;
    rb6.visible=true;
    rg.visible=true;
    rg3.visible=true;
    rg4.visible=true;
    rb8.visible=true;
    redlazer2.visible=true;
    rb7.visible=true;
    spin.visible=true;
    yr.visible=true;
    rground4.visible=true;
    rground5.visible=true;
    lifemeter.visible=true;
  rground2.visible=true;
    rground7.visible=true;
rb5.visible=true;
    red.collide(wgroup);
    rground3.visible=true;
    
    if(keyDown("right")){
      red.x=red.x+9
      red.addImage(redimage);
    }
    
    
    if(keyDown("left")){
red.x=red.x-9
      red.addImage(redbackimage)
    }
    if(red.isTouching(yr)){
spin.velocityX=19;
}
        if(red.isTouching(yr2)){
      spin2.velocityX=-10
    }
    
red.velocityY=red.velocityY+0.8
    stroke("white");
  strokeWeight(12);
  fill("red");
    textFont("Impact");
    textSize(40)
  text("Press left and right to move. ",200,300);
    text("Press space to jump.",1000,100);
    if(spin.collide(deadline)){
spin.x=4000
  spin.y=450
      spin.velocityX=0;
    }
    if(spin2.collide(deadline)){
  spin2.x=9000;
spin2.y=400
      spin2.velocityX=0;
    }
  
  
  
  if(red.isTouching(redlazer1)||red.isTouching(redlazer2)||red.isTouching(rc1)||red.isTouching(rc2)||red.isTouching(rggroup)||red.isTouching(rg1group)||red.isTouching(rc4)||red.isTouching(rc3)&&gameState==="play2"){
life=life-10
    red.x=red.x-40
  }
  if(red.isTouching(spin)||red.isTouching(spin2)){
     life=life-50
    red.x=red.x+10
     
     }
  
  if(red.isTouching(deadline)&&gameState==="play2"){
    
   gameState="end"
  }
  
  if(life<=75){
lifemeter.addImage(medium)
  }
  if(life<=50){
    lifemeter.addImage(half)
  }
  if(life<=25){
lifemeter.addImage(low);
  }
  if(life<=10){
lifemeter.addImage(verylow);
     }
  if(life<=0){
gameState="end"
  }
  
  }
  
  if(gameState==="win"){
    s.stop();
l2c2.visible=false;
    home.visible=true;
    spin.velocityY=0;
    spin2.velocityY=0;
    l2c8.visible=false;
    l2c6.visible=false;
    l1.visible=false;
    l2c6.visible=false;
    l2.visible=false;
    l3.visible=false;
    l2c7.visible=false;
    l4.visible=false;
    l2c4.visible=false;
    l2c3.visible=false;
red.visible=false;
    chuck.visible=false;
    rb1.visible=false;
    redlazer1.visible=false;
    rground.visible=false;
    next2.visible=true;
 camera.x=340
   restart.visible=true;
    red.x=300;
    red.y=300;
chuck.x=300;
    chuck.y=300
    k();
    textSize(140);
    textFont("Impact");
    fill("cyan")
    text("YOU WIN",100,300);
    gate.x=12400;
    gate.y=200;
    if(mousePressedOver(restart)&&gameState==="win"){
gameState="ch"
      li=100

    }
      if(mousePressedOver(home)&&gameState==="win"){
gameState="start"
      life=100
    }
    if(mousePressedOver(next2)){
gameState="level2"
      life=100;
         lifemeter.visible=true;
      em.play();
    }
    
        if(keyWentDown("enter")){
      gun.visible=true;
redgun();
    }
    if(keyWentUp("enter")){
gun.visible=false;
      br=br-30;
    }
    
    
  }
  
 if(gameState==="level2"){
   final.stop();
   if(frameCount%40===0){
   umwall3();
     umwall4();
     umwall5();
     umwall6();
   }
red.collide(wgroup);
   l1.visible=true;
   l2c4.visible=true;
   button2.visible=true;
   if(red.isTouching(button2)&&gameState==="level2"){
     gameState="win2"
   }
   l2.visible=true;
   l3.visible=true;
   l4.visible=true;
   l2c6.visible=true;
   l2c7.visible=true;
   lifemeter.visible=true;
      l2b35.visible=true;
   l2c3.visible=true;
   l4.visible=true;
   l2b36.visible=true;
       l.x=red.x-170
   l2c2.visible=true;
   l.visible=true;
   rground9.visible=false;
    lifemeter.addImage(lifeimage)
   rb9.visible=false;
   rb10.visible=false;
   l2b25.visible=false;
   l2b37.visible=true;
   red.collide(l2b37)
   red.collide(l2b29);
   red.collide(l2b30);
   
   red.collide(l2b36)
   if(group.isTouching(l2ground2)){
     group.destroyEach();
   }
   red.collide(l2b31);
   red.collide(l2b32);
   red.collide(l2b37);
   red.collide(l2b33)
   l2b29.visible=true;
   l2b30.visible=true;
   l2b31.visible=true;
   red.visible=true;
   l2c5.visible=true;
   l2b32.visible=true;
   l2b33.visible=true;
   red.collide(l2b25);
   rb11.visible=false;
   l2b21.visible=true;
   red.collide(l2b21);
   if(red.isTouching(heart)){
     red.li=100
     heart.x=-200
   }
   l2c8.visible=true;
   rb12.visible=false;
   l2b18.visible=true;
   red.collide(l2b14);
   red.collide(l2b18);
   l2b14.visible=true;
     red.collide(l2b1);
   red.collide(l2ground7);
   heart.visible=true;
   l2ground7.visible=true;
  red.collide(l2b2);
   red.collide(l2b3);
   red.collide(l2b6);
   red.collide(l2ground5)
   red.collide(l2ground2);
   red.collide(l2b12)
   l2b33.visible=false;
   l2b35.visible=true;
   l2b36.visible=true;
red.visible=true;
   l2b22.visible=true;
   red.collide(l2b22)
   l2ground6.visible=true;
   slid.visible=true;
       lifemeter.visible=true;
   red.collide(l2b7);
   red.collide(slid);
   red.collide(l2ground6);
   red.collide(l2b8);
   red.collide(l2b23);
   l2b27.visible=true;
   l2b33.visible=true
   red.collide(l2b27);
   l2b23.visible=true;
   red.collide(l2b10);
   red.collide(l2b9);
   red.collide(l2b17);
   l2b17.visible=true;
   red.collide(l2b11);
   red.collide(l2b13);
   l2b16.visible=false;
   red.collide(l2b16)
   l2b10.visible=true;
   l2b8.visible=true;
   l2b34.visible=true;
   red.collide(l2b34)
   l2b12.visible=true;
   l2b13.visible=true;
   l2b20.visible=true;
   l2b24.visible=true;
   red.collide(l2b15)
   red.collide(l2b24)
   red.collide(l2b35);
   red.collide(l2b26);
   red.collide(l2b20);
   l2b9.visible=true;
   l2ground6.visible=true;
   red.collide(l2ground3);
red.collide(l2b4);
   red.collide(l2b5);
   red.collide(l2b26);
   l2b26.visible=true;
   red.collide(l2ground4);
   red.collide(l2ground);
   l2b23.visible=true;
   red.collide(l2b23)
   l2c6.visible=true;
   red.collide(l2b23);
   l2ground3.visible=true;
   l2ground.visible=true;
   l2ground2.visible=true;
   l2ground4.visible=true;
   l2b29.visible=true;
   deadline.visible=true;
   button.visible=false;
   l2b25.visible=true;
   red.collide(l2b25)
   trophy.visible=false;
   l2b4.visible=true;
   l2b1.visible=true;
   l2b2.visible=true;
   l2b3.visible=true;
   l2b6.visible=true;
   l2b15.visible=true;
   l2b16.visible=true;
   l2ground5.visible=true;
   yr.visible=false;
   yr2.visible=false;
   spin.visible=false;
   spin2.visible=false;
   l2b19.visible=true;
   red.collide(l2b19);
   rground8.visible=false;
   next2.visible=false;
    deadline.visible=true;
     l2c1.visible=true;
    chuck2.visible=false;
    lifemeter.x=red.x-170
rground.visible=false
    rground6.visible=false;
  red2.visible=false;
       rb2.visible=false;
   l2b5.visible=true;
   l2b7.visible=true;
    rg2.visible=false;
      redlazer1.visible=false;
    rc1.visible=false;
    rc2.visible=false;
    rc3.visible=false;
    rc4.visible=false;
    rb4.visible=false;
    rb5.visible=false;
    rb6.visible=false;
    rg.visible=false;
    rg3.visible=false;
    rg4.visible=false;
    rb8.visible=false;
    redlazer2.visible=false;
   k()
   l2b28.visible=true;
   red.collide(l2b28);
   l2b2.visible=true;
   red.collide(l2b29);
    rb7.visible=false;
    spin.visible=false;
    yr.visible=false;
    rground4.visible=false;
    rground5.visible=false;

    lifemeter.visible=false;
  rground2.visible=false;
    rground7.visible=false;
rb5.visible=false;

    rground3.visible=false;
    lifemeter.addImage(lifeimage)
    camera.x=red.x
    gun.x=red.x-12;
    restart.visible=false;
    home.visible=false;
    gun.y=red.y+5
      red.velocityY=red.velocityY+2
  if(keyWentDown("space")&&red.y>200){
red.velocityY=-35
  }
   
   if(red.isTouching(l2c1)||red.isTouching(l2c2)||red.isTouching(l2c3)||red.isTouching(l2c4)||red.isTouching(l2c5)||red.isTouching(l2c6)||red.isTouching(l2c7)||red.isTouching(l2c8)){
li=li-10;
     red.x=red.x-50;
   }
   
   
        if(keyDown("up")){
saber();
      red.x=red.x+15
    }
    
        if(keyDown("right")){
      red.x=red.x+10
      red.addImage(redimage);
    }
   if(red.isTouching(o)){
     slid.velocityX=12
     red.velocityX=0;
   }
   if(red.isTouching(slid)){
     red.velocityX=-2
   }
    
    
    if(keyDown("left")){
red.x=red.x-10
      red.addImage(redbackimage)
    }
    red.velocityY=red.velocityY+0.8
      if(red.isTouching(deadline)&&gameState==="level2"){
    
   gameState="end"
        camera.x=370
  }
     if(li<=75){
l.addImage(medium)
  }
  if(li<=50){
    l.addImage(half)
  }
  if(li<=25){
l.addImage(low);
  }
  if(li<=10){
l.addImage(verylow);
     }
  if(li<=0){
gameState="end"
  }
   
   
   
   
  
 }
  

  
  if(gameState==="end"){
em.stop();
    spin.velocityY=0;
    spin2.velocityY=0;
    final.stop();
   l2ground3.visible=false;
    l2b12.visible=false;
    l2c8.visible=false;
      spin2.x=9000;
spin2.y=400
    l2b28.visible=false;
    l2c4.visible=false;
    l2b16.visible=false;
    spin.x=4000
  spin.y=450
    l2c7.visible=false;
    l2c5.visible=false;
    l1.visible=false
    l2.visible=false;
    l3.visible=false;
    l4.visible=false;
    l.visible=false;
       l2b29.visible=false;
   l2b30.visible=false;
   l2b31.visible=false;
    l2b33.visible=false;
   l2b32.visible=false;
    l2b10.visible=false;
    l2b21.visible=false;
    l2b14.visiible=false;
    l2b25.visible=false;
    l2b26.visible=false;
    l2b17.visible=false;
    l2b22.visible=false;
    l2b18.visible=false;
    l2b27.visible=false;
    l2b15.visible=false;
    l2b23.visible=false;
    l2b20.visible=false;
    l2b13.visible=false;
    l2b11.visible=false;
    l2b9.visible=false;
    l2ground6.visible=false;
    l2ground7.visible=false;
   l2ground.visible=false;
    l2c1.visible=false;
   l2ground2.visible=false;
   l2ground4.visible=false;
   deadline.visible=false;
   l2b4.visible=false;
   l2b1.visible=false;
   l2b2.visible=false;
    l2b29.visible=false;
   l2b3.visible=false;
    l2b5.visible=false;
   l2b6.visible=false;
    l2b8.visible=false;
    l2b23.visible=false;
    l2b7.visible=false;
    s.stop();
    home.visible=true;
    red.velocityY=0;
    red.velocityX=0;
red.visible=false;
    chuck.visible=false;
    rb1.visible=false;
    redlazer1.visible=false;
    rground.visible=false;
 camera.x=340
   restart.visible=true;
    textSize(140);
    textFont("Impact");
    fill("red")
    text("YOU LOSE",100,300);
    if(mousePressedOver(restart)&&gameState==="end"){
gameState="ch"
      life=100
          red.x=50;
    red.y=300;

    }
      if(mousePressedOver(home)&&gameState==="end"){
gameState="start"
      life=100
            red.x=50;
    red.y=300;
    }
  }
  if(gameState==="win2"){
    camera.x=300;
     spin.velocityY=0;
    spin2.velocityY=0;
    camera.y=300;
    red.x=300;
    red.y=300;
    red.velocityY=0;
    final.stop();
      spin2.x=9000;
spin2.y=400
    fill("cyan");
    spin.x=4000
  spin.y=450
    textFont("Impact");
    textSize(50);
    text("YOU WIN",50,100);
l2b1.visible=false;
 l2b2.visible=false;
 l2b3.visible=false;
 l2b4.visible=false;
 heart.visible=false;
 l2b5.visible=false;
 l2b6.visible=false;
 l2b7.visible=false;
 l2b8.visible=false;
 l2b9.visible=false;
 l2b10.visible=false;
 l2b11.visible=false;
 l2b12.visible=false;
l2b13.visible=false;
 l2b14.visible=false;
 l2b15.visible=false;
 l2b16.visible=false;
 l2b17.visible=false;
 l2b18.visible=false;
 l2b19.visible=false;
 l2b20.visible=false;
 l2b21.visible=false;
 l2b22.visible=false;
 l2b23.visible=false;
 l2b24.visible=false;
 l2b25.visible=false;
 l2b26.visible=false;
 l2b27.visible=false;
 l2b28.visible=false;
 l2b29.visible=false;
 l2b30.visble=false;
 l2b31.visible=false;
 l2b32.visible=false;
 l2b33.visible=false;
 l2b34.visible=false;
 l2b35.visible=false;
 l2b36.visible=false;
 l2b37.visible=false;

 l1.visible=false;
 l2.visible=false;
    fch.visible=true;
    fhome.visible=true;
 l3.visible=false;
 l4.visible=false;
 l2ground.visible=false;
 l2ground2.visible=false;
 l2ground3.visible=false;
 l2ground4.visible=false;
 l2ground5.visible=false;
 l2ground7.visible=false;
    fnext.visible=true;
    fhome.visible=true;
    fch.visible=true;
 l2c4.visible=false;
 l2c5.visible=false;
 l2c6.visible=false;
 l2c7.visible=false;
 slid.visible=false;

 button2.visible=false;
    
    if(mousePressedOver(fnext)&&gameState==="win2"){
gameState="blast"
    }
    if(mousePressedOver(fhome)&&gameState==="win2"){
gameState="start";
    }
    if(mousePressedOver(fch)&&gameState==="win2"){
gameState="ch";
    }
    
    
  }
  console.log(red.x);
  

  
  
  
  
  

  drawSprites();
}
function saber(){
  var lightsaber=createSprite(red.x+45,red.y+10,100,3);
  lightsaber.life=1;
  lightsaber.shapeColor="cyan";
}

function rb (){

var b=createSprite(0,0,10,10);
    b.x=rg.x;
    b.y=rg.y;
    b.shapeColor="red";
  b.velocityY=10;
rggroup.add(b)  

}

function bob2(){
  var b=createSprite(0,0,10,10);
    b.x=rg2.x;
    b.y=rg2.y;
    b.shapeColor="red";
  b.velocityY=10;
rg1group.add(b)  
  
}

function bob3(){
  var b=createSprite(0,0,10,10);
    b.x=rg3.x;
    b.y=rg3.y;
    b.shapeColor="red";
  b.velocityY=10;
rg1group.add(b)  
  
}

function bob4(){
  var b=createSprite(0,0,10,10);
    b.x=rg4.x;
    b.y=rg4.y;
    b.shapeColor="red";
  b.velocityY=10;
rg1group.add(b)  
  
}

function redgun(){
var bullet=createSprite(0,0,10,2);
  bullet.x=red.x;
  bullet.y=red.y+10
  bullet.shapeColor="red";
  bullet.velocityX=22;
  redgun.life=19
rbullet.add(bullet);
}

function umwall(){
var w=createSprite(9600,600,200,10);
  w.velocityY=-8;
  w.shapeColor="brown";
  wgroup.add(w);
}
function umwall2(){
var w=createSprite(10800,600,200,10);
  w.velocityY=-8;
  w.shapeColor="brown";
  wgroup.add(w);
}
function umwall3(){
var w=createSprite(4400,600,200,10);
  w.velocityY=-8;
  w.shapeColor="brown";
  wgroup.add(w);
}

function umwall4(){
var w=createSprite(4800,0,200,10);
  w.velocityY=8;
  w.shapeColor="brown";
  wgroup.add(w);
}

function umwall5(){
var w=createSprite(5100,600,200,10);
  w.velocityY=-8;
  w.shapeColor="brown";
  wgroup.add(w);
}
function umwall6(){
var w=createSprite(5400,0,200,10);
  w.velocityY=8;
  w.shapeColor="brown";
  wgroup.add(w);
}
function k(){
  var b=createSprite(2535,80,10,10);
      b.x=l1.x;
    b.y=l1.y;
    b.shapeColor="red";
  b.velocityY=10;
group.add(b)  ;
    var b2=createSprite(0,0,10,10);
        b2.x=l2.x;
    b2.y=l2.y;
    b2.shapeColor="red";
  b2.velocityY=10;
group.add(b2)  ;
    var b3=createSprite(0,0,10,10);
        b3.x=l3.x;
    b3.y=l3.y;
    b3.shapeColor="red";
  b3.velocityY=10;
group.add(b3)  ;
    var b4=createSprite(0,0,10,10);
        b4.x=l4.x;
    b4.y=l4.y;
    b4.shapeColor="red";
  b4.velocityY=10;
group.add(b4)  ;

}