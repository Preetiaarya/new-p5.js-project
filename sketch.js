function setup() {
  // Creates a canvas 600 pixels wide
  // and 400 pixels high.
  createCanvas(1700, 887);
}
function draw() {
  background('#00FFFF'); // Aqua color in hexadecimal
  rect(1250, 0, 800, 1000);// green color
  fill(255, 105, 180); // Pink color in RGB
  rect(0, 0, 400, 900); // Draw a rectangle at (100, 100) with wid
  rect(0, 0, 200, 900);
  fill(255, 255, 255); // White color in RGB
  rect(400, 0, 400, 900);
//----------ellipse------------
  line(100, 100, 550, 500);
  fill("pink");
  ellipse(600, 150, 300, 150);
  fill("purple");
  ellipse(500, 100, 200, 100);
  fill("red");
  ellipse(400, 50, 130, 80); // Top canopy
  // line(100, 100, 750, 200);
 
  //------------rect-------------
  fill("red");
  rect(700, 500, 150, 200);
  fill("green");
  rect(700, 500, 100, 150);
  fill("yellow");
  rect(700, 500, 40, 80);
  line(100, 100, 500, 500);


//-----square-----------------
  fill("blue");
  square(1500, 100, 100);
  fill("yellow");
  square(1500, 50, 25);
  fill("red");
  square(1500, 100, 50);
  fill("white");
  square(1500, 70, 75);
  fill("black");
  line(100, 100, 800, 500);

  //--------quad---------------
  fill("yellow");
  stroke("black");
  // quad(1000, 10, 20, 100, 500, 50, 40, 500);
  line(100, 100, 600, 500);
  fill("pink");
  line(100, 100, 650, 500);

  //--------arc---------------------
  strokeWeight(2);
  arc(1500, 200, 150, 150, 0, HALF_PI, PIE);
  line(100, 100, 400, 500);

  //-------circle----------------------
  fill("red");
  circle(100, 120, 200);
  fill("yellow");
  circle(100, 93, 150);
  fill("blue");
  circle(100, 70, 100);

  //----------circle----------
  fill("black");
  circle(1000, 600, 200);
  fill("white");
  circle(1000, 599, 150);
  fill("black");
  circle(1000, 598, 100);
  fill("white");
  circle(1000, 597, 50);
  fill("black");


  point(50, 50);
//-----triangle----------
  fill("pink");
  triangle(1000, 90, 1000, 180, 900, 90);
  fill("green");
  triangle(900, 80, 900, 160, 800, 80);

  //emojis
  textSize(65)
  text('💧', 1000, 300); // Display the drop emoji at position (180, 200)
  text('💧', 900, 500);
  text('💧', 1050, 100);
  text('💧', 950, 900);
  text("☁️", 1050, 100);
  text("🌳", 100, 800); // Tree emoji at the top
  text("🍃", 200, 700); // Leaf emoji below the tree
  text("🌹", 300, 650)//flower
  text("🌸", 100, 600) //flower
  text("🐞", 200, 76000) //ladybug
  text(" ", 100, 500);


}
