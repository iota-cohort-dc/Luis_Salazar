console.log('Messages Model');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new mongoose.Schema({
    user:{
    	type: String, 
    	required: true, 
    	},
    comment:{
    	type: String, 
    	required: true},
    _message:{
    	type: Schema.Types.ObjectId, ref: 'Message'}
},{timestamps:true});

mongoose.model('Comment',CommentSchema);
var Comment = mongoose.model('Comment');

