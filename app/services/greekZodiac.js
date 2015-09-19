app.factory("greekZodiac", ["$http", function($http){
  return  $http.get("assets/scripts/GreekZodiac.json.js")
   .success(function(data){
    return data;
   })
   .error(function(err){
    return err;
   });
}]);