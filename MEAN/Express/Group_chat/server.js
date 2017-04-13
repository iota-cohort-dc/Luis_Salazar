// require express
var express = require("express");
var path = require("path");
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view
app.get('/', function(req, res) {
 res.render("index");
})

 var server = app.listen(1234, function() {
 console.log("listening on port 1234");
});
 var messsages = [];
 // ROUTES
var io = require('socket.io').listen(server);
io.sockets.on('connection', function (socket){
	var name;
	socket.on('name_submit',function(data){
		// console.log(data.name);
		name = data.name;
		console.log(messsages);
		socket.emit('server_arr', {arr:messsages} )
		io.emit('server_res',{res:name});
	})
	socket.on('message_sent',function(data){
		messsages.push('<p>' + name +": "+ data.comment + '</p>');
		io.emit('message_post',{res:data,name:name});
	})


});