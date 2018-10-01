var appEvent = angular.module("eventModule", []).controller("conrtroleerEvents", function($scope) {

  var technology = [
   {name: "C#", like:0, dislike :0},
   {name: "ASP", like:0, dislike :0},
   {name: "Phython", like:0, dislike :0},
   {name: "PHP", like:0, dislike :0}
  ];

  $scope.tech = technology;

  $scope.IncrementLike = function(technology_){
    technology_.like ++;
  }

  $scope.IncrementDisLike = function(technology_){
    technology_.dislike ++;
  }


});