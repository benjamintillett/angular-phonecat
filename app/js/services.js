'use strict';

/* Services */

var phonecatServices = angular.module('phonecatServices',['ngResource']);

function Phone($resource){
	return $resource('phones/:phoneId.json',{},{
		query: { method: 'GET', params: { phoneId: 'phones'}, isArray: true }
	});
}

phonecatServices.factory('Phone',['$resource', Phone]);

