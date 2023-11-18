let numGuess = 1;
let totalgusses = 10;
let randomNum = parseInt(Math.random() * 100 + 1);
let prevGuess = [];
let playgame = true;

const startGameBtn = document.querySelector('#startGameBtn');
const userInput = document.querySelector('.guessField');
const submit = document.querySelector('.guessSubmit');
const prevGuesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');
const totalAttempt = document.querySelector('#totalAttempt');
const restartbtn = document.createElement('button');

startGameBtn.addEventListener('click', (e) => {
    let hideGame = document.getElementById('hideGame');
    hideGame.style.display = 'block';
    if (prevGuess.length != 0) {
        alert('are you sure you want to restart ?');
        restart();
    }
});

let difficultyRadios = document.getElementsByName('difficulty');
difficultyRadios.forEach((radiobtn) => {
    radiobtn.addEventListener('change', (e) => {
        totalgusses = e.target.value;
        totalAttempt.innerHTML = totalgusses;
        lastResult.innerHTML = totalgusses;
     })   
});

if (playgame) {
    userInput.focus();
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
        userInput.focus();
    }
    else if (numGuess >= totalgusses && guess != randomNum) {
            displayGuess(guess);
            prevGuess.push(guess);
            showMessage(`game over..! correct number was ${randomNum}`);
            endGame();
    }
    else if (prevGuess.includes(guess)){
            userInput.value = '';
            userInput.focus();
            alert('You have already guessed this number. Try a different one!');
    }
    else {    
        displayGuess(guess);
        prevGuess.push(guess);
        isGuessCorrect(guess);
    }
}

function isGuessCorrect(guess) {
    if (guess === randomNum){
        showMessage(`Congratulations! You guessed the correct number!`);
        celebrateWin();
        endGame();
    } else if (guess < randomNum) {
        showMessage(`Your guess is too low! Try a higher number.`);
    } else {
        showMessage(`Your guess is too high! Try a lower number.`);
    }  
}

function displayGuess(guess) {
    userInput.value = '';
    userInput.focus();
    if (prevGuess.length == 0)
        prevGuesses.innerHTML += `${guess}`;
    else 
        prevGuesses.innerHTML += `, ${guess}`;
    lastResult.innerHTML = `${totalgusses - numGuess}`;
    numGuess++;
}

function showMessage(showMessage) {
    lowOrHi.innerHTML = `<h2>${showMessage}</h2>`;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    restartbtn.classList.add('button');
    restartbtn.className = 'startGameBtn';
    restartbtn.innerHTML = '<span id="newGame">Restart</span>';
    startOver.appendChild(restartbtn);
    playgame = false;
    newGame();
}

function newGame() {
    const newGamebtn = document.querySelector('#newGame');
    newGamebtn.addEventListener('click', (e) => {
        e.preventDefault();
        randomNum = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        lastResult.innerHTML = totalgusses;
        totalAttempt.innerHTML = totalgusses;
        prevGuesses.innerHTML = '';
        lowOrHi.innerHTML = '';
        userInput.removeAttribute('disabled');
        startOver.removeChild(restartbtn);
        playgame = true;
        userInput.focus();
    })
}

function restart() {
        randomNum = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        lastResult.innerHTML = totalgusses;
        totalAttempt.innerHTML = totalgusses;
        prevGuesses.innerHTML = '';
        lowOrHi.innerHTML = '';
        playgame = true;
        userInput.focus();
}

function celebrateWin() {
    const celebrationDiv = document.querySelector('.celebration');
    celebrationDiv.style.display = 'block';

    // Hide the celebration after 5 seconds
    setTimeout(() => {
        celebrationDiv.style.display = 'none';
    }, 5000);

    Swal.fire({
        title: 'Congratulations!',
        text: 'You guessed the correct number!',
        icon: 'success',
        confirmButtonText: 'Restart'
    }).then((result) => {
        if (result.isConfirmed) {
            restart(); // Reset the game on 'OK' click
            userInput.removeAttribute('disabled');
            startOver.removeChild(restartbtn);
        }
    });
}

