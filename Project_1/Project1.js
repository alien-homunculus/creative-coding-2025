let x = 25;

let linkCircle = "https://en.wikipedia.org/wiki/Leafcutter_ant";
let circleRadius = 42;

let linkRect = "https://www.amnh.org/";
let rectX = 325;
let rectY = 250;
let rectWidth = 200;
let rectHeight = 80;

function setup() {
  createCanvas(720, 600);

  textSize(20);

  noLoop();
}

function draw() {

  background(135, 206, 235);

  //building

fill(100, 100, 100);
stroke(0);
strokeWeight(1);

  rect(250, 210, 200, 80);
  rect(250, 250, 200, 80);
  rect(245, 240, 210, 10);
  rect(260, 270, 25, 80);
  rect(415, 270, 25, 80);

  //sun
  fill("yellow");
  stroke("orange");
  strokeWeight(20);
  circle(680, 50, 100);

  stroke(0);

  strokeWeight(1);


  //grass
  fill("green");
  rect(0, 330, 720, 600);

  //leaf
  textSize(75);
  text("🍃", 100, 450);

  //trunk
  fill("rgb(118,80,72)");
  rect(40, 270, 15, 60);

  //leaves
  fill("green");
  triangle(25, 270, 45, 50, 70, 270);

   //trunk
   fill("rgb(118,80,72)");
   rect(600, 270, 15, 60);
 
   //leaves
   fill("green");
   triangle(630, 270, 605, 50, 580, 270);
 

  //leaf mouse follow
  textSize(75);
  text("🍃", mouseX, mouseY) //ladybug


  // Draw a circle, with hue determined by frameCount
  fill(x / 3, 90, 90);

  circle(x, height / 2, 42);
 
  circle (x+30,height/ 2,35);

  circle(x+50, height / 2, 30);

  strokeWeight(5);

  stroke(255);

  let lineStartx = x;

  let lineStartY = height / 1.86;

  let lineEndx = x;
  
  let lineEndY = height / 2 + 40;

  line(lineStartx, lineStartY, lineEndx, lineEndY); 

  let lineStartx2 = x + 30;

  let lineStartY2 = height / 1.87;

  let lineEndx2 = x + 30;

  let lineEndY2 = height / 2 +40;

  line(lineStartx2, lineStartY2, lineEndx2, lineEndY2);

  let lineStartx3 = x + 50;

  let lineStartY3 = height / 1.89;

  let lineEndx3 = x + 50;

  let lineEndY3 = height / 2 +40;

  line(lineStartx3, lineStartY3, lineEndx3, lineEndY3);


  let lineStartx4 = x + 50;

  let lineStartY4 = height / 2 - 10;

  let lineEndx4 = x + 40;

  let lineEndY4 = height / 2 -40;

  line(lineStartx4, lineStartY4, lineEndx4, lineEndY4);


  x += 5;


  if (x > width + 25) {
    x = -25;

    
  }

  describe();
}

function mousePressed() {

//ant link
  let d = dist(mouseX, mouseY, x, height /2);
 if (d < circleRadius / 2) {
          window.open(linkCircle, '_blank');
}

//buildling link
if (mouseX > rectX && mouseX < rectX + rectWidth && mouseY > rectY && mouseY < rectY + rectHeight) {
        window.open(linkRect, '_blank');
      }

  if (isLooping()) {
    noLoop();
  } else {
    loop();
  }

}

function keyPressed() {

  redraw();
}