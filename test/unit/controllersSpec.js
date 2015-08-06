'use strict';

/* jasmine specs for controllers go here */

describe('PhoneListCtrl', function() {

	var scope, ctrl, $httpBackend;

	beforeEach(module('phonecatApp'));

	beforeEach(inject(function(_$httpBackend_,$rootScope,$controller){
		$httpBackend = _$httpBackend_;
		$httpBackend.expectGET('phones/phones.json').
			respond([{name: 'Nexus S'},{name: 'Motorola DROID'}]);

		scope 	= $rootScope.$new();
		ctrl 	= $controller('PhoneListCtrl as list',{$scope:scope});
	}));

	it('should create "phones" model with two phones fetched from xhr',function(){
		expect(scope.list.phones).toBeUndefined();
		$httpBackend.flush();

		expect(scope.list.phones).toEqual([{name: 'Nexus S'},
									  {name: 'Motorola DROID'}]);
	});

	it('should set the default value of orderProp',function(){
		expect(scope.list.orderProp).toBe('age');
	});
});
