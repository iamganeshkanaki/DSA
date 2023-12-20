/* Check Largest and Smallest number from array. */
/*
    arr[i] is compare with arr[n-1]
    i++ 
    same process will repeat util expected Output.    
 */

let array = [4,5,2,3,1]
let lgst = array[0]
let smlt = array[0]
let i = 0;
while(i <= array.length){
    if(lgst <= array[i+1]){
        lgst = array[i+1]
    }
    if(smlt >= array[i+1]){
        smlt = array[i+1]
    }
    i++;
}
console.log(`Smallest No:${smlt} \nLarget No:${lgst}`);