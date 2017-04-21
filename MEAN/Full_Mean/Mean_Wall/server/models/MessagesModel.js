console.log('Messages Model');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MessageSchema = new mongoose.Schema({
    user:{
    	type: String, 
    	required: true, 
    },
    message: {
    	type: String, 
    	required: true,
    },
    comment: [{
    	type: Schema.Types.ObjectId, ref: 'Comment'
    }],
},{timestamps:true});

mongoose.model('Message',MessageSchema);
var Message = mongoose.model('Message');