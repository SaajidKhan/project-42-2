var hr,mn,sc;
var hrAngle,mnAngle,scAngle;


function setup() {
  createCanvas(800,800);
  angleMode(DEGREES);
  
}

function draw() {
  background(0,0,0);  

  translate(200,200);
   rotate(-90);
   hr=hour();
   mn=minute();
   sc=second();

   scAngle=map(sc,0,60,0,360);
   mnAngle=map(mn,0,60,0,360);
   hrAngle=map(hr%12,0,12,0,360);

   //second hand

   push();
   rotate(scAngle);
   stroke(255,255,0);
   strokeWeight(7);
   line(0,0,100,0);
   pop();
   //miute hand
   push();
   rotate(mnAngle);
   stroke(255,255,0);
   strokeWeight(7);
   line(0,0,75,0);
   pop();

   //hour hand
   push();
   rotate(hrAngle);
   stroke(255,255,0);
   strokeWeight(7);
   line(0,0,50,0);
   pop();

  
  //drawing the arc
   strokeWeight(10); 
   noFill();
    //Seconds
   stroke(0,0,255); 
   arc(0,0,300,300,0,scAngle);
   //Minute
   stroke(0,255,0);
   arc(0,0,280,280,0,mnAngle);
   //Hour
   stroke(255,0,0);
   arc(0,0,250,250,0,hrAngle);
 
  drawSprites();
}