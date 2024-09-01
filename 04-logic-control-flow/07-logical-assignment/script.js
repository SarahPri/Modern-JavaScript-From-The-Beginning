// ||= assigns the right side value only if the left is a falsy value
let a = false;

if(!a){
    a =10;
}

a=a || 10
console.log(a);
// &&= assigns the right side value only if the left is a truthy value

//??= assigns the right side value only if the left is null or undefined

