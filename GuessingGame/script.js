let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;
let targetNumber = 0;

// Write your code below:

const generateTarget = () => {
    targetNumber = Math.floor(Math.random() * 10);
    return targetNumber; 
}

const compareGuesses = (humanGuess, computerGuess, targetNumber ) => {

    if (humanGuess < 0 || humanGuess > 9) {
        alert('Please choose a number between 0 and 9!');
    }
    else {
        if (getAbsoluteDistance(humanGuess, targetNumber) <= getAbsoluteDistance(computerGuess, targetNumber)) {
            return true;
        }
        else {
            return false;
        }
    }
}

const updateScore = winner => {
    if (winner === 'human') {
        humanScore ++;
    }
    else if (winner === 'computer') {
        computerScore ++;
    }
}

const advanceRound = () => {
    currentRoundNumber ++;
}

const getAbsoluteDistance = (guess, target) => {
    const distance = Math.abs(target - guess);
    return distance;
}

