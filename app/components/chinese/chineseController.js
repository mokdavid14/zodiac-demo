app.controller("ChineseController", ["$scope", "$modal", "chineseZodiac", function ($scope, $modal, chineseZodiac) {
   
    // Obtain Chinese Zodiac data
    chineseZodiac.success(function(data){
      $scope.chineseZodiac = data;
    });

    // Show zodiac sign in Modal Window
    $scope.open = function(index){
      var modalInstance = $modal.open({
        animation: true,
        templateUrl: 'app/shared/zodiacModalView.html',
        controller: 'ZodiacModalController',
        size: 'sm',
        resolve: {
          sign: function(){
            return $scope.chineseZodiac[index];
          }
        }
      });
    }
  }
]);