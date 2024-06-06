// Large Shirts

function make_shirt(size: string = "large", message = "I love TypeScript") {
  console.log(`Your Size: ${size}. Your Message: ${message}`);
}

make_shirt();
make_shirt("Medium");
make_shirt("Small", "I dont like tsc");