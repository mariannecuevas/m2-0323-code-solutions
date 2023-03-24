/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Square */
class Square extends Shape {
  constructor(width) {
    super();
    this.width = width;
    this.area = width * width;
    this.circumference = width * 4;
  }

  print() {
    return 'The area is ' + this.area + '. ' + 'The circumference is ' + this.circumference + '. ' + 'The width is ' + this.width + '.';
  }
}

const newSquare = new Square(5);
console.log(newSquare.print());
