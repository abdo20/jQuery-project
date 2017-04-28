

$(document).ready(function(){
	makeGrid('.contianer',16);
	colorOnHover();
	clearButton();
});

function makeGrid(contianer,squaresNumber){
	for (i = 0; i < squaresNumber; i++) {
   	 for (j = 0; j < squaresNumber; j++){
     	   $(contianer).append('<div class="square"></div>');
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
		makeGrid('.contianer',squaresNumber);
		$('.square').css({'width':squareWidth+'px', 'height':squareHeight + 'px'});
		colorOnHover();
	});
}

