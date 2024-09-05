// try {
//   console.log(x);

// }catch(error){
//   console.log('Error: ' + error);
// }

function double(number){
  if(typeof number !== 'number' || isNaN(number)){
    throw new Error(number + ' is not a number');
  }
  return number * 2;
}
try {
  // const y = double('50')throws an error
  const y = double(50)
  console.log(y);

}catch (error){
  console.log(error);
}
