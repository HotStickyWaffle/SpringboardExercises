// countdown
// Write a function called countdown that accepts a number as a parameter and every 1000 milliseconds decrements the value and console.logs it. Once the value is 0 it should log “DONE!” and stop.

function countDown(num) {
    function time() {
        let counter = setInterval(function () {
            console.log(num);
            num--;

            if (num === 0) {
                clearInterval(counter);
                console.log('DONE!')
            }
        }, 1000)
    };
    time();
}

// randomGame
// Write a function called randomGame that selects a random number between 0 and 1 every 1000 milliseconds and each time that a random number is picked, add 1 to a counter. If the number is greater than .75, stop the timer and console.log the number of tries it took before we found a number greater than .75.




let count = 0;
let num = 0;
let int;

function randomize() {
    num = Math.random();
    count++;
    if (num >= .75) {
        clearInterval(int);
        console.log(count)
    }
}

function randomGame() {
    int = setInterval(randomize, 1000);
}


