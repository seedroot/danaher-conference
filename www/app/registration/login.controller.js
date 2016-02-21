(function () {
	'use strict'

	angular
		.module('dlc')
		.controller('LoginController', LoginController)

	LoginController.$inject = ['config', '$state'];
	function LoginController (config, $state) {
		var vm = this;
		vm.login = login

		var attendees = config.app.Query();

		function login () {
			if(vm.email.trim().length > 0 && vm.password.trim().length > 0){
				attendees
					.where('email', vm.email)
					.exec()
					.then(function (attendee) {
						attendee = attendee[0].toJSON();
						if(attendee.password == vm.password){
							window.localStorage.attendee = attendee;
							$state.go('selfie');
						}
						else{
							console.log('incorrect login creds');
						}
					}, function (error) {
						console.log(error);
					})
			}
			else{
				console.log('empty values');
			}
		}
	}
})();