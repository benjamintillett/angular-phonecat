'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers',[]);

function PhoneListCtrl($http){
	var self = this;
	
	$http.get('phones/phones.json').success(function(data){
		self.phones = data;
	});

	self.orderProp = 'age';

}

function PhoneDetailCtrl($routeParams,$http){
	var self = this;
	$http.get('phones/' + $routeParams.phoneId + '.json').success(function(data){
		self.details = data;
	});
}


phonecatControllers
	.controller('PhoneListCtrl',['$http',PhoneListCtrl])
	.controller('PhoneDetailCtrl',['$routeParams','$http',PhoneDetailCtrl]);

