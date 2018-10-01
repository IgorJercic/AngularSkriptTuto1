var myApp = angular.module("myModul", []).controller("myController", function($scope){


var employee = {

ime: "igor",
prezime: "jerčic",
ulica : "nmegdhe",
broj : 122
};

$scope.employee1 = employee;
var Ljepotica = {
ime : "Tajana",
dimenzija : 3,
image : "Images/1.jpg"
};

$scope.ljepotica = Ljepotica;
$scope.msg = "";

$scope.h = "hello";



});
