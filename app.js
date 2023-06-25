const path = require('path');
const {pathLog} = require("./test/test");


console.log(__dirname);
console.log(__filename);
console.log(process.cwd());

pathLog();

// -- Join
console.log(path.join(__dirname, 'test', 'controller')); // joining paths

// -- Resolve
console.log(path.resolve('test', 'controller')); // already has dirname

// Normalize
console.log(path.normalize('test\/test////test.js')); // normal form

// Fs
const fs = require('fs');

fs.readFile(path.join(__dirname, 'test', 'test.txt'), {encoding: "utf-8"}, (err, data) => {
    if(err) throw new Error();
    // console.log(data.toString()); or encoding utf-8
    console.log(data);
});

// read file
fs.writeFile(path.join('test', 'test2'), 'Hello from Test2', (err) => {
    if (err) throw new Error(err.message);
    // fs.readFile(path.join('test', 'test2'), {encoding: "utf-8"}, (err, data) => {
    //     console.log(data);
    // });
})

// clears file
// fs.truncate(path.join('test', 'test2'), (err) => {
//     if(err) throw new Error(err.message);
//
// })

// adds info to file
fs.appendFile(path.join('test', 'test2'), 'Hello from Test2 again', (err) => {
    if(err) throw new Error(err.message);
    fs.readFile(path.join('test', 'test2'), {encoding: "utf-8"}, (err, data) => {
        console.log(data);
    });
})

// deletes file
// fs.unlink(path.join('test', 'test2'), (err) => {
//     if(err) throw new Error(err.message);
//
// })

// scans directory
fs.readdir(path.join('test'), {withFileTypes: true},(err, data) => {
    if(err) throw new Error(err.message);
    data.forEach(file => {
        console.log(file.isFile());
    })
    console.log(data);
})

fs.stat(path.join('test', 'test.txt'), (err, stats) => {
    if(err) throw new Error(err.message);
    console.log(stats.isFile());
    console.log(stats.isDirectory());
})

// creates directory
fs.mkdir(path.join('test', 'test3'), (err) => {
    if(err) throw new Error(err.message);

})