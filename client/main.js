var App = angular.module('polls', ['ngRoute']);

App.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: '/partials/_newUser.html',
		controller: 'UserController'
	})
	.when('/dashboard', {
		templateUrl: '/partials/_dashboard.html',
		controller: 'IndexController'
	})
	.when('/create/:uID', {
		templateUrl: '/partials/_newSurvey.html',
		controller: 'SurveyController'
	})
	.when('/poll/:id', {
		templateUrl: '/partials/_showSurvey.html',
		controller: 'ShowSurveyController'
	})
	.otherwise({
		redirectTo: '/dashboard'
	})
})