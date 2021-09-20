var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('start');

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

  startBtn.onclick = countdown;






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