/*

Logical operators are one of the most important parts of the syllabus.

Here is what we have to know:

    == Equal to
    != Not equal to (values are not equal)

    === Equal to (value AND datatype)
    !== Not equal to (values OR datatype are not equal)

    > Greater than
    >= Greater than or equal to
    < Less than
    <= Less than or equal to

    && Logical AND (will be explained later)
    || Logical OR (will be explained later)

*/

// For example, let's set the following values:

var X = 5;
var Y = 10;

console.log(X == 5);
// This will return True.

console.log(X == Y);
// This will return False, since they are not equal in value.

console.log(X === Y);
// This will also return False, since they are not equal in value, even though they are the same datatype.

console.log(X != 6);
// This will return True, since X is not equal to 6.

console.log(X != Y);
// This will return True, since they are different.

console.log(Y >= 10);
// This will return True. All the mathematical operators should make sense.

// --------------------------------  //

// Logical AND and Logical OR are used as follows:
// (statement_1) && (statement_2), if both statements/conditions are True, it will return True.
// (statement_1) || (statement_2), if either of statements/conditions are True, it will return True.

console.log(X >= 5 && Y == 10);
// This will return True.

console.log(X > 5 && Y == 10);
// This will return False, since one condition is not True.

console.log(X >= 5 || Y == 10);
// This will return True, since both of the conditions are true.

console.log(X > 5 || Y == 10);
// This will return True, since one of the conditions is true.

// --------------------------------  //

/* 

    This is called the Ternary Operator, and it is a smaller IF- statement which we will learn
    about later

*/

//  variable name  condition    true_code : false_code
var TernaryOperator = (Y > 10) ? "True":"False"

// You can set code to run on whether the condition is true or false, so when we do:
console.log(TernaryOperator)

// We will get False, since Y is NOT greater than 10.