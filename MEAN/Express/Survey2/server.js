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

 var server = app.listen(8000, function() {
 console.log("listening on port 8000");
});
var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
	console.log("WE ARE USING SOCKETS!");
	console.log(socket.id);
socket.on("form_submit", function (data){
	console.log(data)
	socket.emit('updated_message', {res: data});
	socket.emit('random_number', {num: Math.floor(Math.random()*1000)+1});
})
});