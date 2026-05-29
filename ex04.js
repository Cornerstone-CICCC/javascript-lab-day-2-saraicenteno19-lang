// Exercise 4: Write a function `mostFrequentChar` that takes a string and returns the character
// that appears the most times. If there is a tie, return the first character that reaches the maximum frequency.
// Example: mostFrequentChar("javascript") should return "a".

    function mostFrequentChar(word) {
        const characters = {};
        for (const char of word) {
            characters[char] = (characters[char] || 0) + 1;
        }
        let mostFrequent = '';
        let currentMax = 0;
        for (const char in characters) {
            if (characters[char] > currentMax) {
                mostFrequent = char;
                currentMax = characters[char];
            }
        }
        return mostFrequent;
    }
console.log(mostFrequentChar("javascript")); // Expected output: "a"