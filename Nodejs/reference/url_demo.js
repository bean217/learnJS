const url = require('url');

// *** URL Module Methods ***

const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');

// Get Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

// Get Host (root domain)
console.log(myUrl.host);

// Get Hostname (does not get port)
console.log(myUrl.hostname);

// Get Pathname (gives actual file)
console.log(myUrl.pathname);

// Gets Serialized query parameters as a string
console.log(myUrl.search);

// Gets query parameters as an object
console.log(myUrl.searchParams);

// Adds a parameter to url query params
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

// Loop through parameters
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));