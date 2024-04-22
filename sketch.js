var b1, b2;
var yoff = 0;
let angle = 0;//put angle here!
let flowers = []; //array of flowers
var bgColor;

let circle = [];
let square1 = [];
let morph = [];
let state = false;

let eyebrowMove = 0;
let goUp = false;

function setup() {
  createCanvas(600, 600);
  
  bgColor = color(226, 149, 44);
  
  b1 = new Flower(40);
  b2 = new Flower(80);
  for (var j = 0; j < 25; j++) {
    flowers[j] = new Flower(random(10, 50)); //generate flowers
  }

}


function mousePressed() {
  bgColor = color(random(0, 226), random(0, 212), random(0, 238), random(0, 255));
}


function draw() {
  background(226, 149, 44);
  background(bgColor); 
  
  const c = color(242, 191, 47);//yellow color
  const c1 = color(63, 27, 21); //stroke color:dark-brown
  const c2 = color(43, 21, 19); // stroke color for eyes
  const c3 = color(221, 53, 15); //red color L for clothing
  const c4 = color(229, 75, 25); // red color R for clothing
  const c5 = color(219, 72, 16); // red color clothing
  const c6 = color(184, 65, 40);//dark red color clothing
  const c7 = color(76, 35, 18); //dark brown color clothing
  const c8 = color(96, 18, 2);//light brown stroke
  const c9 = color(42, 20, 24);//extra dark
  
  
  //draw a grid
  stroke(0, 0, 0);
  strokeWeight(5);
  line(100, 0, 100, 700);
  line(0, 100, 700, 100);
  line(200, 0, 200, 700);
  line(0, 200, 700, 200);
  line(300, 0, 300, 700);
  line(0, 300, 700, 300);
  line(400, 0, 400, 700);
  line(0, 400, 700, 400);
  line(500, 0, 500, 700);
  line(0, 500, 700, 500);
  line(600, 0, 600, 700);
  line(0, 600, 700, 600);
  
  //draw the ears
  stroke(c1);
  fill(c);
  rect(60, 35, 60, 80, 30, 20, 5, 5); //left ear
  rect(255, 75, 110, 60, 5, 30, 25, 5 ); // right ear
  
  //draw face
  stroke(c1);
  fill(c);
  rect(100, 100, 200, 200);
  ellipse(260, 135, 80, 70);
  quad(100, 200, 160, 172, 140, 300, 100, 300);
  triangle(100, 100, 200, 150, 100, 200);
  ellipse(210, 255, 95, 85);
  triangle(180, 300, 215, 320, 250, 300);
  
  //draw eyes
  stroke(c2);
  strokeWeight(20);
  fill(c2);
  point(180, 210); //left eye
  point(240, 210); // right eye
  
  //draw eyebrows
  stroke(c);
  strokeWeight(10);
  line(160, 190, 180, 180); //left eyebrow
  line(240, 180, 260, 190); // right eyebrow
  
//eyebrow motion
  line(160, 190, 180, 180); //left eyebrow
  line(240, 180, 260, 190); // right eyebrow
  fill(c1);
  stroke(c1);
  strokeWeight(10);
  
  if(eyebrowMove == -5){
    goUp = true;
  }else if( eyebrowMove == 5){
    goUp = false;
  }
  
  
  if(!goUp){
    eyebrowMove --;
  }else{
    eyebrowMove ++;
  }
  line(160, 190 + eyebrowMove, 180, 180);
  line(240, 180, 260, 190 + eyebrowMove);
  
  
  // draw mouth
  stroke(c2);
  strokeWeight(5);
  fill(c2);
  triangle(190, 260, 225, 245, 225, 278);
  
  
  
  
// draw clothing - on top
  stroke(c1);
  fill(c3);
  quad(100, 300, 170, 300, 200, 320, 115, 400);
  triangle(300, 290, 300, 390, 140, 435);
  
  stroke(c1);
  fill(c5);
  triangle(100, 200, 100, 320, 10, 240);
  triangle(100, 320, 135, 345, 140, 300);
  triangle(100, 300, 100, 320, 140, 300);
  triangle(300, 200, 400, 360, 300, 390);
  quad(30, 255, 100, 315, 100, 405, 30, 405);//left arm clothing, top
  square(24, 340, 78, 5, 5, 5, 50);
  
  stroke(c1);
  fill(c3);
  quad(200, 320, 222, 360, 140, 434, 115, 400);
  
  stroke(c1);
  fill(c5);
  square(200, 420, 100);
  
  

  
  
    //cruve lines shadow on left arm
  stroke(c7);
  strokeWeight(18);
  line(21, 260, 21, 390);
  stroke(c7);
  strokeWeight(15);
  curve(22, 370, 22, 395, 45, 420, 100, 420);
  line(35, 420, 18, 420);
  line(15, 420, 15, 500);
  bezier(15, 500, 16, 540, 50, 545, 95, 525);
  
  
  //dark-brown clothing, in dark-brown filling
  stroke(c1);
  strokeWeight(5);
  fill(c7);
  triangle(170, 300, 230, 300, 200, 320);
  quad(200, 320, 260, 270, 280, 280, 212, 340);
  quad(212, 340, 300, 260, 300, 290, 222, 360);
  triangle(100, 315, 115, 400, 100, 400);
  triangle(200, 420, 300, 390, 300, 420);
  quad(100, 400, 115, 400, 138, 432, 100, 415);
  quad(138, 432, 200, 420, 200, 455, 150, 460);
  
  
  //brown shadow parts
  stroke(c1);
  strokeWeight(3);
  fill(c8);
  triangle(150, 520, 210, 520, 225, 565);
  
  //dark shadow parts
  stroke(c1);
  strokeWeight(3);
  fill(c9);
  triangle(210, 540, 242, 540, 220, 560);
  triangle(170, 520, 210, 520, 220, 560);
  
  
  
//Body in yellow
  //draw part of face, yellow triangle
  noStroke();
  fill(c);
  triangle(170, 296, 205, 320, 230, 296);
  
  //draw body, yellow body
  stroke(c1);
  strokeWeight(5);
  fill(c);
   //right-side arm - yellow
  triangle(400, 360, 400, 440, 300, 390);
  arc(340, 430.5, 110.5, 100, 0, PI + QUARTER_PI, CHORD);
   //middle parts of body
  triangle(100, 415, 140, 435, 100, 500);
  quad(140, 435, 155, 460, 130, 500, 90, 520);
  triangle(95, 520, 160, 490, 200, 520);
  triangle(160, 490, 200, 455, 200, 520);
  quad(130, 500, 155, 460, 200, 455, 160, 490);
  
  
   //right-side leg parts in yellow
  rect(210, 420, 80, 120, 40, 40, 3, 3);
  stroke(c7);
  fill(c);
  triangle(210, 460, 260, 455, 210, 540);
  quad(260, 455, 290, 465, 270, 490, 210, 540);
  
  
  
//Bottom clothing in red
  //bottom clothing parts; in red
  stroke(c1);
  strokeWeight(5);
  fill(c4);
  quad(210, 540, 290, 478, 300, 500, 220, 560);
  
  stroke(c1);
  fill(c3);
  triangle(220, 560, 300, 500, 325, 560);


   //bottom clothing parts, in brilight red, left bottom
  stroke(c1);
  fill(c3);
  rect(20, 428.5, 78, 100, 5, 5, 30, 30);
  
   //left-side arm
   //left-arm in yellow
  stroke(c1);
  strokeWeight(5);
  fill(c);
  square(40, 370, 75, 40, 5, 5, 40);
  
   //brown shadow
  stroke(c1);
  strokeWeight(5);
  fill(c7);
  triangle(45, 430, 35, 445, 65, 445);
  
  stroke(c7);
  strokeWeight(3);
  line(65, 520.5, 95, 508);
  
  //bottom rect w/ gradient red & black
  noStroke();
  fill(c9);
  rect(35, 453, 30, 70);
  fill(c3);
  rect(40, 475, 15, 40);

  //bottom extra dark- brown triangle shadow
  stroke(c1);
  strokeWeight(3);
  fill(c9);
  triangle(100, 525, 70, 545, 120, 560);
  
  
  
  //flowers
  colorMode(RGB);
  angle += 0.02;

  for (var h = 0; h < flowers.length; h++) {
    flowers[h].move();
    flowers[h].display();  //diaplay and animate the flowers
  }
  
  
//morph pooh head
  let totalDistance = 0;
  for (let i = 0; i < circle.length; i++) {
    let v1;
    if (state) {
      v1 = circle[i];
    } else {
      v1 = square1[i];
    }
    // Get the vertex 
    let v2 = morph[i];
    // Lerp to the target
    v2.lerp(v1, 0.1);
    // Check how far we are from target
    totalDistance += p5.Vector.dist(v1, v2);
  }

  // If all the vertices are close, switch shape
  if (totalDistance < 0.1) {
    state = !state;
  }

  // Draw relative to center
  translate(200, 200);
  strokeWeight(5);
  // Draw a polygon that makes up all the vertices
  beginShape();
  noFill();
  stroke(c1);

  morph.forEach(v => {
    vertex(v.x, v.y);
  });
  endShape(CLOSE);
  
}

