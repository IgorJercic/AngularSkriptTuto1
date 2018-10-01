var mySortList = angular.module("sortModule", []).controller("mySortList", function($scope){


var employees = [
{name: "igor", dateOfBirth : new Date("12 january 2018"), gender:"male", salary:5600},
{name: "mirko", dateOfBirth : new Date("13 january 1018"), gender:"male", salary:3600},
{name: "Ana", dateOfBirth : new Date("11 january 1019"), gender:"female", salary:5600}
];


$scope.emplye = employees;
$scope.sortColumn = "name";


//sort data 2
$scope.ReverseSort = false;


$scope.sortData =  function(column){
	$scope.ReverseSort = ($scope.sortColumn == column) ? !$scope.ReverseSort : false;
	$scope.sortColumn = column;
}


$scope.getSortClass = function(column){
if($scope.sortColumn = column){
	return $scope.ReverseSort ? 'arrowDown' : 'arrowUp'
}
return '';

}


});



