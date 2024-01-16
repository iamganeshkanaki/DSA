function isAnagram(s, t) { 
    let flag = true;     
    if (s.length !== t.length) {
        console.log("Not a Anagram")
    }
    else {        
        for (let i = 0; i < s.length; i++) {
            if(s[i] != t[i]){
                console.log("Not a Anagram")
                return false
            }
        }        
    }    
}
let s = "anagram";
let t = "nagaram";

isAnagram(s.split("").sort(),t.split("").sort());
