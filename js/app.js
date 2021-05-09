'use strict';
let username = prompt('What is your name stranger?');
let scoreBoard = 0;

let arrayOfQuestions = [
  ['Do you think I work at Apple?', 'Do you think I live in Seattle?', 'Am I a software developer?', 'Do I like anime?', 'Do I study at Code Fellows?']
];
let arrayOfAnswers = [
  ['yes', 'y', 'no', 'n']
];
let arrayOfReturns = [
  ['You are correct! I work at Apple!', 'I actually do work at Apple', 'You are a samsung person huh.',], 
  ['You are correct! I live in Seattle!', 'Nope', 'Can you at least play along?'],
  ['You are right! Love to code!', 'Nope, not right.', 'Be a good sport.'],
  ['Yup! Love me some Naruto', 'I mean, very close.', 'ehh, guess you didn'/'t know'],
  ['Yup, learning the industry secrets!', 'guess I learned on the fly!', 'You might as well put something in.']
];

alert('welcome ' + username + '!');
alert('Please answer the following questions with yes or no.');

function q1(){
  let answerOne = prompt(arrayOfQuestions[0][0]).toLowerCase();
  if(answerOne === arrayOfAnswers[0][0] || answerOne === arrayOfAnswers[0][1]) {
    alert(arrayOfReturns[0][0]);
    scoreBoard++;
  } else if (answerOne === arrayOfAnswers[0][2] || answerOne === arrayOfAnswers[0][3]) {
    alert(arrayOfReturns[0][1]);
  } else {
    alert(arrayOfReturns[0][2]);
  }
}
q1();
function q2(){
  let answerTwo = prompt(arrayOfQuestions[0][1]).toLowerCase();
  if(answerTwo === arrayOfAnswers[0][0] || answerTwo === arrayOfAnswers[0][1]) {
    alert(arrayOfReturns[1][0]);
    scoreBoard++;
  } else if (answerTwo === arrayOfAnswers[0][2] || answerTwo === arrayOfAnswers[0][3]) {
    alert(arrayOfReturns[1][1]);
  } else {
    alert(arrayOfReturns[1][2]);
  }
}
q2();

function q3(){
  let codeNow = prompt(arrayOfQuestions[0][2]).toLowerCase();
  if(codeNow === arrayOfAnswers[0][0] || codeNow === arrayOfAnswers[0][1]) {
    alert(arrayOfReturns[2][0]);
    scoreBoard++;
  } else if (codeNow === arrayOfAnswers[0][2] || codeNow === arrayOfAnswers[0][3]) {
    alert(arrayOfReturns[2][1]);
  } else {
    alert(arrayOfReturns[2][2]);
  }
}
q3();

function q4(){
  let workBro = prompt(arrayOfQuestions[0][3]).toLowerCase();
  if(workBro === arrayOfAnswers[0][0] || workBro === arrayOfAnswers[0][1]) {
    alert(arrayOfReturns[3][0]);
    scoreBoard++;
  } else if (workBro === arrayOfAnswers[0][2] || workBro === arrayOfAnswers[0][3]) {
    alert(arrayOfReturns[3][1]);
  } else {
    alert(arrayOfReturns[3][2]);
  }
}
q4();
function q5(){
  let codeFellow = prompt(arrayOfQuestions[0][4]).toLowerCase();
  if(codeFellow === arrayOfAnswers[0][0] || codeFellow === arrayOfAnswers[0][1]) {
    // console.log('you know it!');
    alert(arrayOfReturns[4][0]);
    scoreBoard++;
  } else if (codeFellow === arrayOfAnswers[0][2] || codeFellow === arrayOfAnswers[0][3]) {
    alert(arrayOfReturns[4][1]);
  } else {
    alert(arrayOfReturns[4][2]);
  }
}
q5();

let guessedNumber;
let correctAnswer1 = 17;
let attemptsAllowed = 4;
function q6(){
  alert('We\'re going to play a game now! Guess a number between 1-50, please enter a numerical whole number please on the next prompt!');
  for(let i = 0; i < attemptsAllowed; i++) {
    guessedNumber = prompt('Guess a number!');
    if (correctAnswer1 === parseInt(guessedNumber)){
      alert('You Got it!');
      scoreBoard++;
      break;
    }
    else if (correctAnswer1 < guessedNumber) {
      alert('Guess is too high!');
    }
    else if (correctAnswer1 > guessedNumber) {
      alert('your guess is too low!');
    }
  }
}
q6();
let attempts = 6;
let monthAnswer = false;
function q7(){
  alert('Let\'s see if you can guess my favorite months!');
  while(!monthAnswer && attempts){
    let favMonths = ['december', 'march', 'july'];
    let answerFor = prompt('What are my favorite months? here\'s a hint, I have 3 favorite months!').toLowerCase();
    attempts--;
    for (let i = 0; i < favMonths.length; i++) {
      if (answerFor === favMonths[i]) {
        alert('You are correct! How did you know??');
        alert('You\'re good');
        scoreBoard++;
        monthAnswer = true;
        break;
      }
    }
    if (!monthAnswer) {
      console.log('After incorrect month entered');
      alert('Sorry you did not answer correctly.');
    }
  }
}
q7();

alert('But the correct answers were december, march and july');
alert(`Your final score is ${scoreBoard}!`);

