const input = require("prompt-sync")();
function TwoSum(arr, target) {
    let sum = 0, res = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            sum = arr[i] + arr[j];
            if (sum === target) {
                res.push(i);
                res.push(j);
            }
        }
    }
    return res;
}




let container = [0, -1, 2, -3, 1], target = -2;

console.log(TwoSum(container, target));
