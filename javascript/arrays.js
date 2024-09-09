const a = new Array()

const b = new Array(3)
const c = [...Array(3)] 
// const c = Array(3).fill(undefined)
// const c = Array.from({length:3})

console.log(b)
console.log(c)

const arrayLikeObject = {
    length: 4,
    '1': 'hello',
    '3': 'hi'
}

const arr = Array.from(arrayLikeObject)

console.log(arr) // [ undefined, 'hello', undefined, 'hi' ]


const myWeakSet = new WeakSet();
const obj1 = { name: 'Alice' };
let obj2 = { name: 'Bob' };

myWeakSet.add(obj1);
myWeakSet.add(obj2);

console.log(myWeakSet.has(obj1)); // Output: true
obj2 = null
console.log(myWeakSet.has(obj2)); // Output: false

const myWeakMap = new WeakMap();
const key1 = {};
const key2 = {};

myWeakMap.set(key1, 'value1');
myWeakMap.set(key2, 'value2');

console.log(myWeakMap.get(key1)); // Output: value1
myWeakMap.delete(key2);
console.log(myWeakMap.has(key2)); // Output: false

