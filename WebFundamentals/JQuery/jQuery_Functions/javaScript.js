$(document).ready(function(){

	$('.click').click(function(){
		alert('Congrats!!! you are so cool for pressing this button!');
	})

	
	$('.hide').click(function(){
		$('.hideshow').hide();
	})

	$('.show').click(function(){
		$('.hideshow').show();
	})

	$('.toggle').click(function(){
		$('.tgl').toggle('slow');
	})

	$('.slideup').click(function(){
		$('.slide').slideUp('slow');
	})

	$('.slidedown').click(function(){
		$('.slide').slideDown('slow');
	})

	$('.slidetoggle').click(function(){
		$('.slide').slideToggle('slow');
	})

	$('.fadeout').click(function(){
		$('.fade').fadeOut('slow');
	})

	$('.fadein').click(function(){
		$('.fade').fadeIn('slow');
	})

	$('.addclass').click(function(index){
		$('.add').addClass('special');
	})

	$('.before').click(function(){
		$('.beef').before("<p>Hey, guess what?</p>");
	})

	$('.after').click(function(){
		$('.beef').after("<p>See! Totally useful!</p><p>Also, you really smell like dog buns...");
	})

	$('.append').click(function(){
		$('.app').append('<strong> THIS IS WHAT IT DOES</strong>');
	})

	$('.stuff').click(function(){
		$('.poop').html('<p>cool</p>');
	})

	$('.val').click(function(){
		$('input:text').val('Luis is a pimp');
	})
	$('.words').click(function(){
		$('.almost').text('You. Really. Smell. Like. Dog. Buns....');
	})










});