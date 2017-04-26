

$(document).ready(function(){
	var $grid = $('.contianer');
	makeGrid($grid);
	colorOnHover();
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



// Create a web page with a 16x16 grid of square divs.

