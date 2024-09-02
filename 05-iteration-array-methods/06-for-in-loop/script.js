const colorObj = {
    color1:'red',
    color2:'blue',
    color3:'orange',
    color4:'green',
};

for (const key in colorObj){
    console.log(key, colorObj[key]);

}

// For in with array

const colorArr = ["Red", "Blue", "Green", "Yellow"];

for(const color in colorArr){ //color is the key 
    console.log(colorArr[color]);

}