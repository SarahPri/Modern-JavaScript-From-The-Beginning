//Falsy Values:
// -false
// -0
// -"" or '' (Empty string)
// -null
// -undefined
// -NaN

const x = '';

if(x){
    console.log('This is truthy');
}else{
    console.log('This is falsy')
}



console.log(Boolean(x));

// Truthy and Falsy caveats

// const children = 3

// if(children){
//     console.log(`you have ${children} children`);
// }else{
//     console.log('Please enter number of children');
// }

const children = 0;
// if(!isNaN(children))
if(children !== undefined){
    console.log(`you have ${children} children`);
}else{
    console.log('Please enter number of children');
}

//checking for empty arrays

// const post = ['Post One', 'Post Two'];

// if (post.length > 0){
//     console.log('List Posts');
// }else{
//     console.log('No Posts to list');
// }


const post = ['Post One', 'Post Two'];

if (post.length > 0){
    console.log('List Posts');
}else{
    console.log('No Posts to list');
}

//Checking for empty Objects
// const user ={
//     name: "Sarah"
// }

// if (user){
//     console.log('List User');
// }else{
//     console.log('No User');
// }


// ================
const user ={
    
}

if (Object.keys(user).length > 0){
    console.log('List User');
}else{
    console.log('No User');
}

// Loose Equality
console.log(false == 0);
console.log('' == 0);
console.log(null == undefined);
console.log(null === undefined);