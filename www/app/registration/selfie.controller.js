(function () {
	'use strict'

	angular
		.module('dlc')
		.controller('SelfieController', SelfieController)

	SelfieController.$inject = ['$state', 'config'];
	function SelfieController ($state, config) {
		var vm = this;
		vm.attendee = window.localStorage.attendee;

		function uploadSelfie (image) {
			var upload = config.upload;
			upload = upload.setFile(image);

			upload
				.save()
				.then(function(upload) {
				  	console.log(upload);

				  	var attendeeObj = config.app.Object;
				  	var attendee = attendeeObj(vm.attendee.uid);
				  	attendee = attendee.set('selfie', upload[0].uid);

				  	project
						.save()
						.then(function(attendee) {
							window.localStorage.attendee = attendee;
							$state.go('basic');
						}, function(error) {
							console.log(error);
						});

				}, function(error) {
				  	console.log(error);
				});
		}
	}
})();