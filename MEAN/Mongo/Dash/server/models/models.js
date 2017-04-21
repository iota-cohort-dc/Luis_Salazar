var mongoose = require('mongoose');

var PokeSchema = new mongoose.Schema({
    name:String,
    type:String,
    age:Number,
},{timestamps:true});

var Poke = mongoose.model('Poke', PokeSchema); 