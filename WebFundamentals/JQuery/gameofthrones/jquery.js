$(document).ready(function(){

	$('img').click(function(){
		var id = $(this).attr('id')
		$.get("http://anapioficeandfire.com/api/houses/"+id+"/",function(res){
			console.log(res)
			$('.names').html(res.name)
			$('.words').html(res.words)
			$('.titles').html(res.titles[0])
				

		},"json");

	});
});