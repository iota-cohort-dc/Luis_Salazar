// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
// REQUIRE MONGOOSE
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/message_board');

var Schema = mongoose.Schema;

var MessageSchema = new mongoose.Schema({
    name:{type: String, required: true, minlength:4},
    text: {type: String, required: true},
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
},{timestamps:true});

var CommentSchema = new mongoose.Schema({
    name:{type: String, required: true, minlength:4},
    text:{type: String, required: true},
    _message:{type: Schema.Types.ObjectId, ref: 'Message'}
},{timestamps:true});
mongoose.model('Message', MessageSchema); // We are setting this Schema in our Models as 'Message'
mongoose.model('Comment',CommentSchema);

var Message = mongoose.model('Message');
var Comment = mongoose.model('Comment');

var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');

// ROUTES
app.get('/', function(req, res) {
    Message.find({})
    .populate('comments')
    .exec(function(err,messages){
        if(err){console.log(err)};
        res.render('index',{messages});
    })
})
// Add User Request 
app.post('/message', function(req, res) {
    console.log("POST DATA", req.body);
    Message.create(req.body,function(err,message){
        if(err){ console.log(err)};
        console.log(message)
        res.redirect('/')
    })
})
app.post('/comment/:id', function(req,res){
    console.log("POST DATA", req.body);
    Message.findOne({_id: req.params.id}, function(err,message){
        if(err){console.log(err)};
        Comment.create({name:req.body.name, text:req.body.text, _message:message._id}, function(err,comment){
            if (err){console.log(err)}
            else{
                message.comments.push(comment);
                message.save();
            }
            res.redirect('/');
        })
    })
})



// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})