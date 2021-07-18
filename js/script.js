var app = angular.module("khayrJudoApp", []);

app.controller("khayrCtrl",function($scope){
  $scope.squad = ["Zeus", "Roman", "Milan", "Rogue", "Gozzo",];
  $scope.belt = ["white", "orange", "brown", "blue", "purple", "grey", "black"];
  
  $scope.addMember = function () {
      if ($scope.squad.indexOf($scope.addMemberX) == -1){
        $scope.squad.push($scope.addMemberX);
      }else{
        $scope.errortext = "The member exists";
      }
  }
  $scope.removeMember = function(x) {
    $scope.errortext = "";
    $scope.squad.splice(x, 1);
  }
});
