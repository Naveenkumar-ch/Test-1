app.controller("cartlistctrl",function($scope, $http){
	 
	
		 $http.get("models/profilemenu.json")
                 .then(function (response) {
                     $scope.cartlist_data = response.data;
                 });
            
            $scope.cardsview="views/cartlist.html";
                 });
