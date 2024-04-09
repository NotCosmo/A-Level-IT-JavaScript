/*

This file is meant as a start guide to JavaScript, it will explain the basics of
JavaScript the simple syntax.

NOTE: Java and JavaScript are two DIFFERENT programming languages. We are using JavaScript, not Java.

First we will go over the basics of comments (what this message is)

*/

// --------------------------------  //

// To add a comment, simply put the two slashes and you can type what you want.
console.log("Hello World");

/*

For a longer message, use a slash and a star as a prefix, and the opposite as a suffix.

*/

// --------------------------------  //

// Variables can be set using the 'var' keyword. 

// String datatype
var price = "$2.00";

// Integer datatype
var Price = 2;

// This is an ARRAY or a LIST of items
var fruits = ['Apple', 'Banana', 'Orange']

// An array can also be created as follows:
var Fruits = new Array('Apple', 'Banana', 'Orange')


// Constants can be defined with the 'const' keyword.
// These values CANNOT be changed, whereas variable values can be changed.
const g = 9.81;
const h = 0.313;

// You can print variables (or text/numbers) using the console.log() built-in function

console.log("Hello") // this will output "Hello"
console.log(g) // this will output our value of g from above.

// --------------------------------  //

/*

Arrays can be weird to understand, as the number of items in an array start from 0.

    position:   0         1         2
var Fruits = ['Apple', 'Banana', 'Orange']

*/

// position:    0         1         2
var Fruits = ['Apple', 'Banana', 'Orange']

// To get an item from an array, use square brackets.
// This will set the value of 'fruit' to Apple.
var fruit = Fruits[0];

// This will output 'Orange'
console.log(Fruits[2])

// --------------------------------  //

/* 

Functions are in essence just blocks of code that can be executed only when called
(calling a function means letting it run, this will be explained shortly)

*/

// 'add' is the name of the function, and 'a' and 'b' are the arguments.
function add(a, b) {

    // This will give back the value of a + b
    return console.log(a + b);
};

// The above block of code will not do anything unless it is called:
add(2, 4); // Always check that the name of the function is correct, you may get errors otherwise.