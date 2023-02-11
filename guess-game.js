let numberOfTurns = 1;

let randomNumber = Math.floor(Math.random () * 100) + 1;
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHigh');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let resetButton;

function checkGuess () {
    const userGuess = Number(guessField.value);

 if (numberOfTurns === 1) {
    guesses.textContent = 'Previous guesses: ';
 }
    guesses.textContent += `${userGuess} `;

    if (userGuess === randomNumber) {
        lastResult.textContent = 'Congratulations! Your guess was right!';
        lastResult.style.backgroundColor = 'green';
        lastResult.style.fontSize ="20px";
        lowOrHigh.textContent = '';
        setGameOver();
    }

else if (numberOfTurns === 10) {
    lastResult.textContent = 'Your turns are over!';
    lowOrHigh.textContent = '';
    setGameOver();
    }
    
else {
    lastResult.textContent = 'Wrong guess!';
    lastResult.style.backgroundColor ='red';
    lastResult.style.fontSize = '20 px';
        
    if (userGuess < randomNumber) {
        lowOrHigh.textContent = 'Your guess was too low';
    } else if (userGuess > randomNumber) {
        lowOrHigh.textContent = 'Your guess was too high';
    }
    }

    numberOfTurns++;
    guessField.value = '';
    guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.append(resetButton);
    resetButton.addEventListener('click', resetGame);
    
}

function resetGame () {
    numberOfTurns = 1;

    const resetParas = document.querySelectorAll('.resultParas p');
    for (const resetPara of resetParas) {
        resetPara.textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgroundColor = 'white';
    
    randomNumber = Math.floor(Math.random() * 100) + 1;

}


