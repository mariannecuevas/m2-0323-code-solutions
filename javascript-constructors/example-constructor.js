function ExampleConstructor() {
  console.log('value of prototype:', ExampleConstructor);
  console.log('typeof prototype:', typeof ExampleConstructor);
}

const newExConstructor = new ExampleConstructor();
console.log(newExConstructor);

const check = newExConstructor instanceof ExampleConstructor;
console.log(check);
