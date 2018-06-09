var mongoose = require('mongoose');
var User = require(`./models/users.js`);
var Task = require(`./models/tasks.js`);
var Week = require(`./models/week.js`);
mongoose.connect('mongodb://db_usr:db_pass1@ds241570.mlab.com:41570/hometasks')
.then(
	() => {
	   // User.find({},
	   // 	(err,user) => {
	   // 		if (err) console.log(`query error: ${err}`);
	   // 		console.log(user);
	   // 	});
	   // Task.find({},
	   // 	(err,task) => {
	   // 		if (err) console.log(`query error: ${err}`);
	   // 		console.log(task);
	   // 	});
	   // Week.find({},
	   // 	(err,week) => {
	   // 		if (err) console.log(`query error: ${err}`);
	   // 		console.log(week);
	   // 	});
	},
	err => {
	   console.log(`connection error: ${err}`);
	}
      );
