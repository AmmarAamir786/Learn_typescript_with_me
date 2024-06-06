// Objects

// Storing books in an array
let favbooks: string[] = ["Meditations", "Discourses", "Horns", "Metaporphoses"];
console.log(`List of my fav books: ${favbooks}`);

// Creating objects
type book = {
  title: string;
  author: string;
  Year: number;
  genre: string;
}

let books: book[] = [
  {
    title: "Meditations",
    author: "Marcus Aurelius",
    Year: 132,
    genre: "Philosophy",
  },
  {
    title: "Discourses",
    author: "Epictitus",
    Year: 200,
    genre: "Philosophy",
  },
  {
    title: "Horns",
    author: "Johnathan Hill",
    Year: 2005,
    genre: "Horror",
  },
  {
    title: "Metaporphoses",
    author: "Franz Kafka",
    Year: 1975,
    genre: "Horror",
  },
];

console.log(books);
