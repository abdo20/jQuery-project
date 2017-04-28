

$(document).ready(function(){
	makeGrid(16);
	colorOnHover();
	clearButton();
});

function makeGrid(squaresNumber){
	for (i = 0; i < squaresNumber; i++) {
   	 for (j = 0; j < squaresNumber; j++){
     	   $('.grid').append('<div class="square"></div>');
     		}
	}
}


function colorOnHover(){
	$('.square').on('mouseenter',function(){
		$(this).addClass('color');
	});
}

function clearButton(){
	$('button').on('click',function(){
		$('.square').remove();
		var squaresNumber = prompt("What is the number of squaresXlines you need in the new grid?");
		var squareWidth = 800/squaresNumber;
		var squareHeight = 600/squaresNumber;
		makeGrid(squaresNumber);
		$('.square').css({'width':squareWidth+'px', 'height':squareHeight + 'px'});
		colorOnHover();
	});
}

