'use strict';

/* jasmine specs for controllers go here */

describe('PhoneCat controllers', function(){

	beforeEach(module('phonecatApp'));

	beforeEach(function(){
		this.addMatchers({
			toEqualData: function(expected){
				return angular.equals(this.actual,expected);
			}
		});
	});

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
			expect(scope.list.phones).toEqualData([]);
			$httpBackend.flush();

			expect(scope.list.phones).toEqualData([{name: 'Nexus S'},
										  {name: 'Motorola DROID'}]);
		});

		it('should set the default value of orderProp',function(){
			expect(scope.list.orderProp).toBe('age');
		});


	});

	describe('PhoneDetailCtrl', function() {

	    var scope, $httpBackend, ctrl
	    var xyzPhoneData = function() {
	    	return {
	        	name: 'phone xyz',
	        	images: ['image/url1.png', 'image/url2.png']
	      	}
	    };

		beforeEach(inject(function(_$httpBackend_,$rootScope,$routeParams,$controller){
			$httpBackend = _$httpBackend_;
			$httpBackend.expectGET('phones/xyz.json').respond(xyzPhoneData());

			$routeParams.phoneId = 'xyz';
			scope = $rootScope.$new();
			ctrl = $controller('PhoneDetailCtrl as phone',{$scope: scope});
		}));

		it('should fetch phone detail',function(){
			expect(scope.phone.details).toBeUndefined({});
			$httpBackend.flush();

			expect(scope.phone.details).toEqualData(xyzPhoneData());
		});
	});
});
















