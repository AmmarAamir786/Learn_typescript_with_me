// Name Cases

let myname: string = "ammar";

// For Lower case
let lowercase: string = myname.toLowerCase();
console.log(`Lower Case= ${lowercase}`);

// For Upper case
let uppercase: string = myname.toUpperCase();
console.log(`Upper Case= ${uppercase}`);

// For Title Case
let firstletter: string = myname.slice(0, 1);
let restletters: string = myname.slice(1, myname.length);

console.log(`Title Case= ${firstletter.toUpperCase() + restletters.toLowerCase()}`);