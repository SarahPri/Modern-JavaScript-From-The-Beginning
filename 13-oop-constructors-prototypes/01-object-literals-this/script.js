const rectangle ={
    name:"Rectangle 1",
    width: 10,
    height: 10,
    area: function (){
       return this.width * this.height
    }
    // area: () => {}
};
// console.log(rectangle.name);
console.log(rectangle.area());