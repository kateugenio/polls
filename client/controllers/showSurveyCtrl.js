App.controller('ShowSurveyController', function($scope, SurveyFactory, $routeParams, $location){
	function showSurvey(){
		SurveyFactory.showSurvey($routeParams.id)
		.then(function(response){
			console.log(response);
			$scope.survey = response.data;
		})
		.catch(function(err){
			console.log(err);
		})
	}
	showSurvey();

	$scope.vote = function(sid, option){
		SurveyFactory.vote(sid, option)
		.then(function(response){
			showSurvey();
		})
		.catch(function(err){
			console.log(err);
		})
	}
})