App.factory('SurveyFactory', function($http){
	var factory = {};

	factory.getSurveys = function(){
		return $http.get('/surveys')
	}

	factory.addSurvey = function(newSurvey, userName){
		return $http.post('/survey/'+userName, newSurvey)
	}

	factory.deleteSurvey = function(id){
		return $http.delete('/survey/'+id)
	}

	factory.showSurvey = function(id){
		return $http.get('/survey/'+id)
	}

	factory.vote = function(sid, option){
		return $http.put('/survey/'+sid+'/'+option)
	}

	return factory;
})