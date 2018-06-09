var mongoose = require('mongoose'),
 week = new mongoose.Schema({
 	day: Number
 });

 var Week = mongoose.model('Week', week);
 module.exports = Week;