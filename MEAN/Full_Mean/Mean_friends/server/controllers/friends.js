var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');

module.exports = {
	index: function(req,res){
		Friend.find({},function(err,friends){
		if (err) {
			console.log('You broke it')
			res.json(err)
		}
		res.json({friends});
		})
	},
	create: function(req,res){
		console.log('POST DATA', req.body);
		var friend = new Friend({first: req.body.first, last: req.body.last, bday: req.body.bday});
		friend.save(function(err,friend){
	        if(err){
	            console.log('You broke it..');
	            res.json(err)
	        }
	        else{
	            console.log('Created Friend!');
				res.json({friend});
	        }
		})
	},
	update: function(req,res){
		console.log('POST DATA', req.body);
		Friend.update({_id:req.params.id},req.body,function(err,friend){
			if (err) {
				console.log('you broke it...')
			}
			else{
				res.json(friend);
				console.log('Friend updated!',friend)
			}
		})
	},
	delete: function(req,res){
		Friend.deleteOne({_id:req.params.id},function(err,friends){
			console.log(friends)
			if (err) {
				console.log('you broke it...')
			}
			else{
				res.json({friends});
			}
		})
	},
	show: function(req,res){
		Friend.findOne({_id:req.params.id},function(err,friend){
			if (err){
				console.log('you broke it...');
			}
			else{
				res.json(friend)
			}
		})
	},
		
}