const path = require('path');

// *** Path Module Methods ***

// Base file name
console.log(path.basename(__filename));

// Directory name
console.log(path.dirname(__filename));

// File extension
console.log(path.extname(__filename));

// Create path object -- path.parse(path_string) returns a parsed object of the path_string
console.log(path.parse(__filename));

// Concatenate paths together -- helpful for handling delimiters when running app on other OS
console.log(path.join(__dirname, 'test', 'hello.html'));