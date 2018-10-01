var app = angular.module("modul2", []).controller("controler2", function($scope){


var employees = [
{firstName : "Ben", lastName: "Hastings", gender: "Male", salary: 5500},
{firstName : "Sara", lastName: "Paul", gender: "Male", salary: 5700},
{firstName: "Sara2", lastName: "Paul2", gender: "Female", salary: 68000},
{firstName: "Mark", lastName: "Holland", gender: "Male", salary: 57000},
];

$scope.employeees = employees;


var countries = [
{name : "UK", cities : [
	 {name : "London"}, 
	 {name : "Manchester"},
	 {name : "Briginthon"}
 ]
},

{ name : "S.A.D" , cities : [
	{name : "California"},
	{name : "Huston"},
	{name : "Vegas"}
]
},

{ name : "Croatia", cities : [
	{name : "Zagreb"},
	{name : "Split"},
	{name : "Vukovar"}
]
}



];

$scope.countries_ = countries;


});
