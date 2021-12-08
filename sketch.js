var Engine = Matter.Engine,
World = Matter.World,
Events = Matter.Events,
Bodies = Matter.Bodies;

var divisions = [];
var particles = [];
var plinkos = [];

var divisionHeight = 300;
var score = 0;
var turn = 0;
var particle;
var play = 1;
var end = 0;
var gameState = play;

function setup() {
createCanvas(800, 800);
engine = Engine.create();
world = engine.world;
ground = new Ground(width / 2, height, width, 20);

console.log(turn);


for (var k = 0; k <= width; k = k + 80) {
divisions.push(new Divisions(k, height - divisionHeight / 2, 10, divisionHeight));
}

for (var j = 25; j <= width; j = j + 50) {
plinkos.push(new Plinko(j, 75));
}

for (var j = 50; j <= width - 10; j = j + 50) {
plinkos.push(new Plinko(j, 175));
}

for (var j = 25; j <= width; j = j + 50) {
plinkos.push(new Plinko(j, 275));
}
for (var j = 50; j <= width - 10; j = j + 50) {
plinkos.push(new Plinko(j, 375));
}
}



function draw() {
background("black");
textSize(20);
text("Score : " + score, 20, 30);

textSize(25)
text(" 500 ", 10, 550);
text(" 500 ", 90, 550);
text(" 200 ", 170, 550);
text(" 200 ", 250, 550);
text(" 1000 ", 325, 550);
text(" 1000 ", 405, 550);
text(" 200 ", 490, 550);
text(" 200 ", 570, 550);
text(" 500 ", 650, 550);
text(" 500 ", 730, 550);

score = 0;

for (var i = 0; i < plinkos.length; i++) {
plinkos[i].display();
}

for (var k = 0; k < divisions.length; k++) {
divisions[k].display();
}

if(particle!==null) {
particle.display();
 if(particle.body.position.y>760) {
  if(particle.body.position.x<300) {
    score = score +500;
    particle=null;
    if(turn>=5) {
      gameState="end";
    }
  }
  else if(particle.body.position.x>301&&particle.body.position.x<600) {
    score = score+100;
    particle=null;
    if(turn>=5) {
      gameState="end";
    }
  }
  else if(particle.body.position.x>601&&particle.body.position.x<900) {
    score = score+200;
    particle=null;
    if(turn>=5) {
      gameState="end";
    }
  }
}
}

if (gameState === "end") {
textSize(80);
text("GAME OVER", 150, 300);
}

}

function mousePressed() {
if (gameState !== "end") {
turn++;
particle = new Particle(mouseX, 10, 10, 10);
}
}

