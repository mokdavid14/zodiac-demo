app.controller("IndexController", function ($scope, $timeout) {
  $scope.radioModel = "My Sign";
  
  // Make index shell appear onscreen like a moon
  $timeout(function(){
  	$scope.angClass = "moonlight";
  }, 1);
});