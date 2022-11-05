// Part 1

// 1. 2 == “2”; true
// 2. 2 === 2; true
// 3. 10 % 3; 1
// 4. 10 % 3 === 1; true
// 5. true && false; false
// 6. false || true; true
// 7. true || false; true

// Part 2

// let isLearning = true;
// if(isLearning){
//   console.log("Keep it up!");
// } else {
//   console.log("Pretty sure you are learning....");
// }

// 1. What should the above code console.log?
// "Keep it up!"
// 2. Why do we not need to specify if(isLearning === true)? Why does if(isLearning) work on its own?
// true is a boolean, and since anything can only be truthy or falsey, there isn't the need for the specificity of '==='.
// Since there are only a handful of falsey values, isLearning is truthy (true) simply by existing.

// Part 3

// 1. Write an if statement that console.log’s “Over 0.5” if Math.random returns a number greater than 0.5.
//Otherwise console.log “Under 0.5”.

// if (Math.random() >= 0.5) {
//     console.log('Over 0.5')
// } else {
//     console.log ('Under 0.5')
// }

// 2. What is a falsey value? List all the falsey values in JavaScript.

// A falsey value is something that is inherently false.  The only falsey values are:
// false
// null
// NaN
// undefined
// 0
// "" (empty string with no space)
