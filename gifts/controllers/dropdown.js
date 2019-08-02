app.controller("dropdownctrl",function($scope, $http){
	 
	
	 $scope.records = [
		  {heading:"Countries",
		  text:["India","USA","UK","Afghanistan","Antigua and Barbuda","Canada","Singapore","Switzerland","Saudi Arabia","Romania"]
		  
		 }  
		       ]
	
	
	
	$scope.dropdownview="gifts/views/dropdown.html";
	
	
});