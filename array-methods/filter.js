const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

const even = numbers.filter((num) => num % 2 === 0);
console.log('Even numbers: ', even);

const newNames = names.filter((name) => {
  return !name.includes('D') && !name.includes('d');
});
console.log('no D: ', newNames);
