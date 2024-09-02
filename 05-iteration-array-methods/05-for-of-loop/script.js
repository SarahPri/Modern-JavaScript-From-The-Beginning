const items = ['book', 'table', 'chair', 'kite'];
// for (let i = 0; i<items.length; i++){
//     console.log(items[i]);
// }

for(const item of items){
    console.log(item);
}

// An array with objects in it
const users = [
    {name: 'Lucy'},
    {name: 'Kate'},
    {name: 'Steve'},
    {name: 'Sarah'}
]

for (const user of users){
    console.log(user.name);
}

// Loop over Maps
const map = new Map();
map.set('name', 'john');
map.set('age', 30);

for (const [key, value] of map){
    console.log(key, value);
}