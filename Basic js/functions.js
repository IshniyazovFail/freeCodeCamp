/* Write Reusable JavaScript with Functions
Create a function called reusableFunction which prints the string Hi World to the dev console.
Call the function. */

function reusableFunction() {
console.log("Hi World");
}
reusableFunction();

/* Passing Values to Functions with Arguments
Create a function called functionWithArgs that accepts two arguments and outputs their sum to the dev console.
Call the function with two numbers as arguments. */
function functionWithArgs(a,b) {
   console.log(a+b);
}
functionWithArgs(10,5);

/* Return a Value from a Function with Return
Create a function timesFive that accepts one argument, multiplies it by 5, and returns the new value. */

function timesFive(num){
   return num *5;
}

// Assignment with a Returned Value
// Call the processArg function with an argument of 7 and assign its return value to the variable processed.
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}
processed = processArg(7);


