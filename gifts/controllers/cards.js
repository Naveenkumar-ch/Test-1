myapp.controller("main_controller", function( $scope, $http){
	
	 $http.get("gifts/models/cards.json")
                 .then(function (response) {
                     $scope.cards_data = response.data;
                 });
            
            $scope.cardsview="gifts/views/cards.html";
            
            
            
                 });

				 

				 