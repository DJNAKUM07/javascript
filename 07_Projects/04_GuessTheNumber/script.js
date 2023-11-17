let randomNum = parseInt(Math.random() * 100 + 1);
console.log(randomNum);

const userInput = document.querySelector('.guessField');
const submit = document.querySelector('.guessSubmit');
const prevGuesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');
let prevGuess = [];
let numGuess = 1;
let playgame = true;

if (playgame) {
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}

function validateGuess(guess) {
    if (guess === '' || isNaN(guess) || guess < 0 || guess > 100) {
        alert('Enter valid guess.');
        userInput.value = '';
    }
    else {
        displayGuess(guess);
        if (numGuess > 10) {
            showMessage(`game over..! correct number was ${randomNum};`);
            endGame();
        }
        else {
            if (prevGuess.includes(guess)) {
                userInput.value = '';
                alert('already guessed !. enter another number..');
                return;
            }
            else {    
                prevGuess.push(guess);
                isGuessCorrect(guess);
            }
        }
    }
}

function isGuessCorrect(guess) {
    if (guess === randomNum){
        showMessage(`your guess it correct !!`);
        endGame();
        }
    else if (guess < randomNum)
        showMessage(`your guess it too Low !`);
    else
        showMessage(`your guess it too high !`);  
}

function displayGuess(guess) {
    userInput.value = '';
    prevGuesses.innerHTML += `${guess}, `;
    lastResult.innerHTML = `${10 - numGuess}`;
    numGuess++;
}

function showMessage(showMessage) {
    lowOrHi.innerHTML = `<h2>${showMessage}</h2>`;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = '<h2 id="newGame">start again</h2>';
    startOver.appendChild(p);
    playgame = false;
    newGame();
}

function newGame() {
    const newGamebtn = document.querySelector('#newGame');
    newGamebtn.addEventListener('click', (e) => {
        randomNum = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        lastResult.innerHTML = 10;
        prevGuesses.innerHTML = '';
        lowOrHi.innerHTML = '';
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playgame = true;
    })
}