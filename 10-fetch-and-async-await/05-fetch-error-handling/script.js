// fetch('http://httpstat.us')
// .then((response) => {
//   return response;
// })
// .then(() => {
//   console.log('success');
// })


// fetch('http://httpstat.us/404')
// .then((response) => {
//   return response;
// })
// .then(() => {
//   console.log('success');
// })
// .catch((error) => {
//   console.log(error);
// })

// catch runs on a network error
// fetch('http://hello456.net')
// .then((response) => {
//   return response;
// })
// .then(() => {
//   console.log('success');
// })
// .catch((error) => {
//   console.log(error);
// })


// How to catch errors use response.ok
// fetch('http://httpstat.us/404')
// .then((response) => {
//   if(!response.ok){
//     throw new Error('Request Failed')
//   }
//   return response;
// })
// .then(() => {
//   console.log('success');
// })
// .catch((error) => {
//   console.log(error);
// })

// =================================
// check actual status
fetch('http://httpstat.us/500')
.then((response) => {
  if(response.status === 404){
    throw new Error('Not Found')
  }else if(response.status === 500){
    throw new Error('Server Error')
  }else if(response.status !== 200){
    throw new Error('Request Failed ')
  }
  return response;
})
.then(() => {
  console.log('success');
})
.catch((error) => {
  console.log(error);
})

