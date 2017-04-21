var mongoose = require('mongoose');
var Comment = mongoose.model('Comment');
var Message = mongoose.model('Message');

module.exports = {

	create: function (req,res) {
		console.log("POST DATA", req.body);
		console.log("POST DATA 2",req.params)
		Message.findOne({_id:req.params.id},function(err,message){ //Find the particular message by id and sets it to the parameter (message)
			if(err){
				console.log('you broke it 2')
				res.json(err)
			};
			Comment.create({user:req.params.user, comment:req.body.comment, _message:message._id},function(err,comment){ //Creates the comment. and set it to parameter (comment)
				if(err){
					res.json(err)
				}
				else{
					console.log('Comment has been made',comment)
					message.comment.push(comment) 
					message.save();
				}
				res.json(comment)
			})			
		})
	}
}
