const strLit = "Hello Object Literal";
const strObj = new String('Hello Constructor');

console.log(strLit, typeof strLit);
console.log(strObj, typeof strObj);

//Boxing
console.log(strLit.toUpperCase());

//Unboxing
console.log(strObj.valueOf(), typeof strObj.valueOf());


const funcLit = function (x){
    return x * x;
}
console.log(funcLit, typeof funcLit);
console.log(funcLit(20));

const funcObj = new Function('x', 'return x * x');
console.log(funcObj(3)); 

const Obj1 = {};
const Obj2 = new Object();
console.log(Obj1, typeof Obj1);
console.log(Obj2, typeof Obj2);