function insertAfter(newEl, existingEl){
    existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling)

}

// New element ti insert
const li = document.createElement('li');
li.textContent = 'Insert Me After!';


// Existing element to insert after
const firstItem = document.querySelector
('li:first-child');

// Our Custom function
insertAfter(li, firstItem)