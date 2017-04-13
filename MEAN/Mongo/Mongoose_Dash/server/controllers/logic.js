var mongoose = require('mongoose');
var Poke = mongoose.model('Poke') ;
module.exports = {
	showAll: function(req,res){
		Poke.find({},function(err,pokes){
	    res.render('index',{pokes:pokes});   
	    })
	},
	showOne: function(req,res){
	    Poke.findOne({_id:req.params.id},function(err,pokes){
	    res.render('show',{pokes:pokes});   
	    });
	},
	edit: function(req,res){
	    Poke.findOne({_id:req.params.id},function(err,pokes){
	    res.render('edit',{pokes:pokes});   
	    });		
	},
	create: function(req,res){
	    console.log("POST DATA", req.body);
	    var pokemon = new Poke({name: req.body.name, type: req.body.type, age: req.body.age});
	    pokemon.save(function(err){
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
	    Poke.deleteOne({_id:req.params.id},function(err,pokes){
	    res.redirect('/')
	    });		
	},
	update: function(req,res){
	    Poke.update({_id:req.params.id},{$set:{name:req.body.name, type: req.body.type, age:req.body.age}},function(err,pokes){
	    res.redirect('/')
	    })		
	}
}