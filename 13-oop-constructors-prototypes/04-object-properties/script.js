function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
  this.area = function () {
    return this.width * this.height;
  };
}
const rect1 = new Rectangle('Rectangle 1', 20, 20)
const rect2 = new Rectangle('Rectangle 2', 30, 30)

rect2.perimeter = () => 2 *(rect2.width + rect2.height);

console.log(rect1.name, rect2.width); //dot notation
console.log(rect2['name']); // bracket notation

console.log(rect2);

//Add new property
rect1.color = 'red';
console.log(rect1);

// Delete Property
delete rect2.perimeter;
console.log(rect2);

//Check for property
console.log(rect1.hasOwnProperty('color'));
console.log(rect2.hasOwnProperty('color'));

//Get keys of Objects
console.log(Object.keys(rect1));

//Get values of Objects
console.log(Object.values(rect1));

//Get entries of Objects
console.log(Object.entries(rect1));
for (let [key, value] of Object.entries(rect1)) {
  console.log(`${key} - ${value}`);

}

//log objects without function
console.log(Object.entries(rect1));
for (let [key, value] of Object.entries(rect1)) {
  if(typeof value !== 'function'){ 
    console.log(`${key} - ${value}`);
  }

}