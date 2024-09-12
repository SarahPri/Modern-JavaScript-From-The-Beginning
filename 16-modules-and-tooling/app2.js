// const axios = require("axios");

// async function getPost() {
//   const res = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
//   console.log(res.data);
// }

// getPost();


// import capitalizeWords from "./modules/utils.js"; //import one file


// import multiple file using destruring
import {capitalizeWords, makeMoney} from "./modules/utils.js"; 
import Person from "./modules/Person.js";

const person2 = new Person('Lucy', 40)

console.log(capitalizeWords('hello there from ES Modules'));
console.log(makeMoney(500));
person2.greet()