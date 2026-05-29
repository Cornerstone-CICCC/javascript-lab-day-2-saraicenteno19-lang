// Exercise 6: Write a function `getQueryParams` that takes a URL string and returns
// an object containing the query parameters as key-value pairs.
// Example: getQueryParams("https://example.com?search=test&page=2")
// should return { search: "test", page: "2" }.


    function getQueryParams(url) {
        let params = {};
        let queryString = url.split("?")[1];
        let pairs = queryString.split("&");
        for (let pair of pairs) {
            let [key, value] = pair.split("=");
            params[key] = value;
        }
        return params;
    }
console.log(getQueryParams("https://example.com?search=test&page=2")); // Expected output: { search: "test", page: "2" }