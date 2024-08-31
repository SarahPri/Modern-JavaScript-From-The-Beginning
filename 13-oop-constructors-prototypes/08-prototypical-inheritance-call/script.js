function Shape(name) {
    this.name = name;
}

Shape.prototype.logName = function(){
    console.log(`Shape Name: ${this.name}`);
}


function Rectangle(name, height, width){
    Shape.call(this, name);
    this.width = width;
    this.height = height;
}

// Inherits Shape Prototypes
Rectangle.prototype = Object.create(Shape.prototype)

function Circle(name, radius){
    Shape.call(this, name);
    this.radius = radius;
    
}

// Inherits Shape Prototypes
Circle.prototype = Object.create(Shape.prototype)


const rect = new Rectangle('Rectangle 1', 20, 20);
// console.log(rect);
rect.logName()

const cir = new Circle('Circle 1', 27);
// console.log(cir);
cir.logName()