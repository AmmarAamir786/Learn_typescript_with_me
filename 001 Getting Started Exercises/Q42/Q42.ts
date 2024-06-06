// Unchanged Magicians

function show_magicians(Magicians: string[]) {
  for (let i = 0; i < Magicians.length; i++) {
    console.log(`${Magicians[i]}`);
  }
}

function make_great(Magicians: string[]) {
  for (let i = 0; i < Magicians.length; i++) {
    Magicians[i] = `The great ${Magicians[i]}`;
    console.log(`${Magicians[i]}`);
  }
}

let Magicians: string[] = ["Houdini", "Chris Angel", "Doctor Strange"];

console.log(`Without modification: `);
show_magicians(Magicians);
console.log(`With modification: `);
make_great(Magicians);
