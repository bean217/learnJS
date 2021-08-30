const fs = require('fs');
const path = require('path');

// *** File System Module Methods *** -- FS module uses async methods, but there are sync methods available

// // Create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if (err) throw err;
//     console.log('Folder created...');
// });

// // Create and write to file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', err => {
//     if (err) throw err;
//     console.log('File written to...');
// });

// // Append to file
// fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), '\nFile Append!', err => {
//     if (err) throw err;
//     console.log('File written to...');
// });

// // Read file
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// // Rename file
// fs.rename(
//     path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloworld.txt'), 
//     err => {
//         if (err) throw err;
//         console.log('File renamed...');
//     }
// );