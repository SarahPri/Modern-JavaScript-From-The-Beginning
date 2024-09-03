console.log(document.getElementById('app-title'));
console.log(document.getElementById('app-title').getAttribute('id'));

// Set attributes
document.getElementById('app-title').title = 'Shopping List'
document.getElementById('app-title').setAttribute('class', 'title');


const title = document.getElementById('app-title');


// Get/change content
console.log(title.textContent);
title.textContent = 'Hello World'
title.innerText = 'Hello Again';
title.innerHTML = '<strong>Shopping List</strong>'


// change styles
title.style.color = 'blue';


// document.querySelector()
// selects only single elements
console.log(document.querySelector('h1'));
console.log(document.querySelector('#app-title'));
console.log(document.querySelector('.container'));
console.log(document.querySelector('li:nth-child(2)').style.color='red');

const secondItem = document.querySelector('li:nth-child(2)');

secondItem.style.color = 'blue'
secondItem.innerText = 'Apple Juice'

const button = document.getElementById('clear');

button.innerHTML = 'Delete';
button.style.color = 'red'
button.style.fontSize = '22px'