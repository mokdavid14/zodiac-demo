app.controller("SignController", ["$scope", "chineseZodiac", "greekZodiac", function ($scope, chineseZodiac, greekZodiac) {

  // Instantiate variables
   var today = new Date();
   $scope.invalidDate = false;

   // $scope.selectedDay = today.getDate();
   // $scope.selectedMonth = today.getMonth() + 1;
   // $scope.selectedYear = today.getFullYear();
   $scope.maxYear = today.getFullYear();

  // Obtain Zodiac data
   greekZodiac.success(function(data){
    $scope.greekZodiac = data;
   })

   chineseZodiac.success(function(data){
    $scope.chineseZodiac = data;
   })

   $scope.currentGreekZodiac = undefined;
   $scope.currentChineseZodiac = undefined;

  // Function for validating dates
  var isDate = function(y,m,d){
    var date = new Date(y, m-1, d);

    var convertedDate = "" + date.getFullYear() + (date.getMonth()+1) + date.getDate();
    var givenDate = "" + y + m + d;

    return ( givenDate == convertedDate );
  }

  // When Show my Signs is clicked
  $scope.divine = function(clickEvent){

    // If keypress event, check if Enter key (code 13)
    if (clickEvent) {
      if (clickEvent.keyCode != 13) { 
        return
      }
    }

    // Validate Date
    $scope.invalidDate = false;

    if (!isDate($scope.selectedYear,$scope.selectedMonth, $scope.selectedDay)) {
      $scope.invalidDate = true;
      $scope.currentChineseZodiac = undefined;
      $scope.currentGreekZodiac = undefined;
      return;
    }

    var selectedDate = new Date($scope.selectedYear, $scope.selectedMonth -1, $scope.selectedDay);
    

    // Greek Zodiac
    for (var i = 0; i < $scope.greekZodiac.length; i++) {
      var zodiac = $scope.greekZodiac[i];

      var startDate = new Date(zodiac.startDate);
      var endDate = new Date(zodiac.endDate);

      startDate.setFullYear($scope.selectedYear, startDate.getMonth(), startDate.getDate());
      endDate.setFullYear($scope.selectedYear, endDate.getMonth(), endDate.getDate());
      
      switch (startDate.getMonth() + 1) {
        // Capricorn Logic
        case 12:
          if (selectedDate > startDate || selectedDate < endDate) {
            $scope.currentGreekZodiac = zodiac;
          }
          break;

        // Other Signs
        default:
          if (selectedDate > startDate && selectedDate < endDate) {
            $scope.currentGreekZodiac = zodiac;
            break;
          }
      }

    }

    // Chinese Zodiac
    for (var i = 0; i < $scope.chineseZodiac.length; i++) {
      var foundSomething = false;
      var zodiac = $scope.chineseZodiac[i];

      // Find Sign
      for (var j = 0; j < zodiac.years.length; j++){
          var someYear = zodiac.years[j];
          if ($scope.selectedYear === someYear) {
            $scope.currentChineseZodiac = zodiac;
            foundSomething = true;
            break;
          }
      }
      // Break out of 2nd loop faster once something is found
      if (foundSomething) { 
        break; 
      }
    }

   };
  }
]);