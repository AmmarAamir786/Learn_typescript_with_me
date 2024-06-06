"use strict";
// Shrinking Guest List
// initial list
let guests = ["Ammar", "Aamir", "Ali", "Usman"];
for (let i = 0; i < guests.length; i++) {
    console.log(`${guests[i]}, you are invited to my party`);
}
// Replacing a guest
console.log("Unfortunately Mr. Aamir wont be joining us");
guests.splice(1, 1, "Umar"); // Replacing Aamir with Umar
for (let i = 0; i < guests.length; i++) {
    console.log(`${guests[i]}, you are invited to my party`);
}
// Adding more guests
console.log("I found a bigger dinner table, so now more space is available");
guests.unshift("Humza"); //adding guest in start
guests.splice(3, 0, "Waqas"); //adding guest in mid
guests.push("Kashif"); //adding guest in the end
for (let i = 0; i < guests.length; i++) {
    console.log(`${guests[i]}, you are invited to my party`);
}
// Removing all guests till two guests remain
console.log("My new dinner table will not arrive in time for the dinner, I only have space for two guests.");
for (let i = guests.length - 1; i >= 2; i--) {
    let removedguests = guests.pop();
    console.log(`${removedguests}, sorry I can not invite you`);
}
for (let i = 0; i < guests.length; i++) {
    console.log(`${guests[i]}, you are still invited to my party`);
}
// Removing everyone
guests.pop();
guests.pop();
console.log(`Final list: ${guests}`);
