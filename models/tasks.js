var mongoose = require('mongoose'),
 task = new mongoose.Schema({
 	name: {
 		type:String,
 		index:1
 	},
	scores: Number,
	timetocomplete: Number,
	timeittakes: Number,
	category: String,
	timetaken: Date,
	status: String,
	assignee: String
 });

 var Task = mongoose.model('Task', task);
 module.exports = Task;