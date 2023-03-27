/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */
class Circle extends Shape {
  constructor(radius) {
    super(Math.PI * radius * radius, 2 * Math.PI * radius);
    this.radius = radius;
  }

  print() {
    return super.print() + "The circle's radius is " + this.radius + '.';
  }
}

const newCircle = new Circle(5);
console.log(newCircle.print());
