app.controller("countryctrl",function($scope, $http){
	 
	
		 $http.get("gifts/models/country.json")
                 .then(function (response) {
                     $scope.country_data = response.data;
                 });

            $scope.cardsview="views/country.html";
                 });
