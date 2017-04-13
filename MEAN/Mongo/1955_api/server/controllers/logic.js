var mongoose = require('mongoose');
var People = mongoose.model('People');
module.exports = {
	show: function (req,res) {
		People.find({},function(err,people){
			res.json(people)
		});
	},
	create: function(req,res){
		var person = new People({name: req.params.name});
		person.save(function(err){
	        if(err){
	            console.log('You broke it..');
	        }
	        else{
	            console.log('Created Pokemons!');
	            res.redirect('/');
	        }
		})
	},
	delete: function(req,res){
		People.deleteOne({name: req.params.name},function(err,people){
			res.redirect('/')
		});
	},
	showOne: function(req,res){
		People.find({name:req.params.name},function(err,people){
			res.json(people);
		})
	}
}