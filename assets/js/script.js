//beginning of timer section
var timerEl = document.getElementById("countdown");
var quiz = document.getElementById("quiz");
var startBtn = document.getElementById("start")
var score = document.getElementById("scorePage");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var scoreDiv = document.getElementById("scoreContainer");
var submitButton=document.getElementById("submit");
var resultsContainer = document.getElementById('results');
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

const quizQuestions = [
  {
    question: "Commonly used data types DO Not Included:",
    answers: {
    1: " strings",
    2: "booleans", 
    3: "alerts",
    4: "numbers"
  },
    correctAnswer: "1"
  },

  {
    question: "The condition in an if / else statement is enclosed with ________.",
    answers: {
    1: "quotes", 
    2: "curly brackets", 
    3: "parameters",
    4: "square brackets"
  },
    correctAnswer: "1"
  },

  {
    question: "Arrays in JavaScript can be used to store",
    answers: {
    1: "numbers and strings",
    2: "other arrays",
    3: "booleans",
    4: "all of the above"
  },
    correctAnswer: "1"
  },

  {
    question: "String values must be enclosed within __ when being assigned to variables.",
    answers: {
    1: "commas",
    2: "curly brackets",
    3: "quotes", 
    4: "parenthesis"
  },
    correctAnswer: "1"
  },

  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: {
    1: "JavaScript",
    2: "terminal/bash",
    3: "for loops",
    4: "console log"
  },
    correctAnswer: "1"
  }

];

var message = 'You are out of time';
// Timer that counts down from 60
function countdown() {
    var timeLeft = 60;

//Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function() {

    timerEl.textContent= "Time: " + timeLeft //displays the time left


    if (timeLeft === 0) { //stops when the code hits 0 and display message
      clearInterval(timeInterval); //clears and stops the clock
      timerEl.textContent = "" //clears the 0 seconds left our
      displayMessage(); //displays the message

    }
    
    timeLeft-- //subtacts 1 second goes to 0 since it is under the if
    
  } ,1000);
 } //1000 represents how much is subtracted

//end of timer section//
countdown();



//alert("Final Score is " + score + "/" + questions.length);

//end of question section



 //Build quiz start
 function buildQuiz(){

   // variable to store the HTML output
 const output = [];

 
 quizQuestions.forEach(
   (currentQuestion, questionNumber) => {

     // variable to store the list of possible answers
     const answers = [];

     // and for each available answers
     for(letter in currentQuestion.answers){

       //add an HTML radio button
       answers.push(
         `<label>
           <input type="radio" name="question${questionNumber}" value="${letter}">
           ${letter} :
           ${currentQuestion.answers[letter]}
         </label>`
       );
     }

     // add this question and its answers to the output
     output.push(
      `<div class="slide">
        <div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>
      </div>`
    );

   }
 );

 //combine the output list into one string of HTML and put it on the page
 quiz.innerHTML = output.join('');
}
//build quiz end


//begin show results
function showResults() {
  const answerContainers = quiz.querySelectorAll('.answers');

  //keep track of answers
  let numberCorrect = 0;

  // for each question
  quizQuestions.forEach( (currentQuestion, questionNumber) => {

    // find selected answer
    var answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // if answer is correct
    if(userAnswer === currentQuestion.correctAnswer){
      // add to the number of correct answers
      numberCorrect++;

      // color the answers green
      answerContainers[questionNumber].style.color = 'lightgreen';
    }
    // if answer is wrong or blank
    else{
      // color the answers red
      answerContainers[questionNumber].style.color = 'red';
    }
  });


  // show number of correct answers out of total
  resultsContainer.innerHTML = `${numberCorrect} out of ${quizQuestions.length}`;
};



//run the quiz
buildQuiz();

//run functions
submitButton.addEventListener('click', showResults);







//




// Coding Quiz Challenge
//Try to answer the following code related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!
//Q: Commonly used data types DO Not Included:
//1. strings 2. booleans 3. alerts 4. numbers
//Q: The condition in an if / else statement is enclosed with
//1. quotes 2. curly brackets 3. parameters 4. square brackets
//Q: Arrays in JavaScript can be used to store
//1. numbers and strings 2. other arrays 3. booleans 4. all of the above
//Q: String values must be enclosed within __ when being assigned to variables.
//1. commas 2. curly brackets 3. quotes 4. parenthesis
//Q: A very useful tool used during development and debugging for printing content to the debugger is:
//1. JavaScript 2. terminal/bash 3. for loops 4. console log
//All done!
//Your final score is __.
//Enter your initials SUBMIT