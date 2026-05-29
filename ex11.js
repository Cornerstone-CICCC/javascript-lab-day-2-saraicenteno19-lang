// Exercise 11: Write a function `countWordOccurrences` that takes a string and a word,
// and returns the number of times the word appears in the string.
// Example: countWordOccurrences("hello world hello", "hello") should return 2.
      function countWordOccurrences(str, word) {
        let words = str.split (" ");
        let count = 0;

        for (let i = 0; i < words.length; i++) {
            if (words [i] === word) {
                count ++;
            }
        }

        return count;
      }
console.log(countWordOccurrences("hello world hello", "hello")); // Expected output: 2
