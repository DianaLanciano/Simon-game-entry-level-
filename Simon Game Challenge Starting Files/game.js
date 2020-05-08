var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var start = false;

$(document).keypress(function(){

  start = true;
  changeLevel(level);

});

$(".btn").click(function(){
  var colorByUser = $(this).attr("id");
  userClickedPattern.push(colorByUser);
  playSound(colorByUser);
  animatePress(colorByUser);
});


function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColours[randomNumber];
  gamePattern.push(randomChosenColor);
  $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  level++;
}





function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");

  setTimeout(function() {
    $("#" + currentColour).removeClass("pressed");
  }, 100);

}

function playSound(name) {

    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}


function changeLevel(levelNumber){

  $("h1").text("Level" + levelNumber);

}
