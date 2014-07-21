
$(document).ready(function(){

	/*--- Global Variable ---*/
    var count = 0;
    var $userGuess;
    var randomNum = getRandomInt(1, 101);

  // When a new game starts, a secret number between 1 and 100 should be generated that the user will have to guess. Returns a  random integer between min (included) and max (excluded).
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    };

  // When a new game starts, reset all variables
    function newGame() {
      //reset input field
      $("#userGuess").val("");
      //reset counter
      count = 0;
      $("#count").html("");
      //reset guesslist
      $("#guessList").html("");
      //reset randomNum
      randomNum = getRandomInt(1, 101);
    }

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  /*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  /*--- Click New Game Button ---*/
    $(".new").on("click", newGame);


  /*--- Click Guess Button ---*/
    $("#guessButton").click(function(e){
      e.preventDefault();

      // The game should track how many guesses the user has made. Feedback about this should appear in span#count.
      count++;
      $("#count").text(count);

      // Ensure that users provide valid inputs. You will need to write code that ensures that the user has  supplied a numeric input between 1 and 100.
      $userGuess < 1 || $userGuess > 100 ? alert("Please submit a number between 1 and 100") : $userGuess = Number($("#userGuess").val());

      // supply users with a list of the numbers they have guessed so far. 
      $("#guessList").append("<li>" + $userGuess + "</li>");

      // Feedback about the guess should appear in div#feedback. 
      $("#feedback").text(feedback);

      // The user should get feedback about each guess – if it was too low, too high, or just right.
      function feedback() {
        var diff = Math.abs($userGuess - randomNum);

        if(diff >= 50) return "ice cold"; 
        else if (diff >= 30 && diff < 50) return "cold";
        else if (diff >= 20 && diff < 30) return "warm";
        else if (diff >= 10 && diff < 20) return "hot";
        else return "very hot";
      };

      //reset input field
      $("#userGuess").val("");

    });/* end Guess Button click */

});/* end document ready */


