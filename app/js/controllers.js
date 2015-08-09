'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers',[]);

function PhoneListCtrl(Phone){
	var self = this;
	
	self.phones = Phone.query();
	self.orderProp = 'age';

}

function PhoneDetailCtrl($routeParams,Phone){
	var self = this;

	Phone.get({phoneId: $routeParams.phoneId}, function(phone){
		self.details = phone;
		self.mainImageUrl = phone.images[0];
	});

	self.setImage = function(imageUrl){
		self.mainImageUrl = imageUrl;
	};
}


phonecatControllers
	.controller('PhoneListCtrl',['Phone',PhoneListCtrl])
	.controller('PhoneDetailCtrl',['$routeParams','Phone',PhoneDetailCtrl]);

