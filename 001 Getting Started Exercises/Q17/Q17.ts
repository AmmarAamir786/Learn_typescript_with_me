// Seeing the World

// Original List
let favlocations: string[] = ["Japan", "Australia", "Italy", "Spain"];
console.log(`Original List: ${favlocations}`);

// In alphabatical order
let alphaorder = favlocations.slice().sort();
console.log(`Alphabatically: ${alphaorder}`);

// Showing origonal list
console.log(`Original List: ${favlocations}`);

// Reverse Order
let reverseorder = favlocations.slice().sort().reverse();
console.log(`Reverse Order: ${reverseorder}`);

// Showing original list
console.log(`Original List: ${favlocations}`);

// Reversing the order
favlocations.reverse();
console.log(`Order Reversed: ${favlocations}`);

// Reversing back to original
favlocations.reverse();
console.log(`Order Reversed to original: ${favlocations}`);

// Alphabatical order
favlocations.sort();
console.log(`Alphabatically: ${favlocations}`);

// Reverse Alphabatical order
favlocations.sort().reverse();
console.log(`Alphabatically Reverse: ${favlocations}`);
