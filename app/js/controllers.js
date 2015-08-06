'use strict';

/* Controllers */

var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl',['$http',function($http){
  var self = this;	

  $http.get('phones/phones.json').success(function(data){
  	self.phones = data;
  });

  self.orderProp = 'age';


}]);