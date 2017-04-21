var poke = require('../controllers/logic.js')
module.exports = function(app){
// ROUTES
	app.get('/', function(req, res) {
	    poke.showAll(req,res);
	});
	app.get('/poke/:id', function(req, res) {
		poke.showOne(req,res);
	});
	app.get('/new', function(req, res) {
	    res.render('new');
	});
	app.get('/edit/:id', function(req, res) {
		poke.edit(req,res);
	});
	// Add User Request 
	app.post('/create', function(req, res) {
		poke.create(req,res);
	});
	app.get('/destroy/:id',function(req,res){
		poke.delete(req,res);
	});
	app.post('/update/:id',function(req,res){
		poke.update(req,res);
	});
}