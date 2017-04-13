var mongoose = require('mongoose');

var PeopleSchema = new mongoose.Schema({
    name:String,
},{timestamps:true});

var People = mongoose.model('People', PeopleSchema); 