const myMap = new Map();

myMap.set('name', 'John')
myMap.set(1, 'blue')
myMap.set(2, 'red')

console.log(myMap.get('name'));
console.log(myMap.get(1));
console.log(myMap.get(2));
console.log(myMap.size);
console.log(myMap.has(1));
console.log(myMap.has(3));

myMap.delete(2)
// console.log(myMap);

const peopleMap = new Map();
peopleMap.set('sarah', {phone: '222-222-222', email: 'sarah@gmail.com'})
peopleMap.set('jack', {phone: '222-222-222', email: 'jack@gmail.com'})
peopleMap.set('brad', {phone: '222-222-222', email: 'brad@gmail.com'})
peopleMap.set('lucy', {phone: '222-222-222', email: 'lucy@gmail.com'})

peopleMap.forEach((person) => console.log(person.email))
console.log(peopleMap.keys());
console.log(peopleMap.values());
console.log(peopleMap.entries());

const iterator = peopleMap.values();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

const peopleArray = Array.from(peopleMap)
console.log(peopleArray);