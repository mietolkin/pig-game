'use strict';

// alert('hello')

const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const currentScoreEl = document.querySelector('.player__current--score');
const activePlayerEl0 = document.querySelector('.player__0');
const activePlayerEl1 = document.querySelector('.player__1');



const btnRollDice = document.querySelector('.buttons__roll-dice');
const btnHold = document.querySelector('.buttons__hold');

score1.textContent = 0;
score0.textContent = 0;
diceEl.classList.add('hidden'); //--------------- remove


const scores = [0, 0]
let currentScore = 0;
let activePlayer = 0;


const switchPlayer = function () {
    diceEl.classList.add('hidden');
    currentScore = 0;
    // currentScoreEl.textContent = 0;
    console.log(`Your score: ${scores[activePlayer]}`)
    document.querySelector(`.player__current--score${activePlayer}`).textContent = currentScore;

    activePlayer = activePlayer === 0 ? 1 : 0;
    activePlayerEl0.classList.toggle('player__active');
    activePlayerEl1.classList.toggle('player__active');
}

btnRollDice.addEventListener('click', function () {



    // rolling dice (generation random number 1-6)
    const randomDice = Math.trunc(Math.random() * 6) + 1;
    console.log(randomDice)







    // display dice (displaying rolled dice)
    diceEl.classList.remove('hidden'); //------------------------ remove

    document.querySelector('.dice').innerHTML = "";

    for (let i = 1; i <= randomDice; i++) {

        console.log(i);

        let dot = document.createElement('div');

        dot.className = 'dice__dot';
        dot.innerHTML = '&ensp;';

        diceEl.appendChild(dot)

    }


    // rolled dice = 1, if true switch to next player

    if (randomDice !== 1) {
        // add score

        currentScore += randomDice;
        console.log(`Your current score is ${currentScore}`)

        document.querySelector(`.player__current--score${activePlayer}`).textContent = currentScore;
        // currentScoreEl.textContent = currentScore; // change latter



    } else {
        switchPlayer();
    }

})


btnHold.addEventListener('click', function () {
    // 1. Add current sccore to active player's score

    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    if (scores[activePlayer] >= 100) {
        document.getElementById(`score--${activePlayer}`).textContent = "You won!";
        const scores = [0, 0];
    }

    // 2. switch  
    switchPlayer();
})


btnNew.addEventListener('click', function () {

    const scores = [0, 0];


})