//Parent class
class Shape{
    constructor(name){
        this.name = name;
        
    }
    logName(){
        console.log('Shape Name: ' + this.name);
    }
}

//subclass
class Rectangle extends Shape{
    constructor(name, width, height){
        super(name); //whenever you extend a class you wanna pass in super and pass in any arguments that it is going to take in 


        this.height = height;
        this.width = width;      
    }
}

class Circle extends Shape{
    constructor(name, radius){
        super(name);

        this.radius = radius;
    }

    //polymorphism
    logName(){
        console.log('Circle Name: ' + this.name);
    }
}


class Square extends Shape{
    constructor(name, width, height){
        super(name);
        this.width=width;
        this.height = height;

    }
    logName(){
        console.log('Square Name: ' + this.name);
    }

    area(){
        return this.width * this.height
    }

    
}



const rect = new Rectangle('Rectangle 1', 20, 30);
console.log(rect.name);
rect.logName()


const cir = new Circle('Circle 1', 27);
console.log(cir);
cir.logName()

const squ = new Square('Square 1', 20, 20);
console.log(squ.area());
squ.logName()