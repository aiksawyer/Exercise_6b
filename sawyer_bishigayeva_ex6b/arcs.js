function Arcs(x, y, r, alpha) {
  // Variables are inherited from the parent.
  Shape.call(this, x, y, r);

  ////display method
  this.display = function(alpha) { ///method has a parameter that is distinct from the parent class
    strokeWeight(5);
    stroke(random(255), random(255), random(255));
    line(300, 100, 500, 80);
    line(300, 100, 300 - this.x, 170);
    line(300 + this.x, 100 - this.y, this.x+300, 170 - this.y);
    line(300 + 2 * this.x, 100 - 2 * this.y, 300 + this.x, 170 - 2 * this.y);
    line(300 + 3 * this.x, 100 - 3 * this.y, 300 + 2 * this.x, 170 - 3 * this.y);
    line(300 + 4 * this.x, 100 - 4 * this.y, 300 + 3 * this.x, 170 - 4 * this.y);
    line(300 + 5 * this.x, 100 - 5 * this.y, 300 + 4 * this.x, 170 - 5 * this.y);
    line(300 + 6 * this.x, 100 - 6 * this.y, 300 + 5 * this.x, 170 - 6 * this.y);
    line(300 + 7 * this.x, 100 - 7 * this.y, 300 + 6 * this.x, 170 - 7 * this.y);
    line(300 + 8 * this.x, 100 - 8 * this.y, 300 + 7 * this.x, 170 - 8 * this.y);
    stroke(0);
    strokeWeight(r);
  }
};

// Inherit from the parent class
Arcs.prototype = Object.create(Shape.prototype);
Arcs.prototype.constructor = Shape;