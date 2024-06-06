// No Users

let usernames: string[] = ["Admin", "Ammar", "Aamir", "Ali", "Usman"];

if (usernames.length === 0) {
  console.log("We need to find some users!");
} else {
  for (let i = 0; i < usernames.length; i++) {
    if (usernames[i] === "Admin") {
      console.log("Hello admin, would you like to see a status report?");
    } else {
      console.log(`Hello ${usernames[i]}, thank you for logging in again.`);
    }
  }
}

usernames.length = 0;

console.log(`The list is now empty: ${usernames}`);
