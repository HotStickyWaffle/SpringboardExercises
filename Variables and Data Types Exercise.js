// 1. Create the following variables

const name = 'Nick Salvemini';
const dayOfBirth = 6;

// 2. See what happens when you have multiple variables of the same name. Which one takes precedence?

// If you're using 'const' to define the variable, creating another variable of the same name won't work
// If youre using 'let', defining the same variable again will change it to the new defined value

// 3. Write some JavaScript that prompt’s the user for their favorite color. Once the user has submitted a favorite color, log that color to the console along with a friendly message.

let favoriteColor = prompt('Enter your favorite color');
console.log(`Hey, I love the color ${favoriteColor}`);

// 4. Create a string that contains both single quotes and double quotes.

let string = 'Michelle said "What\'s up?"'

// 5. What is the difference between null and undefined?

// Null is a primitive type that represents a value that you assign that means there is no value.
// Undefined is primitive type that is automatically applied to things that have not yet been asigned any value.

// 6. What is NaN in JavaScript? What is the typeof NaN?

// The 'typeof' of NaN is a number.  It represents the value of something not being a number.

// 7. You can declare a variable by typing let thing;. What is the value of thing?

// thing will be undefined.