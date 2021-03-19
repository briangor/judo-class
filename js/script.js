var app = angular.module("khayrJudoApp", []);

app.controller("khayrCtrl",function($scope){
  $scope.squad = ["Zeus", "Roman", "Milan", "Rogue"];
  $scope.belt = ["white", "orange", "brown", "blue", "purple", "grey", "black"];
});
