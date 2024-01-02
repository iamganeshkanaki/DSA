arr = [5,3,1,2,4];


let temp = 0;
for(let i = 0; i <= arr.length; i++){    
    for(let j = 0; j <= arr.length; j++){
        if(arr[i] > arr[j + 1]){
            temp = arr[i];
        }
    }
    arr[i] = temp;
}
console.log(arr)