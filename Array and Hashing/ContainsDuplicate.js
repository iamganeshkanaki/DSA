let arr = [1,2,3,1];
let res = [],flag = false;

for(let i = 0; i <= arr.length; i++){
    for(let j = i + 1; j <= arr.length; j++){
        if(arr[i] === arr[j]){
            flag = true;
        }
    }
}

if(flag){
    console.log("Contains Duplicate Values.");
}else{
    console.log("Not a Duplicate Values.");
}