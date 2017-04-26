

$(document).ready(function(){
	var $grid = $('.contianer');
	makeGrid($grid);
	colorOnHover();
	clearButton();
});

function makeGrid(contianer){
	for (i = 0; i < 16; i++) {
	    var row = '<div class="line">';

   	 for (j = 0; j < 16; j++){
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
		$('.square').filter('.color').removeClass('color');
	});
}


