$(document).ready(function(){
var magic8Ball = {};
magic8Ball.listOfAnswers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];
$("#answer").hide();
magic8Ball.getRandomAnswer = function (question) {
	$("#8ball").attr("src", "answerside.png");
	$("#answer").fadeIn(2000);
	var randomNumber = Math.random();
	var randomNumberArray = randomNumber * this.listOfAnswers.length;
	var randomIndex = Math.floor(randomNumberArray);
	var randomAnswer = this.listOfAnswers[randomIndex];
	$("#answer").text( randomAnswer );
	console.log(question);
	console.log(randomAnswer);
}

var onClick = function () {
	$("#answer").hide();
	$("#8ball").attr("src", "magic8ballQuestion.png");
	setTimeout(
		function() {
	var question = prompt("Ask me anything...");
	$("#8ball").effect( "shake" );
	magic8Ball.getRandomAnswer(question);
		}, 500);
};

$("#questionButton").click(onClick);

});
