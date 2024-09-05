// create a promise
const promise = new Promise((resolve, reject) => {
  // do some async task
  setTimeout(() => {
    console.log("Async Task complete");
    resolve();
  }, 1000);
});

// promise.then(() => {
//   console.log("Promise consumed...");
// });

// new Promise((resolve, reject) => {
//   // do some async task
//   setTimeout(() => {
//     console.log("Async Task 2 complete");
//     resolve();
//   }, 1000);
// }).then(() => {
//   console.log('Promise 2 consumed');
// })
// =================================
// Return data on a promise you put it on the resolve
// const getUser = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Async Task 2 complete");
//     resolve({ name: "John", age: 30 });
//   }, 1000);
// });

// getUser.then((user) => {
//   console.log(user);
// });

// =================================
// // get errors
// const getUser = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = false;


//     if(!error){  
//       resolve({ name: "John", age: 30 });
//     }else{
//       reject('Error: Something went wrong')
//     }
//   }, 1000);
// });

// getUser.then((user) => console.log(user)).catch((error) => console.log(error));


// console.log("Hello from global scope");

// ==================================================================
// Put in Finally the project will run no matter what wether it was resolved or rejected

const getUser = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;


    if(!error){  
      resolve({ name: "John", age: 30 });
    }else{
      reject('Error: Something went wrong')
    }
  }, 1000);
});

getUser
.then((user) => console.log(user))
.catch((error) => console.log(error))
.finally(()=> console.log('The promise has been resolved or rejected'))


console.log("Hello from global scope");