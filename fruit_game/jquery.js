var playing = false;
var score;
var trialsleft;
var step;
var action;
var fruits = ["apple","mango","banana","cherries","pear","peach","orange","grapes","watermelon"];
$(function(){
	$("#startreset").click(function(){
		if(playing == true){
			location.reload();
		}else{
			playing == true;
			score = 0;

			$("#scorevalue").html(score);;

			$("#trialsleft").show();
			trialsleft = 3;
			add_hearts();

			$("#game_over").hide();
			
			$("#startreset").html("Reset Game!");

			startAction();
		}
	});

	$("#fruit1").mouseover(function(){
		score ++ ;
		$("#scorevalue").html(score);
		$("#slicesound")[0].play();
		$("#fruit1").css('cursor' , "crosshair")

		clearInterval(action);
		$("#fruit1").hide("explode",500);

		setTimeout(startAction,500);
	});
});

function add_hearts() {
		$("#trialsleft").empty();
	for (var i = 0; i < trialsleft; i++) {
		$("#trialsleft").append('<img src="images/heart.png" class="life">');
	}
}

function startAction() {
	$("#fruit1").show();
	chooseFruit();
	$("#fruit1").css({'left' : Math.round(Math.random()*700), 'top' : -50});

	step = 1 + Math.round( 5 * Math.random() );

	action = setInterval(function(){
		$("#fruit1").css('top' , $("#fruit1").position().top + step);

		if ($("#fruit1").position().top > $("#fruitscontainer").height()) {
			if (trialsleft > 1) {
					$("#fruit1").show();
	chooseFruit();
	$("#fruit1").css({'left' : Math.round(Math.random()*700), 'top' : -50});

	step = 1 + Math.round( 5 * Math.random() );

	trialsleft --;
	add_hearts();
			}else{
				playing = false;
				$("#startreset").html("Start Game!");
				$("#game_over").show();
				$("#game_over").html("<p>Game Over!</p><p>Your score is " + score + "</p>");
				$("#trialsleft").hide();
				stopAction();
			}
		}

	},10);
}
function chooseFruit() {
	$("#fruit1").attr('src' , 'images/' + fruits[Math.round(8*Math.random())] +'.png');
}

function stopAction(){
	clearInterval(action);
	$("fruit1").hide();
}




















