/*

Conditional operators allow the program to perform different actions depending on a result.

*/

// --------------------------------  //

/*

if (condition) {

    execute this code

}

This will execute the code inside of the IF-statement only *IF* the condition specified is true.

*/

var value = 1;

// This will not do anything since the condition is false.
if (value >= 2) {
    console.log("Value Greater than 2!")
}

// This will output "Value is NOT Greater than 2!" since it is made to execute that
// if the condition given in the IF-statement is false
if (value >= 2) {
    // code is condition is true
    console.log("Value Greater than 2!")
}

else {
    // code if condition is false
    console.log("Value is NOT Greater than 2!")
}

// We can further extend this as follows:

// Tests the first condition
if (value >= 2) {
    // First condition is true
    console.log("Value Greater than 2!")
}

// First condition is false, test the second condition
else if (value <= 1) {
    // Second condition true
    console.log("Value Greater or equal to 1!")
}

else {
    // Second condition false
    console.log("Value is neither.")
}

// --------------------------------  //

/*

Switch statements are very similar to IF-statements, however their syntax is a little different.

switch (variable) {

    case (condition 1): 
        statement(s);
        break;

    case (condition 2):
        statement(s);
        break;

        .
        .
        .

    default:
        statement(s)

}

*/

// Here this is an example for a multiple choice answer code
var StudentAnswer = "B"; // assume we got this as input from the student

switch (StudentAnswer) {

    // This will check whether the variable (StudentAnswer) matches each of the cases, and execute code
    // accordingly.
    case "A":
        console.log("Correct");
        break;

    case "B":
        console.log("Incorrect");
        break;

    case "C":
        console.log("Incorrect");
        break;

    case "D":
        console.log("Incorrect");
        break;

    // Default case in the case that the variable does not equal any of the above cases.
    default:
        console.log("Invalid answer, please pick A, B, C, or D.")
}

// --------------------------------  //

/*

Loops are essentially the same as we learned in AS Pseudocode.

while (condition) {

    execute this code;

} 

do {
    code;
} while (condition);

*/

// Both of these loops will run until counter is equal to 10, and it will output the number.
var counter = 0;
var counter2 = 0;

while (counter <= 10) {
    console.log(counter);
    counter++;
}

do {
    console.log(counter2);
    counter2++;
}   while (counter2 <=10)

// --------------------------------  //

/*

'For' loops are much more compact, however they can be harder to understand.

for (initialise counter; condition; increment counter) {

    code;

}

'For ... in' can be used for arrays

for (fruit in FruitsArray) {
    
    code;

}

*/

// This is the same as the while loop above, however it condenses
// most of the code into one line.

for (counter=0; counter<=10; counter++) {

    console.log(counter);

}

var FruitsArray = ['Apple', 'Orange', 'Banana', 'Mango']


// This will loop through every item in the FruitsArray and set it to the value of 'fruit'
// after that, it will output it.
for (fruit in FruitsArray) {

    console.log(fruit);

}