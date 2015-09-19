app.controller("ZodiacModalController", function ($scope, $modalInstance, sign) {
  $scope.sign = sign;

  $scope.cancel = function () {
    $modalInstance.dismiss();
  };
});