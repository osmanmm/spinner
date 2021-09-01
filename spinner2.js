process.stdout.write('hello from spinner2.js... \rheyyy\n');
let increment = 100;

let spinner = ["\r|   ", "\r/   ", "\r-   ", "\r\\   "];

for (const r of spinner) {
  setTimeout(() => {
    process.stdout.write(r);
  }, increment)
  increment += 200;
 }
