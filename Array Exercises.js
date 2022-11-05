const people = ["Greg", "Mary", "Devon", "James"];

// 1. Write the command to remove “Greg” from the array.
people.shift();

// 2. Write the command to remove “James” from the array.
people.pop();

// 3. Write the command to add “Matt” to the front of the array.
people.unshift('Matt');

// 4. Write the command to add your name to the end of the array.
people.push('Nick');

// 5. Write the command to make a copy of the array using slice. The copy should NOT include “Mary” or “Matt”.
const newPeople = people.slice(2);

// 6. Write the command that gives the indexOf where “Mary” is located.
people.indexOf('Mary');

// 7. Write the command that gives the indexOf where “Foo” is located (this should return -1).
people.indexOf('Foo');

// 8. Redefine the people variable with the value you started with. 
// Using the splice command, remove “Devon” from the array and add “Elizabeth” and “Artie”. 
// Your array should look like this when you are done [“Greg”, “Mary”, “Elizabeth”, “Artie”, “James”].
people.pop();
people.pop();
people.pop();
people.pop();
people.push('Greg', 'Mary', 'Devon', 'James');
people.splice(2, 1, 'Elizabeth', 'Artie')

// 9. Create a new variable called withBob and set it equal to the people array concatenated with the string of “Bob”.
const withBob = people.concat('Bob');