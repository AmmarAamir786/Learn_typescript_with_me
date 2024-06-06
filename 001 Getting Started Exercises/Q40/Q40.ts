// Magicians

function show_magicians(Magicians: string[]) {
  for (let i = 0; i < Magicians.length; i++) {
    console.log(`${Magicians[i]}`);
  }
}

let Magicians: string[] = ["Houdini", "Chris Angel", "Doctor Strange"];
show_magicians(Magicians);
