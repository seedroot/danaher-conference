(function () {
	'use strict'

	angular
		.module('dlc')
		.controller('TellusController', TellusController)

	TellusController.$inject = ['$state'];
	function TellusController ($state) {
		var vm = this;
		vm.attendee = JSON.parse(window.localStorage.attendee);

		vm.next = next;

		function next () {
			var _payload = {
				uid: vm.attendee.uid,
				something_to_share: vm.attendee.something_to_share
			}

			var attendees = Built.App('blte2d77fe90da1fd4d').Class('attendees').Object;
			//var attendeeObj = attendees(vm.attendee.uid);
			attendees(_payload).save()
				.then(function(attendee) {
				    //window.localStorage.attendee = JSON.stringify(attendee.toJSON());
				    $state.go('questions'); 
				}, function(error) {
				    vm.msg = error;
				});
		}

	}
})();