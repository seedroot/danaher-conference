(function () {
	'use strict'

	angular
		.module('dlc')
		.controller('LoginController', LoginController)

	LoginController.$inject = ['config', '$state'];
	function LoginController (config, $state) {
		var vm = this;
		vm.login = login

		function login () {
			if(vm.email && vm.password){
				if(vm.email.trim().length > 0 && vm.password.trim().length > 0){
					var attendees = Built.App('blte2d77fe90da1fd4d').Class('attendees').Query();
					
					attendees
						.where('email', vm.email)
						.exec()
						.then(function (attendee) {
							if(attendee.length > 0){
								attendee = attendee[0].toJSON();
								if(attendee.password == vm.password){
									window.localStorage.attendee = JSON.stringify(attendee);
									$state.go('selfie');
								}
								else{
									vm.msg = "incorrect login credentials"
								}
							}
							else{
								vm.msg = "user not found"
							}
						}, function (error) {
							vm.msg = "Something went wrong, please try again"
						})
				}
				else{
					vm.msg = "Enter login credentials"
				}
			}
			else{
				vm.msg = "Enter login credentials"
			}
		}
	}
})();