let output;
// Get child elements from parent

const parent = document.querySelector('.parent');
output = parent.children;
output = parent.children[1].innerText;
output = parent.children[1].className;
output = parent.children[1].nodeName;

parent.children[1].innerText = 'Child Two'
parent.children[1].style.color = 'blue';

parent.firstElementChild.innerText = 'First Child'
parent.firstElementChild.style.color = 'red';

parent.lastElementChild.style.color = 'violet';
parent.lastElementChild.innerText = 'Last Child';
parent.lastElementChild.innerText = 'Last Child';


// Get parent element from the child
const child = document.querySelector('.child');

output = child.parentElement
child.parentElement.style.border = '1px solid #ccc'
child.parentElement.style.padding = '10px'


// Sibling elements
const secondItem = document.querySelector('.child:nth-child(2)')

output = secondItem;
output = secondItem.nextElementSibling.style.color='green';
output = secondItem.previousElementSibling.style.color = 'orange';

console.log(output);
