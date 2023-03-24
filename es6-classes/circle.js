/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
    this.area = radius * Math.PI;
    this.circumference = 2 * radius * Math.PI;
  }

  print() {
    return 'The area is ' + this.area + '. ' + 'The circumference is ' + this.circumference + '. ' + 'The radius is ' + this.radius + '.';
  }
}

const newCircle = new Circle(5);
console.log(newCircle.print());
