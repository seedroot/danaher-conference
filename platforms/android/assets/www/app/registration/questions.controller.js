(function () {
	'use strict'

	angular
		.module('dlc')
		.controller('QuestionsController', QuestionsController)

	QuestionsController.$inject = ['$state'];
	function QuestionsController ($state) {
		var vm = this;
	}
})();