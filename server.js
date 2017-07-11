// modules =================================================
var express        = require('express');
var app            = express();
var MongoClient    = require('mongodb').MongoClient;
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

var db = require('./config/db');

var port = process.env.PORT || 8080; 
//mongoose.connect(db.url); 

MongoClient.connect(db.url, function(err, db) {
    if(err) {
        console.log(err);
    }
    require('./app/routes')(app, db);
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/src'));
app.use(methodOverride('X-HTTP-Method-Override')); 


app.listen(port);	
console.log('Magic happens on port ' + port); 		
exports = module.exports = app; 					