const clearBtn = document.querySelector('#clear');

// Javascript Event Listener

// clearBtn.onclick = function(){
//     alert('Clear Items');
// };
// clearBtn.onclick = function(){
//     console.log('Clear Items');
// };

// Add event Listener
// clearBtn.addEventListener('click', function(){
//     alert('Clear Items')
// })

// clearBtn.addEventListener('click', function(){
//     console.log('Clear Items')
// })


// shorthand
// clearBtn.addEventListener('click', () => alert('clear Items'));


// removing an event listener

// function onClear(){
//     alert('Clear Items');
// }

// clearBtn.addEventListener('click',onClear);

// setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000)
    
// setTimeout(() => clearBtn.click(), 5000 )


// clear the ul items
// function onClear(){
//     const itemList = document.querySelector('ul');

//     itemList.innerHTML = '';
// }

// clearBtn.addEventListener('click', onClear);


// The most performant way to delete items on list

function onClear(){
    const itemList = document.querySelector('ul');

    while(itemList.firstChild){
        itemList.removeChild(itemList.firstChild)
    }
}

clearBtn.addEventListener('click', onClear);