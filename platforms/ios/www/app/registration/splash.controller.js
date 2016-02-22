(function () {
	'use strict'

	angular
		.module('dlc')
		.controller('SplashController', SplashController)

	SplashController.$inject = ['$state'];
	function SplashController ($state) {
		var vm = this;
		console.log('SplashController');
		setTimeout(function() {
			$state.go('basic')
		}, 1000);
	}
})();