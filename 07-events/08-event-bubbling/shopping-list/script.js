const button = document.querySelector('form button');
const div = document.querySelector('form div:nth-child(2)')
const form = document.querySelector('form');


button.addEventListener('click', () => {
    alert('The button was clicked')
})

div.addEventListener('click', ()=>{
    alert('Div was Clicked')
})

form.addEventListener('click', ()=>{
    alert('Form was Clicked')
})

document.body.addEventListener('click', () => {
    alert('Body Was Clicked');
})