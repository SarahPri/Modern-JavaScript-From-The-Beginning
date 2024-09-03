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
function removeFirstItem(){
    const ul = document.querySelector('ul')
    const li = document.querySelector('li:nth-child(2)')

    ul.removeChild(li)
}
removeFirstItem()