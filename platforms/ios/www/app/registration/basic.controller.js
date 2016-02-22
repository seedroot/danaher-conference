(function () {
	'use strict'

	angular
		.module('dlc')
		.controller('BasicController', BasicController)

	BasicController.$inject = ['$state'];
	function BasicController ($state) {
		var vm = this;
	}
})();