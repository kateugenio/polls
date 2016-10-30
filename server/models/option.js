var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
require('../models/survey');

var OptionSchema = new Schema({
	option: {type: String, required: true, minlength: 4},
	votes: {type: Number, default: 0},
	_survey: {type: Schema.Types.ObjectId, ref: 'Survey'}
}, {timestamps: true});

module.exports = mongoose.model("Option", OptionSchema);