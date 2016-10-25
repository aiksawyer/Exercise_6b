function Mowhawk(x, y, r, alpha) {
  // Variables are inherited from the parent.
  Shape.call(this, x, y, r);

  ////display method
  this.display = function(alpha) { ///method has a parameter that is distinct from the parent class
    strokeWeight(5);
    stroke(r, alpha);
    line(300+x*0, 100+y*0, 500+x*0, 80+y*0);
    line(300+x*0, 100+y*0, 300 - x, 170+y*0);
    line(300 + x, 100 - y, 300, 170 - y);
    line(300 + 2 * x, 100 - 2 * y, 300 + x, 170 - 2 * y);
    line(300 + 3 * x, 100 - 3 * y, 300 + 2 * x, 170 - 3 * y);
    line(300 + 4 * x, 100 - 4 * y, 300 + 3 * x, 170 - 4 * y);
    line(300 + 5 * x, 100 - 5 * y, 300 + 4 * x, 170 - 5 * y);
    line(300 + 6 * x, 100 - 6 * y, 300 + 5 * x, 170 - 6 * y);
    line(300 + 7 * x, 100 - 7 * y, 300 + 6 * x, 170 - 7 * y);
    line(300 + 8 * x, 100 - 8 * y, 300 + 7 * x, 170 - 8 * y);
    stroke(0);
    strokeWeight(1);
  }
};

// Inherit from the parent class
Mowhawk.prototype = Object.create(Shape.prototype);
Mowhawk.prototype.constructor = Shape;