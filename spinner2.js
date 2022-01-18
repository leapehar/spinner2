
process.stdout.write('hello from spinner1.js... \rheyyy\n');

let arr = ['\r|   ', '\r/   ', '\r-   ', '\r\\\    ', '\r|   ', '\r/   ', '\r-   ', '\r\\\    ', '\r|   '];
let delay = 100

for (let i = 0; i < arr.length; i++) {
  setTimeout(() => {
    process.stdout.write(arr[i]);
  }, delay);

  delay += 200;

}



// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\\    ');
// }, 700);


// // ... fill in the rest yourself ...

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r|  ');
// }, 900);
