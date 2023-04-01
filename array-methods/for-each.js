const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];

console.log('In order: ');
const each = values.forEach((num) => console.log(num));

console.log('Reverse order: ');
values.forEach((num, i) => {
  const lastElement = values[values.length - 1 - i];
  console.log(lastElement);
});
