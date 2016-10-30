App.controller('SurveyController', function($scope, SurveyFactory, OptionFactory, UserFactory, $location, $routeParams){


	var survey = '';
	$scope.errorsQuestion = '';
	$scope.errorsOption1 = '';
	$scope.errorsOption2 = '';
	$scope.errorsOption3 = '';
	$scope.errorsOption4 = '';

	function getLoggedInUser(){
		UserFactory.getLoggedInUser()
		.then(function(response){
			$scope.userName = response.data[0].name;
		})
		.catch(function(err){
			console.log(err);
		})
	}
	getLoggedInUser();


	$scope.addSurvey = function(userName){
		console.log($scope.newSurvey)
		SurveyFactory.addSurvey($scope.newSurvey, userName)
		.then(function(response){
			console.log("response is: ", response.data);
			if (response.data.errors.question){
				$scope.errorsQuestion = "Question must be at least 8 characters";
			}
			if (response.data.errors.option1){
				$scope.errorsOption1 = "Option 1 must be at least 3 characters";
			}
			if (response.data.errors.option2){
				$scope.errorsOption2 = "Option 2 must be at least 3 characters";
			}
			if (response.data.errors.option3){
				$scope.errorsOption3 = "Option 3 must be at least 3 characters";
			}
			if (response.data.errors.option4){
				$scope.errorsOption4 = "Option 4 must be at least 3 characters";
			}
			else {
				$location.path('/dashboard');
			}
		})
		.catch(function(err){
			console.log(err);
		})
	}

})