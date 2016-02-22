(function () {
	'use strict'

	angular
		.module('dlc')
		.controller('BasicController', BasicController)

	BasicController.$inject = ['$state'];
	function BasicController ($state) {
		var vm = this;
		vm.attendee  = JSON.parse(window.localStorage.attendee);
		if(vm.attendee.profile_image.length > 0){
			vm.img = vm.attendee.profile_image;
		}
		else{
			vm.img = "img/user.png";	
		}

		vm.next = next;

		function next () {
			var _payload = {
				uid: vm.attendee.uid,
				full_name: vm.attendee.full_name,
				contact_number: vm.attendee.contact_number,
				email: vm.attendee.email,
				company_name: vm.attendee.company_name,
				designation: vm.attendee.designation,
				arrival_date: vm.attendee.arrival_date,
				departure_date: vm.attendee.departure_date
			}

			var attendees = Built.App('blte2d77fe90da1fd4d').Class('attendees').Object;
			//var attendeeObj = attendees(vm.attendee.uid);
			attendees(_payload).save()
				.then(function(attendee) {
				    //window.localStorage.attendee = JSON.stringify(attendee.toJSON());
				    $state.go('tellus'); 
				}, function(error) {
				    vm.msg = error;
				});
		}
	}
})();