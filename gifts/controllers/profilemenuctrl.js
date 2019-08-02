app.controller("profilemenuctrl",function($scope, $http){
	 
	
		             $http.get("models/profilemenu.json")
                 .then(function (response) {
                     $scope.profilemenu_data = response.data;   
                 });

                 $http.get("models/cartlist.json")
                 .then(function (response) {
                    $scope.cartlist_data = response.data;
                  });

                  $http.get("models/profilesdetails.json")
                 .then(function (response) {
                    $scope.profilesdetails_data = response.data;
                  });  
            
            $scope.cardsview="views/afterloginheader.html";

                 });
