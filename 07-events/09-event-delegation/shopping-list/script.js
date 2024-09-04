//Event Delegation & Multiple Events

// Method 1
const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul')

// listItems.forEach(item => {
//     item.addEventListener('click', (e) => {
//         e.target.remove();
//     });
// });

list.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI'){
        e.target.remove();
    }
})

// mouse over
list.addEventListener('mouseover', (e) => {
    if (e.target.tagName === 'LI'){
        e.target.style.color = 'blue';
    }
})