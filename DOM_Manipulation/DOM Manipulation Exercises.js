// Select the section with an id of container without using querySelector.

let container = document.getElementById('container');

// Select the section with an id of container using querySelector.

let containerQuery = document.querySelector('#container');

// Select all of the list items with a class of “second”.

let secondLis = document.querySelectorAll('.second');

// Select a list item with a class of third, but only the list item inside of the ol tag.

let thirdOfOl = document.querySelector('ol .third');

// Give the section with an id of container the text “Hello!”.

containerQuery.innerText = 'Hello!';

// Add the class main to the div with a class of footer.

let main = document.querySelector('.footer');
main.classList.add('main');

// Remove the class main on the div with a class of footer.

main.classList.remove('main');

// Create a new li element.

let newLi = document.createElement('li');

// Give the li the text “four”.

newLi.innerText = 'four';

// Append the li to the ul element.

let ul = document.querySelector('ul');
ul.append(newLi);

// Loop over all of the lis inside the ol tag and give them a background color of “green”.

let orderedListItems = document.querySelectorAll('ol li');
for (let lis of orderedListItems) {
    lis.style.backgroundColor = 'green';
}

// Remove the div with a class of footer

let footerUl = document.querySelector('.footer');
footerUl.remove();