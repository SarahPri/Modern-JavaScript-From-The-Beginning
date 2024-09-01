console.log(50 > 20 && 10 > 15); // everything has to be true
console.log(10 > 20 || 30 > 15); // one of them has to be true


// && - will return first falsy value or the last value
let a;

a = 10 && 20;
a = 10 && 20 && 30;
console.log(a);