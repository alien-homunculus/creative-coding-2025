let x = 25;

let textX; //position of moving text
let textSpeed = 2;
let movingText = "I was excited to see all the taxidermied animals, specimen samples, real insects etc. But the most eyecatching exhibition was the real life leaf cutter ant terrarium.The terrarium was spread with leaves and branches.There were bridges that the ants can cross by to their habitat";

let linkCircle = "https://en.wikipedia.org/wiki/Leafcutter_ant";
let circleRadius = 42;


let x2 = 910;
  let y2 = 125;
let linkToNewProject = "Project1_2.html";

function setup() {
  createCanvas(windowWidth, windowHeight);
  
    textSize(75);
  textX = width;
  }


function draw() {
  

  background('lightgray');

textSize(450);
  text("😲", 80, 400);

  text("😲", 500, 400);

  text("😀", 1000, 400);

  

   //walkway
   fill("gray");
   rect(0, 382, windowWidth, windowHeight /1);

  //sun
  fill("green");
  stroke("lightgreen");
  strokeWeight(2);
  circle(windowWidth/1.03, 150, 800);

  fill("black");
  stroke(0);
  circle(windowWidth/1.1, 450, 150);

  stroke(0);
  strokeWeight(1);

 

  //leaf
  textSize(75);
  text("🍃", 100, 450);
  text("🌿", 150, 800);

  text("🍃", 500, 800);

  text("🍃", 1000, 600);

  text("🍃", 1300, 800);

  text("🍃", 1450, 700);

  text("🌿", 1500, 800);
  

  
  

  //leaf mouse follow
  textSize(75);
  text("🍃", mouseX, mouseY) //ladybug


  // Draw a circle, with hue determined by frameCount
  fill(x / 3, 90, 90);

  circle(x, height / 2, 42);

  circle(x + 30, height / 2, 35);

  circle(x + 50, height / 2, 30);

  strokeWeight(5);

  stroke(255);

  let lineStartx = x;

  let lineStartY = height / 1.9;

  let lineEndx = x;

  let lineEndY = height / 2 + 40;

  line(lineStartx, lineStartY, lineEndx, lineEndY);

  let lineStartx2 = x + 30;

  let lineStartY2 = height / 1.92;

  let lineEndx2 = x + 30;

  let lineEndY2 = height / 2 + 40;

  line(lineStartx2, lineStartY2, lineEndx2, lineEndY2);

  let lineStartx3 = x + 50;

  let lineStartY3 = height / 1.93;

  let lineEndx3 = x + 50;

  let lineEndY3 = height / 2 + 40;

  line(lineStartx3, lineStartY3, lineEndx3, lineEndY3);


  let lineStartx4 = x + 50;

  let lineStartY4 = height / 2 - 10;

  let lineEndx4 = x + 40;

  let lineEndY4 = height / 2 - 40;

  line(lineStartx4, lineStartY4, lineEndx4, lineEndY4);

  textSize(30);
  text("Into The Nest", 1600,300);



  x += 5;


  if (x > width + 25) {
    x = -25;
  }

    //text moving
textSize(75);
text(movingText, textX, height /1.5);

  //move text to the right
  textX -= textSpeed;

if (textX < -textWidth(movingText)) {
    textX = width;
  }

  }


function mousePressed() {
  
  //ant link
  let d = dist(mouseX, mouseY, x, height / 2);
  if (d < circleRadius / 2) {
    window.open(linkCircle, '_blank');
  }

  
let w2 = textWidth("Go Inside")
  let dMouse = dist(mouseX, mouseY, x2,y2);

  if (dMouse < w2){
window.open(linkToNewProject, "_self");
  }


}

function keyPressed() {

  redraw();
}


