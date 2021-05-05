'use strict';

// // console.log('hello people')
// //Question 1
let username = prompt('What is your name stranger?');
let scoreBoard = 0;

alert('welcome ' + username + '!');
alert('Please answer the following questions with yes or no.');

// // //Question 2

function q2(){
  let answerOne = prompt('Do you think I live in Seattle?').toLowerCase();
  if(answerOne === 'yes' || answerOne === 'y') {
    console.log('You are correct! I live in Seattle!');
    alert('You are correct! I live in Seattle!');
    scoreBoard++;
  } else if (answerOne === 'no' || answerOne === 'n') {
    alert('nope');
  } else {
    alert('can you at least play along?');
  }
}
q2();

// // //Question 3

function q3(){
  let codeNow = prompt('Am I a software developer?').toLowerCase();
  if(codeNow === 'yes' || answerOne === 'y') {
    console.log('You are right! Love to code!');
    alert('You are right! Love to code!');
    scoreBoard++;
  } else if (codeNow === 'no' || codeNow === 'n') {
    alert('Nope, not right.');
  } else {
    alert('Be a good sport.');
  }
q3();

// // //Question 4
function q4(){
  let workBro = prompt('Do I like anime?').toLowerCase();
  if(workBro === 'yes' || workBro === 'y') {
    console.log('You know it, my favorite would be Naruto.');
    alert('Yup! Love me some Naruto');
    scoreBoard++;
  } else if (workBro === 'no' || workBro === 'n') {
    alert('I mean, very close.');
  } else {
    alert('ehh, guess you didn'/'t know');
  }
}
q4();

// // //Question 5
function q5(){
  let codeFellow = prompt('Do I study at Code Fellows?');
  if(codeFellow === 'yes' || codeFellow === 'y') {
    console.log('you know it!');
    alert('Yup, learning the industry secrets!');
    scoreBoard++;
  } else if (codeFellow === 'no' || codeFellow === 'n') {
    alert('guess I learned on the fly!');
  } else {
    alert('You might as well put something in.');
  }
}
q5();

// alert('Well thanks for answering all my questions ' + username + ' hope you enjoy my page!');

// //Question 6
// //Using a loop to describe what vacation spot I would want to og to the most.
// // Add a 6th question to the guessing game that takes in a numeric input by prompting the user to guess a number.
// // Indicates through an alert if the guess is “too high” or “too low”.
// // It should give the user exactly four opportunities to get the correct answer.
// // After all attempts have been exhausted, tell the user the correct answer. Consider using a loop of some sort.
// // let guessedNumber = +prompt(`Guess a number between 1-50, please enter a numerical whole number please!`);
let guessedNumber;
let correctAnswer1 = 17;
let attemptsAllowed = 4;

alert(`We're going to play a game now! Guess a number between 1-50, please enter a numerical whole number please on the next prompt!`);
for(let i = 0; i < attemptsAllowed; i++) {
  guessedNumber = prompt(`Guess a number!`);
  if (correctAnswer1 === parseInt(guessedNumber)){
    alert(`You Got it!`);
    scoreBoard++;
  }
  else if (correctAnswer1 < guessedNumber) {
    alert(`Guess is too high!`);
  }
  else if (correctAnswer1 > guessedNumber) {
    alert(`your guess is too low!`);
  }
}
// Add a 7th question that has multiple possible correct answers that are stored in an array.
// Give the user 6 attempts to guess the correct answer.
// The guesses will end once the user guesses a correct answer or they run out of attempts.
// Display all the possible correct answers to the user.
// Consider using a loop of some sort for this question.
let attempts = 6;
let monthAnswer = false;

alert('you\'re good, Let\'s see if you can guess my favorite months!');
while(!monthAnswer && attempts){
  let favMonths = ['december', 'march', 'july'];
  let answerFor = prompt('What are my favorite months? here\'s a hint, I have 3 favorite months!');
  attempts--;
  for (let i = 0; i < favMonths.length; i++) {
    if (answerFor === favMonths[i]) {
      alert('You are correct! How did you know??');
      scoreBoard++;
      monthAnswer = true;
    }
  }
}
if (!monthAnswer) {
  console.log('After incorrect month entered');
  alert('Sorry you did not answer correctly. But the correct answers were december, march and july');
}

alert(`Your final score is ${scoreBoard}!`);

//Still Struggling with getting the scoreboard to work.

