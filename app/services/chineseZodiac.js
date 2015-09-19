app.factory("chineseZodiac", ["$http", function($http){
  return  $http.get("assets/scripts/ChineseZodiac.json.js")
   .success(function(data){
    return data;
   })
   .error(function(err){
    return err;
   });
}]);