// function removeClearButton(){
//     document.querySelector('#clear').remove();
// }
// removeClearButton();


// =================
// or similar way
// function removeClearButton(){
//     const clearBtn = document.querySelector('#clear');
//     clearBtn.remove();
// }
// removeClearButton();

// ====================
// remove child
// function removeFirstItem(){
//     const ul = document.querySelector('ul')
//     const li = document.querySelector('li:nth-child(2)')

//     ul.removeChild(li)
// }


function removeItem(itemNumber){
    const ul = document.querySelector('ul')
    const li = document.querySelector(`li:nth-child(${itemNumber})`)

    ul.removeChild(li)
}
removeItem(2);