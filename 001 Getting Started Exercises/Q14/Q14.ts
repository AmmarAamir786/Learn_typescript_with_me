// Changing Guest List

let guests: string[] = ["Ammar", "Aamir", "Ali", "Usman"];

for (let i = 0; i < guests.length; i++) {
  console.log(`${guests[i]}, you are invited to my party`);
}

console.log("Unfortunately Mr. Aamir wont be joining us");

guests.splice(1, 1, "Umar");

for (let i = 0; i < guests.length; i++) {
  console.log(`${guests[i]}, you are invited to my party`);
}
