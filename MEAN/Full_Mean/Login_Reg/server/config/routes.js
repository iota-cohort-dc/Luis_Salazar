console.log('future routes.');
var user = require('../controllers/user.js')

module.exports = function(app) {
	app.post('/login', function(req, res) {
		user.login(req, res);
	});
	app.post('/users', function(req, res) {
		user.create(req, res);
	});

}