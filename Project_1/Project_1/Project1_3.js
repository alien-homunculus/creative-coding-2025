let textX; //position of moving text
let textSpeed = 2;
let movingText = "We were able to see how they managed and operate their kingdom through the glass wall.Leaf cutter ants especially, use leaves to build their houses.So we were able to see the ants carry leaves to their home.It was like seeing a congo line of leaves going up and down.From seeing these ants build a colony from computer screens to seeing it in real life.It was the most memorable experience I had in the past year.";


let emojiX = -75;
let speed = 2;


let linkCircle1 = "https://www.google.com/search?newwindow=1&sca_esv=6faaebde742302b5&sxsrf=AHTn8zo6Gxa19QPLWzZtcUBAdBX94R__5g:1741602996056&q=leafcutter+ant+eggs&udm=2&fbs=ABzOT_CWdhQLP1FcmU5B0fn3xuWpA-dk4wpBWOGsoR7DG5zJBtmuEdhfywyzhendkLDnhcrUz6wxBwARHD96EKWkSbZoQZGasaHPJ9csj0AVVVUDNHqfR7gd1arUfaOpw1v5Icccwayh65rdsqdiyPvxAA9gXK95YqHnUzfZ5jo9jiMl2Q8DaMUR4I1U0kl1-ho1NSBjy_chexdcGuJmvrFewYJaqjljog&sa=X&ved=2ahUKEwi_sq3fqP-LAxVSnokEHe1IEAwQtKgLegQIEBAB&biw=1920&bih=919&dpr=1";
let circleRadius1 = 600;




let linkToNewProject = "Project1_3.html";


function setup() {
    
    createCanvas(windowWidth, windowHeight);
  
    textSize(75);
  textX = width;
  }

  function draw() {

    background('black');

    //for emoji halfway point calculations

    

  //anthole
  fill("darkgreen");
  stroke("black");
  strokeWeight(15);
  circle(windowWidth/5, 150, 700);

    //anthole2
    fill("darkgreen");
    stroke("black");
    strokeWeight(15);
    circle(windowWidth/5, 800, 600);

      //anthole3
      fill("darkgreen");
      stroke("black");
      strokeWeight(15);
      circle(windowWidth/1.5, 800, 600);

         //anthole3
         fill("darkgreen");
         stroke("black");
         strokeWeight(15);
         circle(windowWidth/1.5, 150, 600);

 //anthole3
 fill("darkgreen");
stroke("black");
strokeWeight(15);
circle(windowWidth/1, 150, 600);

 //anthole3
 fill("darkgreen");
stroke("black");
strokeWeight(15);
circle(windowWidth/1, 800, 600);
   

textSize(90);
text("🍃", 150, 250);
  text("🐜🐜", 150, 300);
  
  text("🌿", 250, 200);

  text("🐜🐜", 1800, 300);
  text("🌿",1000, 800);
  text("🍃", 1300, 820);
  text("🐜", 1250, 820);
  text(" 🐛", 1100, 300);

  textSize(50);
  text("🥚", 150, 820);
  text("🥚", 300, 820);
  text("🥚", 320, 820);
  text("🥚", 400, 750);
  text("🥚", 400, 750);
  text("🥚", 250, 750);

  

   //text moving
textSize(75);
text(movingText, textX, height /1.5);

  //move text to the right
  textX -= textSpeed;

if (textX < -textWidth(movingText)) {
    textX = width;
  }

  //human emoji movement
  textSize(50);
  text("🐜 🐜🍃🐜🐜🐜🐜🥚🐜🐜🐜", emojiX, height /2);

  emojiX += speed;

    //leaf mouse follow
    textSize(500);
    text("🔎", mouseX, mouseY) //ladybug
  

}

describe();

  function mousePressed() {

    let d1 = dist(mouseX, mouseY, windowWidth/5, 600);
    if (d1 < circleRadius1 /1.5) {
      window.open(linkCircle1, '_blank');
    }


    let dEmoji = dist(mouseX, mouseY, emojiXCenter, emojiYCenter);
    if (dEmoji < emojiWidth){
      window.location.href = "Project1_1.html";
    }
}