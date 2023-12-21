"use strickt";
const input = require("prompt-sync")();
let arr = [];
let l = parseInt(input("Enter a Length of Array: "));
for (let i = 0; i < l; i++) {
    arr.push(parseInt(input("Enter a Element of Array: ")));
}
let sdlgn = arr[0];
let lgn = arr[0];
let sml = arr[0];

for (let j = 0; j < l; j++) {
    if (lgn <= arr[j + 1]) {
        lgn = arr[j + 1];
    }
    if(sml >= arr[j + 1]){        
        sml = arr[j + 1];
    }

    if(arr[j] > sml && arr[j] < lgn){
        sdlgn = arr[j];
    }
}
console.log(lgn);
console.log(sml);
console.log(sdlgn);


