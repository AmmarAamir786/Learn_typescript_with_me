// More Conditional Tests

let myname: string = "Ammar";

console.log("Is myname === 'Ammar'? I predict True.");
console.log(myname === "Ammar");

console.log("Is myname === 'ammar'? I predict False.");
console.log(myname === "ammar");

// Tests using the lower case function
let word: string = "HELLO";

console.log("Is word.toLowerCase() == 'hello'? I predict True.");
console.log(word.toLowerCase() === "hello");

console.log("Is word.toLowerCase() == 'Hello'? I predict False.");
console.log(word.toLowerCase() === "Hello");

// Numerical tests involving equality and inequality
let x = 10;
let y = 5;

console.log("Is x > y? I predict True.");
console.log(x > y);

console.log("Is x < y? I predict False.");
console.log(x < y);

console.log("Is x >= y? I predict True.");
console.log(x >= y);

console.log("Is x <= y? I predict False.");
console.log(x <= y);

// Tests using "and" and "or" operators
let a = 15;
let b = 20;
let c = 25;

console.log("Is a < b and b < c? I predict True.");
console.log(a < b && b < c);

console.log("Is a < b and b > c? I predict False.");
console.log(a < b && b > c);

console.log("Is a < b or b > c? I predict True.");
console.log(a < b || b > c);

console.log("Is a > b or b > c? I predict False.");
console.log(a > b || b > c);

// Test whether an item is in an array
let fruits = ["apple", "banana", "orange"];

console.log("Is 'apple' in the fruits array? I predict True.");
console.log(fruits.includes("apple"));

console.log("Is 'grape' in the fruits array? I predict False.");
console.log(fruits.includes("grape"));

// Test whether an item is not in an array
console.log("Is 'grape' not in the fruits array? I predict True.");
console.log(!fruits.includes("grape"));

console.log("Is 'apple' not in the fruits array? I predict False.");
console.log(!fruits.includes("apple"));
