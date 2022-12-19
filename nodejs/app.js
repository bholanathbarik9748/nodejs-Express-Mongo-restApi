// module are 3 type 

// 1 . File Base module
// *** module which is done by File System

const express = require('express') // import dependencies
// const a = require('./index'); // simple exports

const {
    a,
    b,
    c
} = require('./index'); //destructuring

console.log(a, b);
c.average(1, 2);
c.percentage(1, 2);


// 2 . Build In Base Module
// *** module which is no need to download (javascript be link : Just you it)
const fs = require('fs') // we did not import fs
fs.readFile('sample.txt', (err, res) => {
    if (err) {
        console.log(err);
    } else {
        console.log(res.toString());
    }
});

const sy = fs.readFileSync('sample.txt', 'utf-8');
console.log(sy);
console.log("after Sync")

// create File using FS
const createFile = "second File";
fs.writeFile("./sample1.txt", createFile, () => { //similarly writeFileSync work
    console.log("yo");
});

// 3. third Party Modules
// module which is you need to download before use
const pokemon = require('pokemon');
console.log(pokemon.all());


// create Server
const http = require('http');
const PORT = 3000;
const hostname = "localhost";

const home = fs.readFileSync("./index.html", "utf-8"); // Read HTML Files

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end(home);
    } else if (req.url === "/about") {
        res.end("<h1>About Page</h1>");
    } else {
        res.end("<h1>Page not Fouand</h1>");
    }
});

server.listen(PORT, "localhost", () => {
    console.log(`server Start in http://${hostname}:${PORT}`)
});