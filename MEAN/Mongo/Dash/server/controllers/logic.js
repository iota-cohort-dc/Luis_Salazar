var mongoose = require('mongoose');
var Poke = mongoose.model('Poke') ;
module.exports = {
	showAll: function(req,res){
		Poke.find({},function(err,pokes){
	    res.json({pokes:pokes});   
	    })
	},
	showOne: function(req,res){
	    Poke.findOne({_id:req.params.id},function(err,pokes){
	    res.json({pokes:pokes});   
	    });
	},
	edit: function(req,res){
	    Poke.findOne({_id:req.params.id},function(err,pokes){
	    res.json({pokes:pokes});   
	    });		
	},
	create: function(req,res){
	    console.log("POST DATA", req.body);
	    var pokemon = new Poke({name: req.body.name, type: req.body.type, age: req.body.age});
	    pokemon.save(function(err,pokemon){
	        if(err){
	            console.log('You broke it..');
	            res.json(err);
	        }
	        else{
	            console.log('Created Pokemons!');
	            res.json(pokemon);
	        }
	    })
	},
	delete: function(req,res){
	    Poke.deleteOne({_id:req.params.id},function(err,pokes){
	    res.json(pokes)
	    });		
	},
	update: function(req,res){
	    Poke.update({_id:req.params.id},{$set:{name:req.body.name, type: req.body.type, age:req.body.age}},function(err,pokes){
	    res.json(pokes)
	    })		
	}
}