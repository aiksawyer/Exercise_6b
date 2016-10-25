function Head(x, y, r, alpha) {
  // Variables are inherited from the parent.
  Shape.call(this, x, y, r);

  ////display method
  this.display = function(alpha) { ///method has a parameter that is distinct from the parent class
    noFill();
    line(this.x+100, this.y+187.5, this.x+475, this.y+150);
    line(this.x+150, this.y+287.5, this.x+375, this.y+250);
    bezier(this.x+100, this.y+187.5, this.x+275,this.y+180, this.x+200, this.y+287.5, this.x+150, this.y+287.5);
    bezier(this.x+475, this.y+150, this.x+350, this.y+200, this.x+350, this.y+200, this.x+375, this.y+250);
    fill(r, r, r, alpha);
    ellipse(this.x+256, this.y+196, 30, 30);
    fill(0, alpha);
    ellipse(this.x+256, this.y+196, 10, 10);
    fill(0, alpha);
    ellipse(this.y+256, this.y+196, 1, 1);
    noFill();
    fill(r, r, r, alpha);
    quad(this.x+100, this.y+187.5, this.x+103, this.y+204, this.x+112, this.y+207, this.x+111, this.y+187);
    quad(this.x+111, this.y+187, this.x+112, this.y+199, this.x+116, this.y+199, this.x+119, this.y+187);
    quad(this.x+119, this.y+187, this.x+115, this.y+204, this.x+124, this.y+205, this.x+126, this.y+189);
    quad(this.x+126, this.y+185, this.x+127, this.y+199, this.x+132, this.y+193, this.x+136, this.y+191);
    quad(this.x+135, this.y+189, this.x+140, this.y+207, this.x+147, this.y+200, this.x+145, this.y+187);
    quad(this.x+145, this.y+187, this.x+148, this.y+198, this.x+156, this.y+200, this.x+155, this.y+192);
    quad(this.x+137, this.y+272, this.x+150, this.y+288, this.x+159, this.y+287, this.x+153, this.y+273);
    quad(this.x+155, this.y+279, this.x+159, this.y+287, this.x+168, this.y+285, this.x+165, this.y+275);
    quad(this.x+169, this.y+263, this.x+168, this.y+285, this.x+181, this.y+278, this.x+173, this.y+258);
    quad(this.x+176, this.y+268, this.x+181, this.y+278, this.x+191, this.y+270, this.x+187, this.y+256);
    noFill();
  }
};

// Inherit from the parent class
Head.prototype = Object.create(Shape.prototype);
Head.prototype.constructor = Shape;