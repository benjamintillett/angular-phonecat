'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp',[
	'ngRoute',
	'phonecatControllers',
]);


function Routes($routeProvider){
	$routeProvider.
		when('/phones',{
			templateUrl: 'partials/phone-list.html',
			controller: 'PhoneListCtrl as list'
		}).
		when('/phones/:phoneId',{
			templateUrl: 'partials/phone-detail.html',
			controller: 'PhoneDetailCtrl as phone'
		}).
		otherwise({
			redirectTo: '/phones'
		});
}

phonecatApp.config(["$routeProvider",Routes]);

