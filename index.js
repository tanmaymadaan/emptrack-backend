const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost/emptrack', { useNewUrlParser: true});
app.get('/api', function(req, res){
	console.log('GET Request');
	res.send({name: 'Yoshi'});
});

app.use(bodyParser.urlencoded({
	extended: true
}));

app.use('/', require('./routes/add-position'));
app.use('/', require('./routes/add-stop'));

app.listen(process.env.port || 4000, function(){
	console.log('now listening for requests');
});