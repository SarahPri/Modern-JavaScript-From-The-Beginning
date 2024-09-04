const itemInput = document.getElementById('item-input');

const onKeyPress = (e) => {
    console.log('keypress');

};


const onKeyDown = (e) => {
    //key
    // console.log(e.key);


    //testing for a certain key
    // if (e.key === 'Enter'){
    // alert('You pressed Enter Key')}


    // keyCode
    // https://www.toptal.com/developers/keycode/table-of-all-keycodes
    // if(e.keyCode === 13){
    //    alert('You Pressed enter')

    // }




    //code
    if (e.code === 'Digit1'){
        console.log('You pressed 1');
    }

};





// itemInput.addEventListener('keypress', onKeyPress )
itemInput.addEventListener('keypress', onKeyDown )
