const rectanglePrototypes = {
    area: function(){
        return this.width * this.height
    },
    perimeter: function(){
        return 2 * (this.width + this.height)
    },
    isSquare: function(){
        return this.width === this.height
    }
}

function createRectangle(width, height){
    return Object.create(rectanglePrototypes, {
        width: {
            value: width
        },
        height: {
            value: height
        },
    });
}

const rect = createRectangle(30, 20);
console.log(rect.perimeter());
console.log(rect.area());
console.log(rect.isSquare());

const rect2 = createRectangle(60, 60)
console.log(rect2.area());
console.log(rect2.perimeter());
console.log(rect2.isSquare());