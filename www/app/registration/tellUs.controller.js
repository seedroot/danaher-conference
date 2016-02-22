(function () {
	'use strict'

	angular
		.module('dlc')
		.controller('TellusController', TellusController)

	TellusController.$inject = ['$state'];
	function TellusController ($state) {
		var vm = this;
	}
})();