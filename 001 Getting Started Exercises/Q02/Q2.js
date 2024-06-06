"use strict";
// Name Cases
let myname = "ammar";
// For Lower case
let lowercase = myname.toLowerCase();
console.log(`Lower Case= ${lowercase}`);
// For Upper case
let uppercase = myname.toUpperCase();
console.log(`Upper Case= ${uppercase}`);
// For Title Case
let firstletter = myname.slice(0, 1);
let restletters = myname.slice(1, myname.length);
console.log(`Title Case= ${firstletter.toUpperCase() + restletters.toLowerCase()}`);
