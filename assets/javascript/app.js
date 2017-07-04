
var correctAnswers = ["False", "1989", "1993", "True", "False", "200", "Shigeru Miyamoto", "Carpenter"];
var userAnswers = [];
var unanswered = 0;
var correct = 0;
var incorrect = 0;
var questionNumber = 0;

    function checkQuiz() {
    	//This function gets all the values of the radio button and places those values in an array userAnswers
    	//After this function runs it then runs the functions that check and tally the answers.

        var radio_check_val = "";
        for(i=1; i<(correctAnswers.length+1); i++){
        for (j = 0; j < document.getElementsByName('question' + [i]).length; j++) {
            if (document.getElementsByName('question' + [i])[j].checked) {
                radio_check_val = document.getElementsByName('question' + [i])[j].value;
                userAnswers[questionNumber] = document.getElementsByName('question' + [i])[j].value;
                questionNumber++;


            }

        }
    
}

        checkAnswers();
        printAnswers();
        timer.stopTimer();
    }
    function checkAnswers() {
    	//this function checks the user submitted answers array against the correct answers array

    for(i =0; i<correctAnswers.length; i++){
    	if(userAnswers[i] == correctAnswers[i]){
    		correct++;
    	}
    	else if(userAnswers[i] == undefined){
    		unanswered++;
    	}
    	else{
    		incorrect++;
    	}
    }
}

	function printAnswers(){

		//this function prints the users quiz results to the screen
		$("#radioButtons").html(
			"<div id='answers'><p>Correct Answers: " + correct + "</p>" +
			"<p>Incorrect Answers: " + incorrect + "</p>" +
			"<p>Unanswered Questions: " + unanswered + "</p></div>"
			);
	}

$(document).ready(function() {
	//starts the timer when the page is ready
	timer.start();
})
var intervalId;
var timeVariable;
var timer = {

timeLeft : 30,

  start: function() {
  	//this function starts the interval that runs the count.
 
        intervalId = setInterval(timer.count, 1000);

  },

  count: function() {
  	//the count function counts down the timeLeft variable

    timer.timeLeft--;

    $("#timer").html('<h3>' +timer.timeLeft+ '</h3>');
    //the above line prints the current timeLeft to the screen

    if(timer.timeLeft<=0){
    	//this function checks to see if the timeLeft has reached 0
    	timer.stopTimer();
    	checkQuiz();
    }



  },
  stopTimer: function(){
  	//this stop function stops the interval from further counting down, and 
  	//eliminates the timer from the display by replacing it with new text.
  	clearInterval(intervalId);
  	$("#howToPlay").html("<h3>Congratulations</h3>");

  	$("#timerContainer").html("<h3>All Done!</h3>");
  }
  };