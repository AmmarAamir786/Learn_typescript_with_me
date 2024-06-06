"use strict";
// More Guests
let guests = ["Ammar", "Aamir", "Ali", "Usman"];
for (let i = 0; i < guests.length; i++) {
    console.log(`${guests[i]}, you are invited to my party`);
}
console.log("Unfortunately Mr. Aamir wont be joining us");
guests.splice(1, 1, "Umar");
for (let i = 0; i < guests.length; i++) {
    console.log(`${guests[i]}, you are invited to my party`);
}
console.log("I found a bigger dinner table, so now more space is available");
guests.unshift("Humza"); //adding guest in start
guests.splice(3, 0, "Waqas"); //adding guest in mid
guests.push("Kashif"); //adding guest in the end
for (let i = 0; i < guests.length; i++) {
    console.log(`${guests[i]}, you are invited to my party`);
}
