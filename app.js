// Michael_Clautice, Richmond, VA
// The Net Ninja - Node JS Tutorial for Beginners 
// Lesson 09 - Reading & Writing Files (fs)
//-----
const fs = require('fs');

const readMe = fs.readFileSync('readme.txt', 'utf8');
// console.log(readMe);
fs.writeFileSync('writeMe.txt', readMe);

