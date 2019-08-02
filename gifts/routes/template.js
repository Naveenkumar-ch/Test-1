myapp.config(function ($routeProvider) {
                $routeProvider
                    .when("/myprofile", {
                    templateUrl:"views/myprofile.html",
                    controller:"profilemenuctrl"
                  })
                  .when("/gamezone", {
                    templateUrl:"views/gamezone.html",
                    controller:"profilemenuctrl"
                  })
					.otherwise({
            redirectTo: "/home"
        });
    
});