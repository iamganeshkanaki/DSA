/*
    In this Program we will going to do Add,Update,new Element and delete Element in Array.
 */

// add a Elements in array.

const input = require("prompt-sync")();
let array = [];
let n = parseInt(input("Enter Length of array:"));
for (let i = 0; i < n; i++) {
    array.push(parseInt(input("Enter Elements:")));
}

let c = 1;

do {
    console.log("Enter no which you want to do:\n 1: Add new Value in Array \n 2: Update Elements \n 3: Delete Element \n 4: Exit: ");
    x = parseInt(input(" Choice: "));
    switch (x) {
        case 1:
            array.splice(parseInt(input("Enter a Position of element: ")), 0, parseInt(input("Enter a value: ")))
            break;
        case 2:
            array.splice(parseInt(input("Enter a Position which want to update: ")),1,parseInt(input("Enter a Element which you want to add:")));
            break;
        case 3:
            array.splice(parseInt(input("Enter a Position which you want to remove: ")),1);
            break;
        case 4:
            c = 0;
            break;

        default:
            console.log("Invalide Choice:");
    }
} while (c == 1);

console.log("Array:", array);