
$(document).ready(function(){

	/*--- Global Variable ---*/
    var count = 0;
    var $userGuess;
    var randomNum = getRandomInt(1, 101);
    var controlArray = [];

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
      //reset controlArray
      controlArray = [];
    }

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  /*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  /*--- Hide alert window box ---*/
    $("a.ok-button").click(function(){
      $("#alert-overlay").fadeOut(1000, function() {
        $("#alert-message-body").text("");
      });
    });
  /*--- Click New Game Button ---*/
    $(".new").on("click", newGame);


  /*--- Click Guess Button ---*/
    $("#guessButton").click(function(e){
      e.preventDefault();

      // Place user input into variable $userGuess
      $userGuess = parseInt($("#userGuess").val());
      
      //if not a Number print error
      if (isNaN($userGuess)) {
        $("#alert-message-body").text("This is not a valid number. Please try again."); 
        $("#alert-overlay").fadeIn(1000);
      } 
      //if not between 1 and 100 print error
      else if($userGuess < 1 || $userGuess > 100) {
        $("#alert-message-body").text("You can only input a number between 1 and 100. Please try again."); 
        $("#alert-overlay").fadeIn(1000);
      }
      //if number has been picked previously during the current game alert user
      else if(controlArray.indexOf($userGuess) >= 0) {
        $("#alert-message-body").text("You have already picked that number before. Please try again."); 
        $("#alert-overlay").fadeIn(1000);
      }
      else {
        // supply users with a list of the numbers they have guessed so far. 
        $("#guessList").append("<li>" + $userGuess + "</li>");
        // push $userGuess into controlArray
        controlArray.push($userGuess);
        // The game should track how many guesses the user has made. Feedback about this should appear in span#count.
        count++;
        $("#count").text(count);
        // Feedback about the guess should appear in div#feedback. 
        $("#feedback").text(feedback);
      }
      
      // The user should get feedback about each guess – if it was too low, too high, or just right.
      function feedback() {
        var diff = Math.abs($userGuess - randomNum);

        if(diff >= 50) return "ice cold"; 
        else if (diff >= 30 && diff < 50) return "cold";
        else if (diff >= 20 && diff < 30) return "warm";
        else if (diff >= 10 && diff < 20) return "hot";
        else if (diff >= 1 && diff < 10)  return "very hot";
        else return "Congratulations. You won!"
      };

      //reset input field
      document.getElementById("form").reset();

    });/* end Guess Button click */

});/* end document ready */


