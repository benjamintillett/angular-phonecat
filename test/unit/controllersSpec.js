'use strict';

/* jasmine specs for controllers go here */
beforeEach(module('phonecatApp'));

describe('PhoneListCtrl', function() {

	var scope, ctrl, $httpBackend;


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

describe('PhoneListCtrl', function() {

	var scope, ctrl, $httpBackend;


	beforeEach(inject(function(_$httpBackend_,$rootScope,$routeParams,$controller){
		$httpBackend = _$httpBackend_;
		$httpBackend.expectGET('phones/xyz.json').respond({name: 'phone xyz'});

		$routeParams.phoneId = 'xyz';
		scope = $rootScope.$new();
		ctrl = $controller('PhoneDetailCtrl as phone',{$scope: scope});
	}));

	it('should fetch phone detail',function(){
		expect(scope.phone.details).toBeUndefined();
		$httpBackend.flush();

		expect(scope.phone.details).toEqual({name: 'phone xyz'});
	});
});
