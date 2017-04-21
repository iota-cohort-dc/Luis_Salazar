console.log('Friends Model')
var mongoose = require('mongoose');
var FriendSchema = new mongoose.Schema({
	first:String,
	last:String,
	bday:Date,
},{timestamps:true});

var Friend = mongoose.model('Friend', FriendSchema);
