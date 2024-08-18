const post = {
    id: 1,
    title: 'Post One',
    body:'This is the body',
};

//convert to JSON String
const str = JSON.stringify(post)

//Parse
const obj = JSON.parse(str)
console.log(obj);

//in Array
const posts2 = [
    {
        id: 1,
        title: 'Post Two',
        body:'This is the body',
    },
    {
        id: 2,
        title: 'Post Three',
        body:'This is the body',
    }
];

const str2=JSON.stringify(posts2)
console.log(str2);

const str3=JSON.parse(str2)
console.log(str3);