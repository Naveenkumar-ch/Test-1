var app= angular.module("index",[]);
                          
 angular.module("CombineModule", ["index", "routes"]);
              app.controller("demoController", function
           ($scope, $location, $anchorScroll,$http) {
            	 
                 $scope.scrollTo = function (scrollLocation) {
            $location.hash(scrollLocation);
            $anchorScroll.yOffset = 0;
			
            $anchorScroll();
        }
                 $scope.fixedlogo="gifts/views/fixed_logo.html";
    });
                 

                 


                 angular.module("routes", [])
.run(['$anchorScroll', function($anchorScroll) {
  $anchorScroll.yOffset = 50;   // always scroll by 50 extra pixels
}])


.controller('headerCtrl', ['$anchorScroll', '$location', '$scope',
  function($anchorScroll, $location, $scope) {
    $scope.gotoAnchor = function(x) {
      var newHash = 'anchor' + x;
      if ($location.hash() !== newHash) {
        // set the $location.hash to `newHash` and
        // $anchorScroll will automatically scroll to it
        $location.hash('anchor' + x);
      } else {
        // call $anchorScroll() explicitly,
        // since $location.hash hasn't changed
        $anchorScroll();
      }
    };
  }
]);