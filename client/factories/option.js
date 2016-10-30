App.factory('OptionFactory', function($http){
	var factory = {};

	factory.addOption = function(option, sid){
		return $http.post('/option/'+sid, option);
	}

	return factory;
})