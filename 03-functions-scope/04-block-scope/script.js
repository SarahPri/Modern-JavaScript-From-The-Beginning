//Block Scope
const x = 100;

if (true) {
  const y = 200;
  console.log(x + y);
}
// console.log(x + y); // y is not defined

for (let i = 0; i <= 10; i++) {
  console.log(i);
}
// console.log(i);

//using let
if (true) {
  const a = 500; // send error
  let b = 600; // send error
  var c = 700; // var not a block scope
}
console.log(c);

//var is a function scope you can't use a var function outside the function
//but you can use var in blocks like loops and if statements

function run() {
  var d = 100;
  console.log(d);
}
run();

// console.log(d);//var is a function scope you can't use a var function outside the function
