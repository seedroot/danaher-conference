(function () {
	'use strict'

	angular
		.module('dlc')
		.controller('QuestionsController', QuestionsController)

	QuestionsController.$inject = ['$state'];
	function QuestionsController ($state) {
		var vm = this;
		vm.attendee = JSON.parse(window.localStorage.attendee);

		vm.next = next;

		function  next () {
			var _payload = {
				uid: vm.attendee.uid,
				how_long_have_you_been_associated_with_danaher_corporation: vm.attendee.how_long_have_you_been_associated_with_danaher_corporation,
				you_associate_danaher_with: vm.attendee.you_associate_danaher_with,
				what_does_dlc_2016_mean_to_you: vm.attendee.what_does_dlc_2016_mean_to_you,
				age_profile: vm.attendee.age_profile,
				is_registration_complete: true
			}

			var attendees = Built.App('blte2d77fe90da1fd4d').Class('attendees').Object;
			//var attendeeObj = attendees(vm.attendee.uid);
			attendees(_payload).save()
				.then(function(attendee) {
				    //window.localStorage.attendee = JSON.stringify(attendee.toJSON());
				    $state.go('done'); 
				}, function(error) {
				    vm.msg = error;
				});
		}
	}
})();