

$(document).ready(function(){
	makeGrid('.contianer',16);
	colorOnHover();
	clearButton();
});

function makeGrid(contianer,squaresNumber){
	for (i = 0; i < 16; i++) {
	    var row = '<div class="line">';

   	 for (j = 0; j < squaresNumber; j++){
     	   row += '<div class="square"></div>';
     		}
     row += '</div>';
   	 $(contianer).append(row);
	}
}


function colorOnHover(){
	$('.square').on('mouseenter',function(){
		$(this).addClass('color');
	});
}

function clearButton(){
	$('button').on('click',function(){
		$('.contianer').remove();
		var squaresNumber = prompt("What is the number of squares you need in the new grid?");
		$('.main').append('<div class="contianer"></div>');
		makeGrid('.contianer',squaresNumber);
		colorOnHover();
	});
}

