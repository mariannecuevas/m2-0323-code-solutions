function ExampleConstructor() {

}

console.log('value of prototype:', ExampleConstructor.prototype);
console.log('typeof prototype:', typeof ExampleConstructor.prototype);

const newExConstructor = new ExampleConstructor();
console.log(newExConstructor);

const check = newExConstructor instanceof ExampleConstructor;
console.log(check);
