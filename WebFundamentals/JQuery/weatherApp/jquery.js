$(document).ready(function() {
    $('form').submit(function() {
        // your code here (build up your url)

        var city = $('.city').val()
        $('.city').val('');


        $.get("http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=imperial&APPID=44fb355c69286f0913764ecbd11688c2", function(res){
		 $('.name').html(res.name)
		 $('.weather').html('<h1>Temperature is</h1>'+ "<p>" + res.main.temp + " °F" + "</p>");
		 console.log(res);

        }, 'json');
  //       // don't forget to return false so the page doesn't refresh
        return false;
    });
})
