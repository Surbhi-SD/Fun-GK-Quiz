//repl.it link = https://replit.com/@Surbhi-SD/level-1-assignment#index.js

var readlineSync = require("readline-sync");
var score = 0;
var currentLevel = 1;

var userName = readlineSync.question("Enter your name");
console.log("Welcome", userName, "to the quiz! Enter all the answers in lowercase.");
console.log("----------------");
console.log("This is Level", currentLevel);
console.log("----------------");

function quizLevelOne(question, answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer === answer){
    console.log("Correct Answer!");
    score = score + 1;
  }else{
    console.log("The answer is incorrect!!");
  }
}

quizLevelOne("How many days are in a leap year?","366" );
console.log("---------------");
quizLevelOne("Which is the only word in the English language that has no true rhyme?", "orange");
console.log("----------------");
quizLevelOne("What's the capital of Spain?", "madrid");
console.log("----------------");
quizLevelOne("What's the highest mountain in the world?", "mount everest");
console.log("----------------");
quizLevelOne("Where would you find the Golden Gate bridge?", "san francisco");
console.log("----------------");

function nextLevel(score, currentLevel){
  if(score === 5){
    currentLevel = currentLevel + 1;
    console.log("Congrats!!! You can go to the next level.");
  }else{
    console.log("Oops! You didnot score high enough to go to the next level. Try again.")
  }
}