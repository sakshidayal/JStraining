/* Before ES6 */

// Declaration and initialization of a variable
var x = 10;
// Dynamic typing: you don't need explicit type declarations

if (true) {
    var y = 20; 
}
console.log(y); // 20 (y is accessible outside of the if block)

function hello() { 
    var z = "hello";
}
// console.log(z); // ReferenceError: z is not defined


/* After ES6 */

// Declaration and initialization with let and const
let a = 10;


if (true){
    let c = 30;
}
// console.log(c); // ReferenceError: c is not defined

// dynamic typing
a = "now I'm a string"; // "string"
console.log(typeof a); 


let firstName = "Margot"

let string = `hi
i'm a multi-line string
My name is ${firstName}`


const MY_CONSTANT = 20;

// MY_CONSTANT = 30; //  TypeError: Assignment to constant variable



let t = true;
console.log(typeof t) // "boolean"

let n = null;
console.log(typeof n) // "object" (this is a historical bug in JavaScript)

let u; // declared, but not initialized
console.log(typeof u) // "undefined"

