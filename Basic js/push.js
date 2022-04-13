// Push ["dog", 3] onto the end of the myArray variable.
const myArray = [["John", 23], ["cat", 2]];

myArray.push(["dog", 3]);

// Manipulate Arrays With pop()
// Use the .pop() function to remove the last item from myArray and assign the popped off value to a new variable, removedFromMyArray.

const removedFromMyArray = myArray.pop();

// Manipulate Arrays With shift()
// Use the .shift() function to remove the first item from myArray and assign the "shifted off" value to a new variable, removedFromMyArray.

const removedFromMyArray = myArray.shift();

// Manipulate Arrays With unshift()
// nshift() works exactly like .push(), but instead of adding the element at the end of the array, unshift() adds the element at the beginning of the array.
myArray.unshift(["Paul", 35]);
