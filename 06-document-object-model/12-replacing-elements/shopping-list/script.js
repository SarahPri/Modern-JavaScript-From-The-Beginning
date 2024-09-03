function replaceFirstItem(){
    const  firstItem = document.querySelector('li:first-child');

    const li = document.createElement('li');
    li.textContent = 'Replaced Apples First Element';

    firstItem.replaceWith(li)
}


function replaceSecondItem(){
    const secondItem = document.querySelector('li:nth-child(2)')

    secondItem.outerHTML = '<li>Replaced Second Item</li>';
}

replaceFirstItem();
replaceSecondItem()