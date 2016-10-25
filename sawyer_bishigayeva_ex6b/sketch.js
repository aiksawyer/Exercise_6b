///this is based on ex4 – monster in p5
///also features OOP and inheritance concepts from ex6

///setting up global variables
var l;
var h
var b;
var m;

function setup() {
  createCanvas(600, 800);
  background(255);
  
  ///creating all the objects
  l = new Legs(0,0, 100, random(255));
  h = new Head(0, 0, random(255), random(255));
  m = new Mowhawk(25.0, 2.5, 0, random(255));
  b = new Body(0, 0, 0, random(255));
}

function draw() {
  ///redraw background
  background(255);
  
  //calling each object method one by one
  l.display();
  l.update();
  l.checkEdges();
  m.display();
  m.checkEdges();
  m.update();
  b.display();
  b.update();
  b.checkEdges();
  h.display();
  h.update();
  h.checkEdges();

}