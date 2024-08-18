const x = 100;
console.log(x, 'in Global');


function run(){
    console.log(window.innerHeight);
    console.log(x, 'In Function');
}
run()

if (true){
    console.log( x, 'in block');
}

//function scoped

function add(){
    const y = 50;
    console.log(y); 
    console.log(x + y); // = 150
    
}
// console.log(y); //can not be accessed here
add()