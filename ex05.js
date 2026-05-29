// Exercise 5: Write a function `countConsonants` that takes a string
// and returns the number of consonants in the string.
// Example: countConsonants("hello world") should return 7.
 function countConsonants(str) {
    let count = 0;
    let vowels = ["a", "e", "i", "o", "u"];
    for (let char of str.toLowerCase()) {
        if (char >= "a" && char <= "z" && !vowels.includes(char)) {
            count++; 
        }
    }
    return count;
 }
console.log(countConsonants("hello world")); // Expected output: 75