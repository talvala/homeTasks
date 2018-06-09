var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var User = require(`./models/users`);
var Task = require(`./models/tasks`);
var Week = require(`./models/week`);


app.use('/assets', express.static(`${__dirname}/public`));

app.all('*', (req,res,next) => {
	console.log('checking login');
	next();
});

app.get('/', (req,res) => {
	// res.sendFile(`${__dirname}/index.html`);
	// User.find({},
	//    	(err,user) => {
	//    		if (err) console.log(`query error: ${err}`);
	//    		console.log(user);
	//    	});
});

app.get('/profile', (req,res) => {

	Week.find({},
	   	(err,week) => {
	   		if (err) console.log(`query error: ${err}`);
	   		console.log(week);
	   	});
	User.find({name:'Mom'},
	   	(err,user) => {
	   		if (err) console.log(`query error: ${err}`);
	   		console.log(user);
	   	});
});



app.listen(port);
console.log(`listening on port ${port}`);