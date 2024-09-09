let s1 = Symbol("description")
let s2 = Symbol("description")

console.log(s1 === s2); // false

const symbolKey = Symbol('description of symbolKey')

const obj = {
    key1: 'value1',
    key2: 'value2',
    [symbolKey] : 'value'
}

console.log(obj[symbolKey])
console.log(symbolKey)

for (const i in obj) {
    console.log(i); // "key1" "key2"
}

/* Well-known symbols */
let myArray = []
console.log(Object.getOwnPropertySymbols(Object.getPrototypeOf(myArray)))
// [ Symbol(Symbol.iterator), Symbol(Symbol.unscopables) ]


/* Global symbol registry */
let symbol3 = Symbol.for("desc") // creates a new symbol
let symbol4 = Symbol.for("desc") // retrieves the existing symbol

console.log(symbol3 === symbol4); // true

console.log(Symbol.keyFor(symbol3)) // desc


