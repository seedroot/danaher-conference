(function () {
	'use strict'

	angular
		.module('dlc')
		.controller('SelfieController', SelfieController)

	SelfieController.$inject = ['$state', 'config', '$cordovaCamera'];
	function SelfieController ($state, config, $cordovaCamera) {
		var vm = this;
		vm.attendee = JSON.parse(window.localStorage.attendee);
		if(vm.attendee.profile_image.length > 0){
			vm.img = vm.attendee.profile_image;
		}
		else{
			vm.img = "img/selfie.png";
		}

		vm.openCamera = openCamera;
		vm.next = next;

		function openCamera () {
			var options = {
		      quality: 50,
		      destinationType: Camera.DestinationType.DATA_URL,
		      sourceType: Camera.PictureSourceType.CAMERA,
		      encodingType: Camera.EncodingType.JPEG,
		      popoverOptions: CameraPopoverOptions,
		      saveToPhotoAlbum: false,
		      correctOrientation:true
		    };

		    $cordovaCamera.getPicture(options).then(function(imageData) {
		      vm.img = "data:image/jpeg;base64," + imageData;
		    }, function(err) {
		      	vm.msg = 'Something went wrong, Please try again'
		    });	
		}

		function next () {
			var _payload = {
				uid: vm.attendee.uid,
				profile_image: vm.img
			}

			var attendees = Built.App('blte2d77fe90da1fd4d').Class('attendees').Object;
			//var attendeeObj = attendees(vm.attendee.uid);
			attendees(_payload).save()
				.then(function(attendee) {
				    //window.localStorage.attendee = JSON.stringify(attendee.toJSON());
				    $state.go('basic'); 
				}, function(error) {
				    vm.msg = error;
				});
		}
	}
})();