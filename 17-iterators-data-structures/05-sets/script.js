const set = new Set([1,2,3,4,5,4,2])
set.add(7);
// console.log(set.has(1)); 


set.delete(5)
console.log(set.has(5));
console.log(set);

const setArray = Array.from(set)
console.log(setArray);

for(let item of set){
  console.log(item);
}

// create iterator
const iterator = set.values();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

set.clear();
// console.log(set);