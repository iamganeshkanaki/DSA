const input = require("prompt-sync")();
let arr = [];
let n = parseInt(input("enter a Size: "));
for (let i = 0; i < n; i++) {
    arr.push(parseInt(input("enter a elements:")));    
}
for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] > arr[min]){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}

console.log(arr)