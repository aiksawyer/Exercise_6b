function Legs(x, y, r, alpha) {
  // Variables are inherited from the parent.
  Shape.call(this, x, y, r);

  ////display method
  this.display = function(alpha) { ///method has a parameter that is distinct from the parent class
    fill(r, alpha);
    stroke(0);
    rect(this.x+136, this.y+551, 22, 70);
    quad(this.x+307, this.y+527, this.x+307, this.y+597, this.x+329, this.y+597, this.x+329, this.y+520);
    fill(r, r, r);
    arc(this.x+146, this.y+656, 90, 70, PI, TWO_PI, PIE);
    arc(this.x+319, this.y+632, 90, 70, PI, TWO_PI, PIE);
  }
};

// Inherit from the parent class
Legs.prototype = Object.create(Shape.prototype);
Legs.prototype.constructor = Shape;