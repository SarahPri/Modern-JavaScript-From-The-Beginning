
const logo = document.querySelector('img');

const onClick = () => console.log('Click Event');
const onDoubleClick = () => {
    if (document.body.style.backgroundColor !== 'blue'){
        document.body.style.backgroundColor = 'blue';
        document.body.style.color = 'white';
    }else{
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    }
}

const onRightClick = () => console.log('Right Clicked');

const onMouseDown = () => console.log('On Mouse Down event');

const onMouseUp = () => console.log('On Mouse Up');
const onMouseWheel = () => console.log('On Mouse Wheel Event');
const onMouseOver = () => console.log('On Mouse over  Event');
const onMouseOut = () => console.log('On Mouse out Event');
const onDragStart = () => console.log('On Drag Start Event');
const onDrag = () => console.log('On Drag Stop Event');
const onEnd = () => console.log('On Drag End Event');










// Event Listeners
logo.addEventListener('click', onClick)
logo.addEventListener('dblclick', onDoubleClick)
logo.addEventListener('contextmenu', onRightClick) //right click
logo.addEventListener('mousedown', onMouseDown) //click mouse and hold
logo.addEventListener('wheel', onMouseWheel) //release mouse
logo.addEventListener('mouseover', onMouseOver) //release mouse
logo.addEventListener('mouseout', onMouseOut) //release mouse
logo.addEventListener('dragstart', onDragStart) //release mouse
logo.addEventListener('dragend', onEnd) //release mouse