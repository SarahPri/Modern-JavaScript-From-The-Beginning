//Nested Functions

function first(){
    const x = 100;

    function second(){
        const y = 200;
        console.log(x + y);
    }

    second();
}
first();

//Blocks
if (true) {
    const x = 100;

    if (x === 100){
        const y = 800;
        console.log(x + y);
    }
    // console.log(y);// you can't access this here
}