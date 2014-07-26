'use strict';

var app=angular.module('guamancl',
	['ngTouch','ngRoute'])
	.config(['$routeProvider', 
		function($routeProvider) {
	
		$routeProvider.when('/me', {
			templateUrl: 'views/me.html',
			activeTab:'me'
		});
		$routeProvider.when('/work', {
			templateUrl: 'views/work.html',
			activeTab:'work'
		});
		$routeProvider.when('/social-networks', {
			templateUrl: 'views/social-network.html',
			activeTab:'social-networks'
		});
		$routeProvider.when('/blog', {
			templateUrl: 'views/blog.html',
			activeTab:'blog'
		});
		$routeProvider.otherwise({redirectTo: '/me'});
	}]);

app.controller('NavigationController',
		['$scope','$route',
		function($scope,$route){
			$scope.$route=$route;
		}]);

