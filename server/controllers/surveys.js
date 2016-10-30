var Survey = require('../models/survey');

module.exports = {
	index: function(req, res){
		Survey.find({}, function(err, surveys){
			if (err){
				res.json(err);
			}
			else {
				res.json(surveys);
			}
		})
	},
	create: function(req, res){
		Survey.create({question: req.body.question, option1: req.body.option1, option2: req.body.option2, option3: req.body.option3, option4: req.body.option4, user: req.params.user}, function(err, survey){
			if (err){
				res.json(err);
			}
			else {
				res.json(survey);
			}
		})
	},
	show: function(req, res){
		Survey.findById(req.params.id, function(err, survey){
			if (err){
				res.json(err);
			}
			else {
				res.json(survey);
			}
		})
	},
	delete: function(req, res){
		console.log(req.params.id);
		Survey.remove({_id: req.params.id}, function(err){
			if (err) {
				res.json(err);
			}
			else {
				res.json(true);
			}
		})
	},
	update: function(req, res){
		Survey.findById(req.params.id, function(err, survey){
			if (err){
				res.json(err);
			}
			else {
				if (survey.option1 === req.params.option){
					survey.option1Vote += 1;
					survey.save(function(err, result){
						res.json(result);
					});
				}
				else if (survey.option2 === req.params.option){
					survey.option2Vote += 1;
					survey.save(function(err, result){
						res.json(result);
					});
				}
				else if (survey.option3 === req.params.option){
					survey.option3Vote += 1;
					survey.save(function(err, result){
						res.json(result);
					});
				}
				else if (survey.option4 === req.params.option){
					survey.option4Vote += 1;
					survey.save(function(err, result){
						res.json(result);
					})
				}
			}
		})
	}
}