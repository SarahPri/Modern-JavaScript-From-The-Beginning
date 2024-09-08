const sym = Symbol();
const sym1 = Symbol('foo');
const sym2 = Symbol('bar');

// console.log(sym, sym1, sym2);

const user = {
  [Symbol('id')]: 1,
  name: 'John Doe',
  email: 'johna@g.com'
}
// console.log(user);

for (let key in user){
  // console.log(key);
}

// Get Own Property Symbols
console.log(Object.getOwnPropertySymbols(user));

// another way of creating symbols
// symbol.for()
const sym3 = Symbol.for('foo')
const sym4 = Symbol.for('foo')

  console.log(sym3 === sym4);
  console.log(Symbol.keyFor(sym3));
  console.log(sym3.toString());