String.prototype.repeat = function( num )
{
    return new Array( num + 1 ).join( this );
};
var tries_left = 8;
var blank = "";
var game_lost = false;
var game_won = false;
var get_words = ["liberate", "legend", "racist", "shark"];
var word = "liberate";
var underscore = "_";
var word_length = word.length;
var blank = underscore.repeat(word_length);
var split_word = word.split("");
var index = split_word[index];
// var letter = "t";
var split_blank = blank.split("");
var img = new Image("http://images2.wikia.nocookie.net/__cb20120408031722/hitlerparody/images/6/6d/Hitler_Angry_Face.jpghttp://images2.wikia.nocookie.net/__cb20120408031722/hitlerparody/images/6/6d/Hitler_Angry_Face.jpg");
var used_letters = [];
function check_if_there_is_a_match () {
	letter = document.getElementById('textbox1').value;
	correct_letter_index = split_word.indexOf(letter);
	if (letter == split_word[correct_letter_index]) {
		console.log("You are one step closer to ending World War II");
		correct_letter_index = split_word.indexOf(letter);
		split_blank[correct_letter_index] = letter;
		console.log(split_blank);
		used_letters.push(letter);
		}
	else
		{
		console.log("Nein!");
		tries_left -= 1;
		console.log(tries_left);
		letter = document.getElementById('textbox1').value;
		console.log(split_blank);
		used_letters.push(letter);
		console.log(split_blank)
		}
	console.log ("Guessed letters - " + used_letters + " ");
}

function win_or_lose() {
	// ssplit_blank = split_blank.toString();
	// ssplit_word = split_word.toString();
	if (tries_left < 1) {
		console.log("Hitler has invaded Russia. You lose!");
		console.log(split_blank);
		return;
	}
	else if (split_word == split_blank) {
		console.log("Hitler: NOOOOOOOOOO!!!!!");
		console.log("You have killed Hitler. You win!");
		split_blank.join();
		console.log(split_blank);

		return;
	}
	else {
		console.log("");
	}
}

function log(text){
	console.log(text);
}

// function find_where_letter_is_in_word(guessed_letter, word)
//		right_letter =


$( document ).ready(function() {

	// alert("Let's kill Hitler!");
	// $( "button" ).click(function( event ) {
	// alert( "Thanks for visiting!");
// $(".result").text("poop");
	//my code goes here

	$('#my-button').click( function(e){
		// the code that runs in response to someone clicking the button
			check_if_there_is_a_match();
			$("#textbox1").click( function()
			 { 
	   		$(this).val(""); 
			 } );
			$(".underscore").text(split_blank)
			$(".guessed").text("Guessed letters - " + used_letters + " ")
				win_or_lose();
			// grab value from text input
			// compare this value with something else
		});
});
	

// var guessed_letter = document.getElementById('textbox1').value;
