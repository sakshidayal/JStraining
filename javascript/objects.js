const person = {
    firstName: "John",
    lastName: "Doe",
    displayInformation() {
        console.log(this.firstName + " "+ this.lastName)
    }
}

function Person(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
    // this.displayInformation = function() {
    //     console.log(this.firstName + " "+ this.lastName)
    // }

}

Person.prototype.displayInformation = function() {
    console.log(this.firstName + " "+ this.lastName)
}

// const p1 = new Person("John","Doe")
// p1.displayInformation()

class User {
    constructor(firstName, lastName) {
        this._firstName = firstName
        this._lastName = lastName
    }

    set firstName(value) {
        console.log("setter called")
        this._firstName = value
    }

    get firstName() {
        console.log("getter called")
        return this._firstName
    }

    // creating computed property 
    get fullName() {
        return `${this._firstName} ${this._lastName}`;
    }

    getClassName(){
        return this.constructor.name
    }

}

const u1 = new User("John", "Doe")
console.log(u1.fullName)

class Trainer extends User {
    constructor(firstName, lastName, training) {
        super(firstName, lastName)
        this.training = training
    }
}

console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(u1))))

console.log(u1.getClassName())