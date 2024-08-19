//This is the regular function
function add(a,b){
    return a + b;
}

console.log(add(3,4));

//This is the arrow function syntax
const add1 = (a,b) => {
    return a + b;
}
console.log(add1(3,90));


//Shorten this further
// Implicit return
const subtract = (a,b) => a - b;
console.log(subtract(90,40));


//using callback function
// that is passing a function inside a function
const numbers1 = [1,2,3,4,5];
numbers1.forEach(function(n){
    console.log(n);
})
// Arrow function in a callback
const numbers = [1,2,3,4,5];
numbers.forEach (n => console.log(n));