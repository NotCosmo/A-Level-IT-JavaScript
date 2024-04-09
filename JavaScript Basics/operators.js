/*

Operators are what we use to sometimes control or compare different variables/values.

It goes much deeper than that, however I don't know how to explain.

Full coverage is beyond syllabus, so we will only go over what we need.

*/

// Addition
/*

NOTE: Be very careful with the '+' sign as JS thinks of it in two ways.

If you are doing it with two variables that are numbers, it will add them.

However if they are strings, it will concatenate them (join them together)

*/

function JoinTogether(text1, text2) {
    console.log(text1 + text2);
}

JoinTogether("Hello", "World")
// This will output:
// HelloWorld

function add(a, b) {
    console.log(a+b);
}

add(2,5);
// This will output 7.

// All of the mathematical operators follow the same pattern:
/*

    + Addition
    - Subtract
    * Multiplication
    / Division

*/

// --------------------------------  //

// Increment and decrement

/*

For counter/iterative variables, there are two ways to increment and decrement:

*/

var i = 0;

// These will do the exact same thing.
i = i + 1;
i++;

//And the same follows with decrement:
i = i - 1;
i--;

// --------------------------------  //

/* 

Modulus (or remainder) can be used to get the remainder when you are dividing two numbers.

*/

var x = 15 % 12;

// This will return 3.