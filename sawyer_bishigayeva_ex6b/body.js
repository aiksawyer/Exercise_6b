function Body(x, y, r, alpha) {
  // Variables are inherited from the parent.
  Shape.call(this, x, y, r);

  ////display method
  this.display = function(alpha) { ///method has a parameter that is distinct from the parent class
    fill(r, r, r);
    quad(this.x+315, this.y+259, this.x+221, this.y+323, this.x+470, this.y+291, this.x+374, this.y+250);
    fill(random(255), random(255), random(255), alpha);
    bezier(this.x+221, this.y+323, this.x+153, this.y+385, this.x+89, this.y+460, this.x+62, this.y+538);
    bezier(this.x+62, this.y+538, this.x+186, this.y+575, this.x+340, this.y+512, this.x+444, this.y+489);
    bezier(this.x+470, this.y+291, this.x+516, this.y+355, this.x+501, this.y+432, this.x+444, this.y+489);
    ///this is the "wing" part
    bezier(this.x+221, this.y+323, this.x+50,this.y+750, this.x+520, this.y+432, this.x+470, this.y+291);
    noFill();
  }
};

// Inherit from the parent class
Body.prototype = Object.create(Shape.prototype);
Body.prototype.constructor = Shape;