var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var wall1 = createSprite(200, 100,400,10);

var wall2 = createSprite(200, 300,400,10);





var endwall = createSprite(400,200,100,190);
endwall.shapeColor = "yellow";
var startwall = createSprite(50, 200,100,190);
var player = createSprite(30, 200,20,20);
player.shapeColor = "black";
var ball1 = createSprite(120, 120,15,15);
ball1.shapeColor = "red";
var ball2 = createSprite(170, 280,15,15);
ball2.shapeColor = "red";
var ball3 = createSprite(230, 120,15,15);
ball3.shapeColor = "red";
var ball4 = createSprite(280, 280,15,15);
ball4.shapeColor = "red";
startwall.shapeColor =rgb(177, 180, 181);


var down = createGroup();
down.add(ball1);
down.add(ball3);


var up = createGroup();
up.add(ball2);
up.add(ball4);

var Lives = 3;

var gameState = "start";
var edges

function draw() {
  background("white");
drawSprites();
textSize(30);
text("Lives:"+Lives, 250, 70);



edges = createEdgeSprites();


player.collide(edges);




if (gameState==="start") {
textSize(20);
    
text("Welcome To The Worlds Hardest Game!", 0, 15);

text("Press Space to Start!",0,40);
up.setVelocityEach(0,0);
down.setVelocityEach(0,0);
   
}
if (keyDown("space")&&gameState==="start") {
  gameState = "play";
  down.setVelocityEach(0, 12);  
up.setVelocityEach(0, -12);
}

if (gameState==="play") {

 down.bounceOff(wall1);
down.bounceOff(wall2);
  up.bounceOff(wall1);
up.bounceOff(wall2); 
  if (keyDown("RIGHT")) {
  player.x+=3;
}

if (keyDown("LEFT")) {
  player.x-=3;
}
if (player.isTouching(up)) {
 player.x= 30 ;
 player.y= 200 ;
 Lives-= 1;
}

if (player.isTouching(down)) {
 player.x= 30 ;
 player.y= 200;
 Lives-= 1;
}
if (Lives===0) {


gameState="end";
}if (player.isTouching(endwall)) {
fill("Red");
text("YOU WON?", 150, 350);
}
}



if (gameState==="end") {
  up.setVelocityEach(0,0);
down.setVelocityEach(0,0);
textSize(20); 
fill("red");
text("YOU LOST,BETTER LUCK NEXT TIME", 30, 200);
textSize(17);
text("Click R to restart ", 250, 250);

}
if (keyDown("r")&&gameState==="end") {
  gameState = "start";
  Lives=3;
}

}




// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
