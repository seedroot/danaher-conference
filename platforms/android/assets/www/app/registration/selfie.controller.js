(function () {
	'use strict'

	angular
		.module('dlc')
		.controller('SelfieController', SelfieController)

	SelfieController.$inject = ['$state'];
	function SelfieController ($state) {
		var vm = this;
	}
})();