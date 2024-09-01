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