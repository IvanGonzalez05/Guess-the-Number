const score = document.querySelector('.score');
const input = document.querySelector('.guess');
const btnAgain = document.querySelector('.again')
const btnCheck = document.querySelector('.check');
const message = document.querySelector('.message');
const body = document.getElementsByTagName('body')[0];
const highscore = document.querySelector('.highscore');

// Generating a random number between 0 and 20
let randomNumber = Math.floor(Math.random() * 20);
console.log(`Random Number generated = ${randomNumber}`);

// These two buttons handles the flow of the game
btnCheck.addEventListener('click', () => {
    let inputNumber = getInput();
    let isCorrect = inputIsCorrect(inputNumber);

    if (isCorrect) {
        highscore.innerHTML =setHighscore(score.innerHTML, highscore.innerHTML);
        input.disabled = true;
    }
})

btnAgain.addEventListener('click', () => {
    nextRound();
})

// These are all the methods used in this programs.
function getInput() {
    return parseInt(input.value);
}

function inputIsCorrect(number) {
    console.log(`The number inputted was ${number}`)
    if (number === randomNumber){
        message.innerHTML = 'Correct!'
        body.style.backgroundColor = '#60b347';
        console.log('Well done!');
        return true
    }
    
    if (number < randomNumber){
        message.innerHTML = 'Too Low!'
    }

    if (number > randomNumber){
        message.innerHTML = 'Too High!';
    }
    
    console.log('Try Again!');
    score.innerHTML = reduceScore(score.innerHTML);
    body.style.backgroundColor = 'red';
    return false;
}

function reduceScore(currentScore) {
    intScore = parseInt(currentScore);
    intScore -= 1;
    return intScore.toString();
}

function setHighscore(currentScore, highscore){
    intScore = parseInt(currentScore);
    intHighscore = parseInt(highscore);

    if (intScore > intHighscore){
        return currentScore
    }
    return highscore
}

function nextRound() {
    body.style.backgroundColor = '#222';
    message.innerHTML = 'Start guessing...'
    score.innerHTML = "20";
    input.value = "";
    input.disabled = false;
    randomNumber = Math.floor(Math.random() * 20);

    console.log(`New Random Number = ${randomNumber}`);
}