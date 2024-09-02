const numbers = [1,2,3,4,5,6,7,8,9,10]


// Long version
const sum = numbers.reduce(function(accumulator, currentValue){
    return accumulator + currentValue

}, 0)
console.log(sum);

// short
const sum2 = numbers.reduce((acc, cur) => acc + cur, 10 );
console.log(sum2);


// The same code Using a for loop
const sum3 = () => {
    let acc = 0;
    for(const cur of numbers){
        // acc = acc + cur;
        acc += cur;
    }

    return acc;
}
console.log(sum3());

// Shopping cart
const cart = [
    {
        id: 1,
        name: 'Product 1',
        price: 130
    },
    {
        id: 2,
        name: 'Product 2',
        price: 230
    },
    {
        id: 3,
        name: 'Product 3',
        price: 330
    }
];

// sum = numbers.reduce(function(accumulator, currentValue){
//     return accumulator + currentValue

// }, 0)
// console.log(sum);

total = cart.reduce(function(acc, product){
    return acc + product.price
}, 0)

console.log(total);