var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var obstacleTop, obsTop1, obsTop2
var obstacleBottom, obsBottom1, obsBottom2, obsBottom3
var ogro
var ground
var gameState = PLAY;
var score=0;
var bosque,bosqueImg

function preload(){
bgImg = loadImage("bosque.jpg")


balloonImg = loadImage("gato.png")

obsTop1 = loadImage("bruja.png")
obsTop2 = loadImage("ogro.png")
obsTop3 = loadImage("ciclope.png")

obsBottom1 = loadImage("assets/obsBottom1.png")
obsBottom2 = loadImage("assets/obsBottom2.png")
obsBottom3 = loadImage("assets/obsBottom3.png")

}

function setup(){

  createCanvas(500,500)
//imagen de fondo
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = .5


//creando los terrenos superior e inferior
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creando el globo 
balloon = createSprite(100,200,20,50);
balloon.addImage(balloonImg);
balloon.scale = 0.2;

bosque = createSprite(200,180,400,20);
  bosque.addImage("bosque"bosqueImg);
  bosque.x = ground.width /2;
  bosque.velocityX = -(6 + 3*score/100);
  



}

function draw() 
  
  background(bgImg);
        
          //haciendo que el globo aerostático brinque
          if(keyDown("space")) {
            balloon.velocityY = -6 ;
            
          }
          if (gameState===PLAY){
            score = score + Math.round(getFrameRate()/60);
            ground.velocityX = -(6 + 3*score/100);

            if (ground.x < 0){
                ground.x = ground.width/2;
              }
            

          //agregando la gravedad
           balloon.velocityY = balloon.velocityY + 2;

           
          Bar();
   
        drawSprites();
       
        //generando los obstáculos superiores
      spawnObstaclesTop();

      spawnOgro();

      
}


function spawnObstaclesTop() 
{
      if(World.frameCount % 60 === 0) {
        obstacleTop = createSprite(400,50,40,50);
    
    //obstacleTop.addImage(obsTop1);
    
    obstacleTop.scale = 0.1;
    obstacleTop.velocityX = -4;

    //posiciones "y" aleatorias para los obstáculos superiores
    obstacleTop.y = Math.round(random(50,100));

    //generar obstáculos superiores de forma aleatoria 
    var rand = Math.round(random(1,2));
    

     //asignando lifetime (tiempo de vida) a la variable
   obstacleTop.lifetime = 100;
    obstacleTop.scale = 0.1;
    obstacleTop.addImage(obsTop1)
   balloon.depth = balloon.depth + 1;
   
      }
}
function spawnOgro() {
    //escribir aquí el código para aparecer las nubes
    if (frameCount % 60 === 0) {
      var ogro = createSprite(600,350,40,10);
      ogro.y = Math.round(random(350,450));
      ogro.addImage(obsTop2);
      ogro.scale = 0.5;
      ogro.velocityX = -3;
      
       //asignar ciclo de vida a la variable
       ogro.lifetime = 100;
    }
    
  }

 function Bar() 
 {
         if(World.frameCount % 60 === 0)
         {
           var bar = createSprite(400,200,10,800);
          bar.velocityX = -6
          bar.depth = balloon.depth;
          bar.lifetime = 70;
          bar.visible = false;
         }
}
