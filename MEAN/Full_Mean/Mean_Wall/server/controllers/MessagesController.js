var mongoose = require('mongoose');
var Message = mongoose.model('Message');
module.exports = {

	index: function(req,res){
		Message.find({})
			.populate('comment')
			.exec(function(err,message){
			if(err){
				console.log('You broke it');
				res.json(err)
			}
			res.json({message});
		});
	},
	create: function (req,res) {
		Message.create({user:req.params.user, message:req.body.message},function(err,message){
			if(err){
				res.json(err);
			}
			else{
				console.log("Message has been made", message)
				res.json(message);
			}
		})
	}
}