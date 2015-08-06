'use strict';

/* jasmine specs for controllers go here */

describe('PhoneListCtrl', function() {

	var scope, ctrl;

	beforeEach(module('phonecatApp'));

	beforeEach(inject(function($controller){
		scope 	= {};
		ctrl 	= $controller('PhoneListCtrl as list',{$scope:scope});
	}));


  	it("should create a phones model with 3 phones", inject(function($controller) {
  		expect(scope.list.phones.length).toBe(3);
  	}));

  	it("should set the default value of orderProp model", function(){
  		expect(scope.list.orderProp).toBe('age');
  	});
});
