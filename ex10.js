// Exercise 10: Write a function `convertToCamelCase` that takes a string
// with words separated by spaces or underscores, and returns the string in camelCase format.
// Example: convertToCamelCase("hello_world") should return "helloWorld".
     function convertToCamelCase(str) {
        let words = str.split(/[_ ]/);
        for (let i = 1; i < words.length; i++) {
            words[i] =words[i][0].toUpperCase() + words[i].slice(1);

        }
        return words.join("");
     }
console.log(convertToCamelCase("hello_world")); // Expected output: "helloWorld"
console.log(convertToCamelCase("hello_elmer")); // Expected output: "helloWorld"
console.log(convertToCamelCase("hello_Everyone")); // Expected output: "helloWorld"
console.log(convertToCamelCase("hello_friends")); // Expected output: "helloWorld"
