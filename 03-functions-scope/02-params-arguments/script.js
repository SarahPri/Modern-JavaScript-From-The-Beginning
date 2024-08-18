//Default Parameters
function registerUser(user = 'John Doe'){
    return user + ' is registered';
}

console.log(registerUser());

//Rest Params
function sum(...numbers){
    let total = 0;

    for(const num of numbers){
        total += num;
    }
    return total
   
}
console.log(sum(1,2,3,4,5,6,100));

//objects as params
function loginUser(user){
    return `the user ${user.name} with the id of ${user.id} is logged in`;
}

const user = {
    id:1,
    name:'Sarah'
};
console.log(loginUser(user));


//Arrays as Params

//first create a randomnumber
function randomNumber(arrNum){
    const randomIndex = Math.floor(Math.random() *arrNum.length);

    const item = arrNum[randomIndex];

    console.log(item);

}

randomNumber([1,2,3,4,5,6,7,8,9])