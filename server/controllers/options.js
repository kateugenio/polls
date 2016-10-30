var Option = require('../models/option');
var Survey = require('../models/survey');

module.exports = {
	create: function(req, res){
		Survey.findById(req.params.sid, function(err, survey){
			console.log("survey is: ", survey);
			var option = new Option(req.body);
			option._survey = survey._id;
			option.save(function(err){
				survey.options.push(option._id);
				survey.save(function(err){
					if (err){
						res.json(err);
					}
					else {
						res.json(survey);
					}
				})
			})
		})
	},
	update: function(req, res){
		Option.findById(req.params.id, function(err, option){
			if (err){
				res.json(err);
			}
			else {
				option.votes += 1;
				option.save(function(err, result){
					res.json(result);
				})
			}
		})
	}
}