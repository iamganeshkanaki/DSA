"use strickt";
let input;
try {
    input = require("prompt-sync")();
} catch (err) {
    console.log("Error module not found");
}
// let l = parseInt(input("Enter length of Array:"));
let arr = [1, 6, 3, 4, 6, 6];
let l = arr.length;
let rcount = 0;
for (let i = 0; i <= l; i++) {
    for (let j = i; j <= l; j++) {
        if (arr[i] === arr[j + 1]) {
            rcount += 1
        }
    }
}
console.log(rcount)
// console.log("Array:", arr);