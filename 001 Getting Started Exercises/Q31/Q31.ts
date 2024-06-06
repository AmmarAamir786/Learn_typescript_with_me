// Checking Usernames

let current_users: string[] = ["Ammar", "Aamir", "Ali", "Usman", "Hamza"];
let new_users: string[] = ["Ammar", "AAMIR", "Franz", "Kafka", "Marcus"];

for (let i = 0; i < new_users.length; i++) {
  let new_username = new_users[i].toLowerCase();
  let old_username = current_users[i].toLowerCase();

  if (new_username === old_username) {
    console.log(
      `This username: ${new_users[i]} is already in use. Please enter another username`
    );
  } else {
    console.log(`This username: ${new_users[i]} is available`);
  }
}
