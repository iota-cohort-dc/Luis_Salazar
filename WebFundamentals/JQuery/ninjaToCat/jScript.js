$(document).ready(function(){

	$('img').click(function(){
		var catpic = $(this).attr('src');
		$(this).attr('src',$(this).attr('data-alt-src'));
		$(this).attr('data-alt-src',catpic);
		})

});