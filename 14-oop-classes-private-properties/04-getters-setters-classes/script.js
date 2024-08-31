class Person{
    constructor(firstName, lastName){
        this._firstName = firstName;
        this._lastName = lastName;
    }

    get firstName(){
        // return this._firstName.charAt(0).toUpperCase() + this._firstName.slice(1); // first effort
        return this.capitalizeFirst(this._firstName) //using function
    }

    set firstName(value){
        // this._firstName = value.charAt(0).toUpperCase() + value.slice(1); 
        this._firstName = this.capitalizeFirst(value);
    }


    get lastName(){
        return this.capitalizeFirst(this._lastName) 
    }

    set lastName(value){    
        this._firstName = this.capitalizeFirst(value);
    }

    //Create a function to avoid repetition
    capitalizeFirst(value){
        return value.charAt(0).toUpperCase() + value.slice(1); 

    }
}

const person1 = new Person("john", "doe")
console.log(person1.firstName);

person1.firstName = 'joe';
console.log(person1);

console.log(person1.lastName);