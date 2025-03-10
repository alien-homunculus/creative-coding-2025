let textX; //position of moving text
let textSpeed = 2;
let movingText = "The most memorable memory I had was last summer. It was going to the Natural History Museum.";


let emojiX = -75;
let speed = 2;

let emojiWidth = 50;
let emojiHeight = 50;


let linkRect = "https://www.amnh.org/";
let rectX = windowWidth / 2.6;
let rectY = 200;
let rectWidth = 500;
let rectHeight = 200;

let linkToNewProject = "Project1_2.html";


function setup() {
    
    createCanvas(windowWidth, windowHeight);
  
    textSize(75);
  textX = width;
  }

  function draw() {

    background(135, 206, 235);

    //for emoji halfway point calculations
let halfway = width /2;

     //building

  fill('beige');
  stroke(0);
  strokeWeight(1);



  //BASE smaller start width, start height, rect width, rect height
rect(windowWidth/2.6, 200, 500, 150);

  //BASE start width, start height, rect width, rect height
  rect(windowWidth/2.3, 150, 300, 200);

  //trim bottom
  rect(windowWidth/2.35, 240, 330, 10);

   //trim top
   rect(windowWidth/2.35, 150, 330, 10);

    //stairs background foundation
 rect(windowWidth/2.7, 350, 550, 31);

 //stairs 1
 rect(windowWidth/2.35, 350, 330, 10);
 //stairs 2
 rect(windowWidth/2.45, 360, 400, 10);
  //stairs 
  rect(windowWidth/2.55, 370, 480, 10);


  //pillar 1 Left to right
  rect(windowWidth/2.3, 250, 15, 100);

  //pillar 2 
  rect(windowWidth/2.2, 250, 15, 100);

  //pillar 3 
  rect(windowWidth/1.8, 250, 15, 100);

  //pillar 4
  rect(windowWidth/1.74, 250, 15, 100);

  //circle 1
  circle(windowWidth/2.23, 280, 15);

 //circle 2
 circle(windowWidth/1.76, 280, 15);

 fill('black');

 noStroke()

   //small door 1
   rect(windowWidth/2.25, 320, 15, 30);

  //small door 2
  rect(windowWidth/1.77, 320, 15, 30);

  //main door
  rect(windowWidth/2, 290, 50, 60);

  //width start, height, circle size
 circle(windowWidth/1.95, 290, 50);


  //sun
  fill("yellow");
  stroke("orange");
  strokeWeight(20);
  circle(windowWidth/1.03, 50, 100);


  //tree stroke
  stroke(0);

  strokeWeight(1);


  //grass, width height
  fill("green");
  rect(0, 382, windowWidth, windowHeight /1);

  //walkway, 
  fill("lightgray");
  rect(0, 390, windowWidth, 30);


  //trunk
  fill("rgb(118,80,72)");
  rect(40, 321, 15, 60);

  //leaves
  fill("darkgreen");
  triangle(25, 320, 45, 50, 70, 320);

  //trunk
  fill("rgb(118,80,72)");
  rect(600, 321, 15, 60);

  //leaves
  fill("darkgreen");
  triangle(630, 320, 605, 50, 580,320);

  //trunk
  fill("rgb(118,80,72)");
  rect(1350, 321, 15, 60);

  //leaves
  fill("darkgreen");
  triangle(1390, 320, 1350, 50, 1320,320);

   //text moving
textSize(75);
text(movingText, textX, height /1.5);

  //move text to the right
  textX -= textSpeed;

if (textX < -textWidth(movingText)) {
    textX = width;
  }

  textSize(30);
  text("Go Inside", 910,125);

  //human emoji movement
  textSize(70);
  text("🚶‍♂️", emojiX, height/2);

  emojiX += speed;

  if ( emojiX >= halfway || emojiX <= - 75) {
    speed = -speed;
  }

}
 


  function mousePressed() {



    
    let dBuilding = dist(mouseX, mouseY, windowWidth / 2, 300);
    if (dBuilding < 100) {
      window.open(linkRect, '_blank');
    }




