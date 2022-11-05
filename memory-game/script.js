

const gameContainer = document.getElementById("game");
const button = document.querySelector('button');
let clickedArr = [];

let clicks = 0;
let counter = document.querySelector('#counterNumer');
counter.innerText = clicks;
let highScore = localStorage.highScore;
let highScoreCounter = document.querySelector('#highScoreCounter');
highScoreCounter.innerText = highScore;
if (highScore === undefined) {
  highScoreCounter.innerText = '---';
}
let message = document.querySelector('#message');

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

gameContainer.classList.add('unclickable')
button.addEventListener('click', function () {
  if (!button.classList.contains('restartButton')) {
    gameContainer.classList.remove('unclickable');
    button.classList.add('restartButton');
    button.innerText = 'Restart Game';
    button.style.backgroundColor = 'rgb(127, 37, 5)';
    button.style.borderColor = 'rgb(173, 51, 6)';
  } else {
    window.location.reload();
  }
})

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);


    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}


function matchMessage() {
  message.innerText = 'You got a match!';
  setTimeout(function () {
    message.innerText = ''
  }, 1000)
}

function notMatchMessage() {
  message.innerText = 'Those did not match :(';
  setTimeout(function () {
    message.innerText = ''
  }, 1000)
}

function handleCardClick(event) {
  console.log("you just clicked", event.target);

  clicks += 1;
  counter.innerText = clicks;

  const card = event.target
  const cardColor = card.classList.value;
  const game = document.querySelector('#game');
  const cards = game.querySelectorAll('div');

  if (clickedArr.length === 0) {
    console.log(card, cardColor)
    card.style.backgroundColor = cardColor;
    card.style.backgroundColor = cardColor;
    clickedArr.push(cardColor);
    card.classList.add('checking')
  }
  //***************************************************************
  //*****make this an else, since there aren't any other possibilities
  // *****  in general, just try to minimize code complexity (how often the code it looping through itself
  else if (clickedArr.length !== 0) {
    card.style.backgroundColor = cardColor;
    clickedArr.push(cardColor);
    card.classList.add('checking')
    if (clickedArr[0] !== clickedArr[1]) {
      game.classList.add('unclickable')
      clickedArr = []
      notMatchMessage();
      setTimeout(function () {
        for (let i = 0; i < cards.length; i++) {
          if (cards[i].classList.contains('checking')) {
            cards[i].classList.remove('checking');
            cards[i].style.backgroundColor = null;
          }
        }
        game.classList.remove('unclickable')
      }, 1000)
    }
    //***************************************************************
    //***** better variable names
    //***** try to find spots where you can create a function to minimize repeating code
    //***** remember that you can add a function as a function argument
    else {
      game.classList.remove('unclickable');
      for (let i = 0; i < cards.length; i++) {
        if (cards[i].classList.contains('checking')) {
          cards[i].classList.remove('checking');
          cards[i].classList.add('matched');
        }
      }
      winArr = []
      for (let i = 0; i < cards.length; i++) {
        if (cards[i].classList.contains('matched')) {
          winArr.push(true)
        } else { winArr.push(false) }
      }
      setTimeout(() => {
        if (winArr.indexOf(false) === -1) {
          localStorage.setItem('highScore', clicks);
          window.confirm(`You've won in ${clicks} clicks! Click 'Restart Game' to try again and see if you can beat your best score!`)
        } else { matchMessage() }
      }, 200)
      clickedArr = [];
      // const isMatched = classList.contains('matched')
      // console.log(cards.every(isMatched))
    }
  }

  console.log(cards)

  // for (let i = 0; i < cards.length; i++) {
  //   arr = []
  //   if (cards[i].classList.contains('matched')) {
  //     arr.push(true)
  //   } else { arr.push(false) }
  //   if (arr.indexOf(false) === -1) {
  //     console.log('WIN')
  //   }
  // }
}


// when the DOM loads
createDivsForColors(shuffledColors);

/* */