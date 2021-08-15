  var track,trackImg;
  var boy,boyImg;
  var boundary1,boundary2;

  function preload(){
    //pre-load images
    trackImg = loadImage("path.png")
    boyImg = loadAnimation("Runner-1.png","Runner-2.png")
  }

  function setup(){
    createCanvas(400,400);
    //create sprites here
    track = createSprite(200,200);
    track.addImage(trackImg);
    track.velocityY = 4;
    boy = createSprite(150,300);
    boy.addAnimation("Running",boyImg);
    boy.scale = 0.1;
    boundary1 = createSprite(0,0,30,400);
    boundary2 = createSprite(400,0,30,400);
    boundary1.visible = false;
    boundary2.visible = false;
  }

  function draw() {
    background(0);
  if(track.y>400){
  track.y = height/2;
  }
  boy.x = World.mouseX;
  boy.collide(boundary2);
  boy.collide(boundary1);
  drawSprites();
  }
