var mongoose = require('mongoose');
var Appoint = mongoose.model('Appoint');
var User = mongoose.model('User');

module.exports = {
	index: function(req,res){
		Appoint.find({})
			.populate('_user')
			.exec(function(err,appoint){
			if(err){
				console.log('You broke it');
				res.json(err)
			}
			res.json({appoint});
		});
	},
	create: function (req,res) {
		console.log('POST DATA',req.body);
		User.findOne({_id:req.params.id},function(err,user){
			if(err){
				res.json(err);
			}
			Appoint.find({date:req.body.date},function(err,appoint){
				if(err){
					res.json(err);
				}
				console.log('USER',user._id);
				console.log('USER2',appoint);
				console.log("APPOINTMENT LENGTH",appoint.length)
				if(appoint.length >=3){
					res.json({errors:"Only 3 Appointments  per date allowed"});
				}
				else{
					Appoint.findOne({date:req.body.date, _user:req.params.id},function(err,user1){
						console.log("IN FIND ONE",user1)
						if(err){
							res.json(err);
						}
						if(user1){
							res.json({errors:'Only 1 appointment per day allowed.'})
						}
					
						else{
							Appoint.create({date:req.body.date, time:req.body.time, text:req.body.text, _user: user},function(err,appoint2){
								if(err){
									res.json({errors:"Must be 10 characters or more"});
								}
								else{
									console.log('Appoint made!',appoint2);
									user.appoint.push(appoint2);
									user.save();
									res.json(appoint2);
								}
							})
						}
					})
				}
			})
		})
	},
	delete: function(req,res){
		Appoint.deleteOne({_id:req.params.id},function(err,appoint){
			// console.log(user)
			if (err) {
				console.log('you broke it...')
			}
			else{
				console.log("Appointment Deleted")
				res.json({appoint});
			}
		})
	},

}


