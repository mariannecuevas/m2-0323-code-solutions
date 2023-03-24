/* exported Shape */
class Shape {
  constructor(area, circumference) {
    this.area = area;
    this.circumference = circumference;
  }

  print() {
    return 'The area is ' + this.area + '. ' + 'The circumference is ' + this.circumference + '.';

  }
}

const rectangle = new Shape(50, 30);
console.log(rectangle.print());
