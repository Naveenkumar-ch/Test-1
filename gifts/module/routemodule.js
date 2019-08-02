var myapp= angular.module("routes",["ngRoute"]);

                    myapp.config(function ($routeProvider) {
                $routeProvider
                    .when("/home", {
                        templateUrl: "gifts/templates/homepage.html",
                    })
                    .when("/profilepage", {
                        templateUrl: "gifts/profiledetails-page.html",
                    })

                    .when("/myprofile", {
                    templateUrl:"views/myprofile.html",
                    
                  })
                  .when("/gamezone", {
                    templateUrl:"views/gamezone.html",
                    
                  })
                  .when("/orders", {
                    templateUrl:"views/myorders.html",
                    
                  })
                  .when("/wishlist", {
                    templateUrl:"views/mywishlist.html",  
                  })
                  .when("/notifications", {
                    templateUrl:"views/mynotifications.html",
                    
                  })
                  .when("/customercare", {
                    templateUrl:"views/mycustomercare.html",                    
                  })
                  .when("/advertise", {
                    templateUrl:"views/myadvertise.html",
                  })
                  .when("/logout", {
                    templateUrl:"gifts/index.html",
                  })


                  .when("/cooker", {
                    templateUrl:"detailed-page.html",
                    
                  })
					.otherwise({
            redirectTo: "/home"
        });
    
});