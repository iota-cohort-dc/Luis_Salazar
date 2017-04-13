module.exports = function Route(app, server){
	// this gets the socket.io module
	var io = require('socket.io').listen(server) 
	// root route to render the index.ejs view
	app.get('/', function(req, res) {
		res.render("index");
	})
	//listen to connection even from the client side
	io.sockets.on('connection', function (socket){
	 	socket.on("button_click", function (data){
	 		console.log(data.count)
	 	
		  io.emit('server_response', {res: data }); 
		})
	 	socket.on("reset_click", function (data){
	 	
		  io.emit('server_reset', {res: data }); 
		})
	})
};