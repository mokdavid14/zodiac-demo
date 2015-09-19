app.controller("GreekController", ["$scope", "$modal", "greekZodiac", function ($scope, $modal, greekZodiac) {
    
    // Obtain Greek Zodiac data
    greekZodiac.success(function(data){
      $scope.greekZodiac = data;
      console.log(data);
    });

    // Show zodiac sign in Modal Window
    $scope.open = function(index){
      console.log($scope.greekZodiac[index]);
      var modalInstance = $modal.open({
        animation: true,
        templateUrl: 'app/shared/zodiacModalView.html',
        controller: 'ZodiacModalController',
        size: 'sm',
        resolve: {
          sign: function(){
            return $scope.greekZodiac[index];
          }
        }
      });
    }

  }
]);