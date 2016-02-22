(function () {
	'use strict'

	angular
		.module('dlc')
		.controller('DoneController', DoneController)

	DoneController.$inject = ['$state'];
	function DoneController ($state) {
		var vm = this;
	}
})();