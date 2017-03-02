$(document).ready(function(){

	$(document).on('click', '.info', function(){
	$(this).children().toggle('slow');
		
			

	});


	$('.button').click(function(){
		var first = $('.first_name').val()
		var last = $('.last_name').val()
		var descrip = $('.desc').val()
		
		$('.first_name').val('')
		$('.last_name').val('')
		$('.desc').val('')



		$('.right').append(`<div class='info'><h1>${first} ${last}<h4 class="here">"Click here for description!"</h4><p hidden>${descrip}</p></h1></div>`);	
		


	});
	
});