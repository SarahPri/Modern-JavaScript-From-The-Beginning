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