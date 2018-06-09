var mongoose = require('mongoose'),
 user = new mongoose.Schema({
 	name: String,
 	username: {
 		type:String,
 		index:1
 	},
 	googleId: String,
 	thumbnails: String,
 	picture: String,
 	weeklyscores: Number,
 	takentasks: [String],
 	completedtasks: [String],
 	achievements: String
 });

 var User = mongoose.model('User', user);
 module.exports = User;