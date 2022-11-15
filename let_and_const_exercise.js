// ES5 Global Constants

var PI = 3.14;
PI = 42; // stop me from doing this!
// ES2015 Global Constants

/* Write an ES2015 Version */
const PI = 3.14;
PI = 42;


// Quiz
// What is the difference between var and let?
// Variable defined with var can be redeclared, while let cannot (both can be reassigned). Var also declares through an entire function, while let only applies within it's codeblock.
// 
// What is the difference between var and const?
// Variable defined with var can be redeclared and reassigned, while const cannot do either. Var also declares through an entire function, while const only applies within it's codeblock.
// 
// What is the difference between let and const?
// let can be reassigned, while const can't.
// 
// What is hoisting?
// With var, the variables are declared before any code runs.  let and const are not hoisted, so they are declared based on the order they are written, which prevents you from succesfully refrencing the variable earlier in the code than it is declared.
// 