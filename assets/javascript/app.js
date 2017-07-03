console.log("java is running!");

var correctAnswers = ["False", "1989", "1993"];
var userAnswers = [];
var unanswered = 0;
var correct = 0;
var incorrect = 0;
var questionNumber = 0;

    function check1() {

        var radio_check_val = "";
        for (i = 0; i < document.getElementsByName('question1').length; i++) {
            if (document.getElementsByName('question1')[i].checked) {
                radio_check_val = document.getElementsByName('question1')[i].value;
                userAnswers[questionNumber] = document.getElementsByName('question1')[i].value;
                questionNumber++;
                console.log(document.getElementsByName('question1')[i].value + " was clicked!");


            }

        }
        for (i = 0; i < document.getElementsByName('question2').length; i++) {
            if (document.getElementsByName('question2')[i].checked) {
                radio_check_val = document.getElementsByName('question2')[i].value;
                userAnswers[questionNumber] = document.getElementsByName('question2')[i].value;
                
                console.log(userAnswers[questionNumber]);
                questionNumber++;
                console.log(document.getElementsByName('question2')[i].value + " was clicked!");

            }

        }
        for (i = 0; i < document.getElementsByName('question3').length; i++) {
            if (document.getElementsByName('question3')[i].checked) {
                radio_check_val = document.getElementsByName('question3')[i].value;
                userAnswers[questionNumber] = document.getElementsByName('question3')[i].value;
                questionNumber++;
                console.log(document.getElementsByName('question3')[i].value + " was clicked!");

            }

        }
        if (radio_check_val === "")
        {
            alert("please select radio button");
            unanswered++;
            console.log(unanswered);
            console.log("radio check val wasn't held");
        }



        checkAnswers();
        tallyAnswers();
    }
    function checkAnswers() {
    for(i =0; i<correctAnswers.length; i++){
    	if(userAnswers[i] == correctAnswers[i]){
    		correct++;
    		console.log("answer " + i + " was correct!");
    	}
    	else if(userAnswers[i] == undefined){
    		console.log("answer was undefined");
    		unanswered++;
    	}
    	else{
    		incorrect++;
    		console.log("answer " + i + " was incorrect!");
    	}
    }
}
	function tallyAnswers(){
		console.log("Correct Answers: " + correct);
		console.log("Incorrect Answers: " + incorrect);
		console.log("Unanswered questions: " + unanswered);
	}

//things left to handle
//1. what to do when a button isn't clicked - ie, unanswered++
//2. implementing timer, that when time runs out, it acts as a submit button.