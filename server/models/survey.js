var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
require('../models/option');

var SurveySchema = new Schema({
	question: {type: String, required: true, minlength: 8},
	option1: {type: String, required: true, minlength: 3},
	option2: {type: String, required: true, minlength: 3},
	option3: {type: String, required: true, minlength: 3},
	option4: {type: String, required: true, minlength: 3},
	option1Vote: {type: Number, default: 0},
	option2Vote: {type: Number, default: 0},
	option3Vote: {type: Number, default: 0},
	option4Vote: {type: Number, default: 0},
	user: {type: String}
}, {timestamps: true});

module.exports = mongoose.model("Survey", SurveySchema);