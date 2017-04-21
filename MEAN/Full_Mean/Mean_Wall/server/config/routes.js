console.log('future routes.');
var user = require('../controllers/UsersController.js')
var message = require('../controllers/MessagesController.js')
var comment = require('../controllers/CommentsController.js')

module.exports = function(app) {
	app.post('/login', function(req, res) {
		user.login(req, res);
	});
	app.get('/messages',function(req,res){
		message.index(req,res);
	});
	app.post('/messages/:user',function(req,res){
		message.create(req,res);
	});
	app.post('/comment/:id/:user',function(req,res){
		comment.create(req,res);
	});
}