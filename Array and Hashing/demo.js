s = "javascriptLoop";
let n = s.length;

let setVowel = /^[aeiouAEIOU]$/;
for (let i = 0; i < n; i++) {
    if (setVowel.test(s[i])) {
        console.log(s[i])
    }    
}

for (let i = 0; i < n; i++) {
    if (!setVowel.test(s[i])) {
        console.log(s[i])
    }    
}






