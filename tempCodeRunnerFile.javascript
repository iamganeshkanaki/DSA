s = "javascript";
let n = s.length;
let vowel = [];
let setVowel = ('a' || 'i' || 'e' || 'o' || 'u')
for (let i = 0; i < n; i++) {
  if (s[i] === setVowel) {
    console.log(s[i]);
  }
}

