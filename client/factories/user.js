App.factory('UserFactory', function($http){
	var factory = {};

	factory.addUser = function(newUser){
		return $http.post('/user', newUser)
	}

	factory.getLoggedInUser = function(){
		return $http.get('/user')
	}

	factory.deleteUser = function(id){
		return $http.delete('/user/'+id);
	}

	return factory;
})