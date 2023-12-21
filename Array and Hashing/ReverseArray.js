"use strict";
let arr = [2,3,4,5,1];
let l = arr.length - 1
let x = []
for(let i = 0; i <= l; i++){
    x.push(arr.pop());
}

console.log(x);
