App.controller('IndexController', function($scope, SurveyFactory, UserFactory, $location){

	function getSurveys(){
		SurveyFactory.getSurveys()
		.then(function(response){
			$scope.surveys = response.data;
		})
		.catch(function(err){
			console.log(err);
		})
	}
	getSurveys();

	function getLoggedInUser(){
		UserFactory.getLoggedInUser()
		.then(function(response){
			console.log(response.data[0].name);
			$scope.userID = response.data[0]._id;
		})
		.catch(function(err){
			console.log(err);
		})
	}
	getLoggedInUser();

	$scope.deleteUser = function(id){
		UserFactory.deleteUser(id)
		.then(function(response){
			$location.path('/');
		})
		.catch(function(err){
			console.log(err);
		})
	}

	$scope.deleteSurvey = function(id){
		console.log("id is: ", id);
		SurveyFactory.deleteSurvey(id)
		.then(function(response){
			getSurveys();
		})
		.catch(function(err){
			console.log(err);
		})
	}
})