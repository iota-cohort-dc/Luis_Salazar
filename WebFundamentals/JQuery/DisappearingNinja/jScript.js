$(document).ready(function(){

	$(document).on('click','img', function(){
		$(this).fadeOut();
	})

	$('.butt_start').click(function(){
		$('.add').append('<img class="ninja" src="ninja.jpg">');
	})

	$(".ninja").click(function(){
		$(this).fadeOut();
	})	

	$('.butt').click(function(){
		$('.ninja').fadeIn();
	})

});