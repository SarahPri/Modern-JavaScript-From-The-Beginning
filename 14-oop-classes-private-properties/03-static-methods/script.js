class Rectangle {
  constructor(name, height, width) {
    this.name = name;
    this.height = height;
    this.width = width;
  }
  area(){
    return this.height * this.width;
  }

  static getClass(){
    return 'Rectangle'
  }
}



const rect = new Rectangle('Rectangle 1', 20, 30)
console.log(rect.area());
console.log(Rectangle.getClass());