function mouseDragged(){
  
  // Create a circle using vectors pointing from center
  for (let angle = 0; angle < 360; angle += 9) {
    let v = p5.Vector.fromAngle(radians(angle - 135));
    v.mult(100);
    circle.push(v);
    morph.push(createVector());
  }

  // A square is a bunch of vertices along straight lines
  // Top of square
  for (let x = -100; x < 100; x += 5) {
    square1.push(createVector(x, -100));
  }
  // Right side
  for (let y = -100; y < 100; y += 5) {
    square1.push(createVector(100, y));
  }
  // Bottom
  for (let x = 100; x > -100; x -= 5) {
    square1.push(createVector(x, 100));
  }
  // Left side
  for (let y = 100; y > -100; y -= 5) {
    square1.push(createVector(-100, y));
  } 
}



class Flower {

  constructor(tempr) {
    this.x = random(width);
    this.y = random(height);
    this.R = tempr;
    this.vx = random(0.1, 1);
    this.vy = random(0.1, 1);
    this.r = random(220, 255);
    this.g = random(50, 180);
    this.b = random(120, 180);
  }

  display() {
    push();
    translate(this.x, this.y); //use tanslate to let the flower rotate aorund itself
    rotate(angle);

    beginShape(); //connect the vertexes
    var xoff = 1000;
    for (var i = 0; i < 4 * PI; i += 0.05) {

      var r = map(noise(xoff, yoff), 0, 1, this.R * 0.6, this.R * 1.4) * sin(2.4 * i);

      var x = r * cos(i);
      var y = r * sin(i);

      stroke(85);
      strokeWeight(2);

      xoff += 0.3;

      fill(this.r, this.g, this.b, 150); //fill the color randomly

      vertex(x, y);

    }
    endShape();
    yoff += 0.005;
    // fill(230);
    // noStroke();
    // ellipse(0, 0, 10, 10);

    pop();

  }

  move() {
    this.x += this.vx;//let the flowers move and bounce back 
    this.y += this.vy;
    if (this.x < 0 || this.x > width) {
      this.vx = this.vx * -1;
 }
    if (this.y < 0 || this.y > height) {
      this.vy = this.vy * -1;
    }

  }
}
