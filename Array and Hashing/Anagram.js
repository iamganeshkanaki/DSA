function isAnagram(s, t) { 
    let flag = true;     
    if (s.length !== t.length) {
        flag = false;
    }
    else {        
        for (let i = 0; i < s.length; i++) {
            if(s[i] != t[i]){
                flag = false;
            }
        }                
    }    
    if(flag){
        console.log("It is an Anagram");
    }else{        
        console.log("Not a Anagram")
    }
}
let s = "anagram";
let t = "nagaram";

isAnagram(s.split("").sort(),t.split("").sort());
