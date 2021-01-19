var sword
var sword1
var background2
var backgroud1
var fruit1
var fruit2
var fruit3
var fruit4
var alien1
var alien2
var over
var s,fr1,fr2,fr3,fr4,ob
var PLAY=1
var END=0
var gamestate=PLAY
var sound    


function preload()
{
    sword=loadAnimation("sword.png")
    background2=loadImage("background(fruit ninja).png")
    fruit1=loadImage("fruit1.png")
    fruit2=loadImage("fruit2.png")
    fruit3=loadImage("fruit3.png")
    fruit4=loadImage("fruit4.png")
    alien1=loadImage("alien1.png")
    alien2=loadImage("alien2.png")
    over=loadImage("gameover.png")
    
}

function setup()
{  
   createCanvas(500,500) 
  
   backgroud1=createSprite(250,250,10,10)
   backgroud1.addImage(background2)
   backgroud1.scale=2.5
  
   s=new Group();
   fr1=new Group();
   fr2=new Group();
   fr3=new Group();
   fr4=new Group();
   ob=new Group();  

   sword1=createSprite(250,250,10,10)
   sword1.addAnimation("running",sword)
   sword1.scale=0.7
   sword1.setCollider("rectangle",0,0,100,110)
   s.add(sword1)
  
   ovr=createSprite(250,250,10,10)
   ovr.addImage(over)
   
  
   score=0
}

function draw()
{
   background(0)
   drawSprites()
if(gamestate===PLAY)
     {
       sword1.x=World.mouseX
     sword1.y=World.mouseY
     
   if(frameCount%60===0)
   {
       var rand=Math.round(random(1,4))
       switch(rand){
          case 1: f1();
                  break;

          case 2: f2();
                  break;

          case 3: f3();
                  break;

          case 4: f4();
                  break;
                  
          default: break;
      }

   }
  
  if(frameCount%200===0)
  {
       var rando=Math.round(random(1,2))
       switch(rando){
          case 1: obstacle1();
                  break;

          case 2: obstacle2();
                  break;  
          
          default: break;
       }
  }     
   
  if(s.isTouching(fr1)){
    fr1.destroyEach();
    score=score+10
    
  }
  
  if(s.isTouching(fr2)){
    fr2.destroyEach();
    score=score+20
  }  

  if(s.isTouching(fr3)){
    fr3.destroyEach();
    score=score+30
  }

  if(s.isTouching(fr4)){
    fr4.destroyEach();
    score=score+40
  } 
  
  if(s.isTouching(ob)){
    gamestate=END
  }
       ovr.visible=false
     }
  else if(gamestate===END){
   sword1.x=390
   sword1.y=250
   sword1.velocityX=0
   sword1.velocityY=0
   ob.destroyEach()
   fr1.destroyEach() 
   fr2.destroyEach() 
   fr3.destroyEach() 
   fr4.destroyEach()  
   score=0 
   ovr.visible=true
       textFont("calibri")
   textSize(28)
  stroke("white")
   text("Press R to Restart",160,300) 
  }
  
  
   textSize(28)
  stroke("white")
   text("Score="+score,250,50) 
  
  if(keyDown("r")&&gamestate===END){
    gamestate=PLAY
  }
}

function f1()
{
   fruit11=createSprite(500,Math.round(random(50,450)),10,10)
   fruit11.addImage(fruit1)
   fruit11.scale=0.2 
   fruit11.velocityX=-3
   fruit11.lifetime=167
   fr1.add(fruit11)
}

function f2()
{
   fruit22=createSprite(500,Math.round(random(50,450)),10,10)
   fruit22.addImage(fruit2)
   fruit22.scale=0.2 
   fruit22.velocityX=-3
   fruit22.lifetime=167 
   fr2.add(fruit22)
}

function f3()
{
   fruit33=createSprite(500,Math.round(random(50,450)),10,10)
   fruit33.addImage(fruit3)
   fruit33.scale=0.2 
   fruit33.velocityX=-3
   fruit33.lifetime=167 
   fr3.add(fruit33)
}

function f4()
{
   fruit44=createSprite(500,Math.round(random(50,450)),10,10)
   fruit44.addImage(fruit4)
   fruit44.scale=0.2 
   fruit44.velocityX=-3 
   fruit44.lifetime=167
   fr4.add(fruit44)
}

function obstacle1()
{
   obstacle11=createSprite(500,Math.round(random(50,450)),10,10)
   obstacle11.addImage(alien1)
   obstacle11.scale=1 
   obstacle11.velocityX=-3 
   obstacle11.setCollider("circle",0,0,20)
   obstacle11.lifetime=167
   ob.add(obstacle11)
}

function obstacle2()
{
   obstacle22=createSprite(500,Math.round(random(50,450)),10,10)
   obstacle22.addImage(alien2)
   obstacle22.scale=1 
   obstacle22.velocityX=-3
   obstacle22.setCollider("circle",0,0,20)
   obstacle22.lifetime=167
   ob.add(obstacle22)
}