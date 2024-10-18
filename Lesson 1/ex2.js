// global scope variable example
var x = 1;

console.log("value of x (after declaration): " + x); // expected output: 1

if (x == 1) {
    var x = 5; 
    console.log("value of x (in if statement): " + x); // expected output: 5
}

console.log("value of x (after the if statement): " + x); // expected output: 5

// local scope variable example
let y = 1;

console.log("value of y (after declaration): " + y); // expected output: 1

if (y == 1) {
    let y = 10; 
    console.log("value of y (in if statement): " + y); // expected output: 10
}

console.log("value of y (after the if statement): " + y); // expected output: 1