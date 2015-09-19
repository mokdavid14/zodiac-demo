var app = angular.module("myApp", ["ngRoute","ui.bootstrap"]);

// Setup Routes
app.config( function($routeProvider){
	$routeProvider
	.when("/sign",{
		controller: "SignController",
		templateUrl: "app/components/sign/signView.html"
	})
	.when("/greek",{
		controller: "GreekController",
		templateUrl: "app/components/greek/greekView.html"
	})
	.when("/chinese",{
		controller: "ChineseController",
		templateUrl: "app/components/chinese/chineseView.html"
	})
	.otherwise({
		redirectTo: "/sign"
	});
});