/*
    create array from user intput
*/
//create  object for input from keyboard.
const input = require("prompt-sync")();
let lgn = parseInt(input("Enter length of array:"))
let arr = [];
for (let i = 1; i <= lgn; i++) {
    arr.push(parseInt(input(`Enter Element no ${i}: `)));
}   
console.log("Array:", arr);
