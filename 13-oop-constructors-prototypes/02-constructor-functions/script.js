function Rectangle(name, width, height){
    this.name = name;
    this.width = width;
    this.height = height;

    //a method
    this.area = function (){
       return this.height * this.width;
    }

    //another method
    this.perimeter = function(){
        return 2 * (this.height + this.width)
    }
}
const rect1 = new Rectangle('Rectangle 1', 10, 10);
const rect2 = new Rectangle('Rectangle 2', 50, 80);

console.log(rect1.area(), rect1.perimeter());
console.log(rect2.area(), rect2.perimeter());

console.log(rect2 instanceof Rectangle);