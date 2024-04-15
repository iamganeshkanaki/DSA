const input = require("prompt-sync")();
let n = parseInt(input("Enter a Number:"));
let arr = [];
for (let inp = 0; inp < n; inp++) {
    arr.push(parseInt(input("enter a number of array elements:")));
}
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        let temp;
        if (arr[i] > arr[j]) {
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
console.log(arr);