///this is based on ex4 – monster in p5
///also int

var a;
var l;
var h
var b;
var m;

function setup() {
  createCanvas(600, 800);
  background(255);

  a = new Arcs(0, 0, 0, random(255));
  l = new Legs(0, 0, 0, random(255));
  h = new Head(0, 0, random(255), random(255));
  m = new Mowhawk(25.0, 2.5, 0, random(255));
  b = new Body(0, 0, 0, random(255));
}

function draw() {
  background(255);
 
  l.display();
  l.applyForce();
  l.update();
  m.display();
  m.update();
  b.display();
  l.update();
  h.display();
  l.update();

}