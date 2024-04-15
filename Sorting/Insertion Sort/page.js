const input = require("prompt-sync")();
let arr = [];
let n = parseInt(input("enter a Size: "));
for (let i = 0; i < n; i++) {
    arr.push(parseInt(input("enter a elements:")));    
}

for (let i = 1; i < arr.length; i++) {    
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] > arr[i]) {
            let temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }
    }
}

console.log(arr);