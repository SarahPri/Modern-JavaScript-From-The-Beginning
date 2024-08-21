
(function () {
    const user = "Lucy";
    console.log(user);
    const hello = () =>console.log('Hello from the IIFE');
    hello();
})();

//Adding parameters to your IIFE
(function(name){
    console.log('Hello ' + name);

})('Betty')