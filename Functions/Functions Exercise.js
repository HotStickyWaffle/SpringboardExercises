// 1. difference
// this function takes in two parameters and returns the difference of the two;
// difference(2,2); // 0
// difference(0,2); // -2

function difference(num1, num2) {
    return num1 - num2
}

//---------------------------------------------------------------------------------------------------
// 2. product
// this function takes in two parameters and returns the product of the two;
// product(2,2); // 4
// product(0,2); // 0

function product(num1, num2) {
    return num1 + num2
}

//---------------------------------------------------------------------------------------------------
// 3. printDay
// this function takes in one parameter (a number from 1-7) and returns the day of the week (1 is Sunday, 2 is Monday, 3 is Tuesday etc.). If the number is less than 1 or greater than 7, the function should return undefined;
// printDay(4); // "Wednesday"
// printDay(41); // undefined

function printDay(day) {
    switch (day) {
        case 1: return 'Sunday';
            break;
        case 2: return 'Monday';
            break;
        case 3: return 'Tueday';
            break;
        case 4: return 'Wednesday';
            break;
        case 5: return 'Thursday';
            break;
        case 6: return 'Friday';
            break;
        case 7: return 'Satday';
            break;
    }
}

//---------------------------------------------------------------------------------------------------
// 4. lastElement
// this function takes in one parameter (an array) and returns the last value in the array. It should return undefined if the array is empty.
// lastElement([1,2,3,4]); // 4
// lastElement([]); // undefined

function lastElement(arr) {
    return arr[arr.length - 1]
}

//---------------------------------------------------------------------------------------------------
// 5. numberCompare
// this function takes in two parameters (both numbers). If the first is greater than the second, this function returns “First is greater”. If the second number is greater than the first, the function returns “Second is greater”. Otherwise the function returns “Numbers are equal”
// numberCompare(1,1); // "Numbers are equal"

// numberCompare(2,1); // "First is greater"

// numberCompare(1,2); // "Second is greater"

function numberCompare(num1, num2) {
    if (num1 > num2) {
        return 'First is greater'
    }
    else if (num1 < num2) {
        return 'Second is greater'
    }
    else {
        return 'Numbers are equal'
    }
}

//---------------------------------------------------------------------------------------------------
// 6. singleLetterCount
// this function takes in two parameters (two strings). The first parameter should be a word and the second should be a letter. The function returns the number of times that letter appears in the word. The function should be case insensitive (does not matter if the input is lowercase or uppercase). If the letter is not found in the word, the function should return 0.
// singleLetterCount('amazing','A'); // 2
// singleLetterCount('Rithm School','o'); // 2

function singleLetterCount(word, letter) {
    total = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i].toLowerCase() === letter.toLowerCase()) {
            total++
        }
    }
    return total
}

//---------------------------------------------------------------------------------------------------
// 7. multipleLetterCount
// this function takes in one parameter (a string) and returns an object with the keys being the letters and the values being the count of the letter.
// multipleLetterCount("hello"); // {h:1, e: 1, l: 2, o:1}
// multipleLetterCount("person"); // {p:1, e: 1, r: 1, s:1, o:1, n:1}

function multipleLetterCount(str) {
    let object = {};
    for (let i = 0; i < str.length; i++) {
        object[str[i]] = i + 1;
    }
    return object
}

//---------------------------------------------------------------------------------------------------
// 7. arrayManipulation
// this function should take in at most four parameters (an array, command, location, and value).
// If the command is “remove” and the location is “end”, the function should remove the last value in the array and return the value removed. (In this case, the function only needs three arguments.)
// If the command is “remove” and the location is “beginning”, the function should remove the first value in the array and return the value removed. (In this case, the function only needs three arguments.)
// If the command is “add” and the location is “beginning”, the function should add the value (fourth parameter) to the beginning of the array and return the array.
// If the command is “add” and the location is “end”, the function should add the value (fourth parameter) to the end of the array and return the array.
// arrayManipulation([1,2,3], "remove", "end"); // 3

// arrayManipulation([1,2,3], "remove", "beginning"); // 1

// arrayManipulation([1,2,3], "add", "beginning", 20); // [20,1,2,3]

// arrayManipulation([1,2,3], "add", "end", 30); // [1,2,3,30]

function arrayManipulation(arr, comm, loc, val) {
    if (comm === 'remove' && loc === 'end') {
        let popped = arr.pop();
        return popped;
    } else if (comm === 'remove' && loc === 'beginning') {
        let shifted = arr.shift();
        return shifted;
    } else if (comm === 'add' && loc === 'beginning') {
        arr.unshift(val);
        return arr;
    } else if (comm === 'add' && loc === 'end') {
        arr.push(val);
        return arr;
    }
}

//---------------------------------------------------------------------------------------------------
// 8. isPalindrome
// A Palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This function should take in one parameter and returns true or false if it is a palindrome. As a bonus, allow your function to ignore whitespace and capitalization so that isPalindrome(‘a man a plan a canal Panama’); returns true
// isPalindrome('testing'); // false

// isPalindrome('tacocat'); // true

// isPalindrome('hannah'); // true

// isPalindrome('robert'); // false

//   THIS RETURNS FALSE EVERY TIME, AND I'M NOT SURE WHY

function isPalindrome(pal) {
    let pal2 = pal.replace(' ', '');
    let pal3 = pal2.toLowerCase();
    for (let i = 0; i < pal3.length; i++) {
        for (let j = pal3.length - 1; j >= 0; j--) {
            if (pal3[j] !== pal3[i]) {
                return false
            }
        }
    }
    return true
}
