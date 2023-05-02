import add from './add.js';
import subtract from './subtract.js';
import multiply from './multiply.js';
import divide from './divide.js';

const operation = process.argv[3];
const num1 = Number(process.argv[2]);
const num2 = Number(process.argv[4]);

let result;

switch (operation) {
  case 'plus':
    result = add(num1, num2);
    break;
  case 'minus':
    result = subtract(num1, num2);
    break;
  case 'time':
    result = multiply(num1, num2);
    break;
  case 'over':
    result = divide(num1, num2);
    break;
}

console.log(`Result: ${result}`);
