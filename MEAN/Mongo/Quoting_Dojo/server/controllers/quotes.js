var mongoose = require('mongoose');
var Quote = mongoose.model('Quote');
module.exports = {
	show: function(req,res) {
		Quote.find({},function(err,quotes){
    	res.render('quotes', {quotes : quotes});
		})
	},
	create: function(req,res){
		console.log("POST DATA", req.body);
    	var user = new Quote({name: req.body.name, quote: req.body.quote});
    	user.save(function(err){
    		if(err){
    			console.log('Error');
    		}
    		else{
    			console.log('Success!')
				res.redirect('/quotes');
    		}
    	})
	}
}