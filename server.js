var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var promise = require('bluebird');


app.use(express.static(__dirname + '/public'));
app.set('views', __dirname+'/src/views');
app.use(bodyParser());



app.set('view engine', 'ejs');


//Routes
require('./src/routes.js')(app); 

app.listen(8080);