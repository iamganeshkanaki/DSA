let arr = [12,11,13,5,6];
let temp = 0;
for(let i = 0; i < arr.length; i++){
    while(arr[i] > arr[i + 1]){
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
    }
}
console.log(arr)