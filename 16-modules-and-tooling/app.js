// async function getUser(){
//   const response = await fetch('thhps://api.github.com/users/sarahwanyeki');
//   const data = await response.json();
//   console.log(data);
// }

// const message = require('./utils');
// console.log(message.text);


// const capitalizeWords = require('./utils.js')
// console.log(capitalizeWords('hi sarah'));

const {capitalizeWords, makeMoney} = require('./utils');
const Person = require('./person');

console.log(capitalizeWords("It is working"));
console.log(1000000);

const person1 = new Person('Sarah', 30);
person1.greet()