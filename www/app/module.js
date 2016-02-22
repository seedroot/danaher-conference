(function () {
	'use strict'

	var config = {
		app: Built.App('blte2d77fe90da1fd4d').Class('attendees'),
		upload: Built.App('blt5d4sample2633b').Upload()
	}

	angular
		.module('dlc', ['ngCordova', 'ui.router'])
		.constant('config', config)
		.config(appConfig)
		//.controller('MainController', MainController)

	appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	function appConfig ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('splash', {
				url: '/splash',
				templateUrl: 'app/registration/splash.html',
				controller: 'SplashController',
				controllerAs: 'vm'
			})
			.state('login', {
				url: '/login',
				templateUrl: 'app/registration/login.html',
				controller: 'LoginController',
				controllerAs: 'vm'
			})
			.state('selfie', {
				url: '/selfie',
				templateUrl: 'app/registration/selfie.html',
				controller: 'SelfieController',
				controllerAs: 'vm'
			})
			.state('basic', {
				url: '/basic',
				templateUrl: 'app/registration/basic.html',
				controller: 'BasicController',
				controllerAs: 'vm'
			})
			.state('questions', {
				url: '/questions',
				templateUrl: 'app/registration/questions.html',
				controller: 'QuestionsController',
				controllerAs: 'vm'
			})
			.state('tellus', {
				url: '/tellus',
				templateUrl: 'app/registration/tellUs.html',
				controller: 'TellusController',
				controllerAs: 'vm'
			})
			.state('done', {
				url: '/done',
				templateUrl: 'app/registration/done.html',
				controller: 'DoneController',
				controllerAs: 'vm'
			})

		$urlRouterProvider.otherwise('/splash');
	}
})();