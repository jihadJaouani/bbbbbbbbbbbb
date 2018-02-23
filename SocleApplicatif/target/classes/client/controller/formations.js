app.controller('formations', function($scope, $http) {

	 $http.get("/formations")
	    .then(function(response) {
	        $scope.formations = response.data;
	        
	    });
	 
	
	 
});