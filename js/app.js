'use strict';

// console.log('hello people')
//Question 1
let username = prompt('What is your name stranger?');

alert('welcome ' + username + '!');
alert('Please answer the following questions with yes or no.');

//Question 2
let answerOne = prompt('Do you think I live in Seattle?').toLowerCase();

if(answerOne === 'yes' || answerOne === 'y') {
  console.log('You are correct! I live in Seattle!');
  alert('You are correct! I live in Seattle!');
} else if (answerOne === 'no' || answerOne === 'n') {
  alert('nope');
} else {
  alert('can you at least play along?');
}

//Question 3
let codeNow = prompt('Am I a software developer?').toLowerCase();

if(codeNow === 'yes' || answerOne === 'y') {
  console.log('You are right! Love to code!');
  alert('You are right! Love to code!');
} else if (codeNow === 'no' || codeNow === 'n') {
  alert('Nope, not right.');
} else {
  alert('Be a good sport.');
}

//Question 4
let workBro = prompt('Do I like anime?').toLowerCase();

if(workBro === 'yes' || workBro === 'y') {
  console.log('You know it, my favorite would be Naruto.');
  alert('Yup! Love me some Naruto');
} else if (workBro === 'no' || workBro === 'n') {
  alert('I mean, very close.');
} else {
  alert('ehh, guess you didn'/'t know');
}

//Question 5
let codeFellow = prompt('Do I study at Code Fellows?');

if(codeFellow === 'yes' || codeFellow === 'y') {
  console.log('you know it!');
  alert('Yup, learning the industry secrets!');
} else if (codeFellow === 'no' || codeFellow === 'n') {
  alert('guess I learned on the fly!');
} else {
  alert('You might as well put something in.');
}

alert('Well thanks for answering all my questions ' + username + ' hope you enjoy my page!');


