(function () {
	'use strict'

	angular
		.module('dlc')
		.controller('SelfieController', SelfieController)

	SelfieController.$inject = ['$state', 'config', '$cordovaCamera'];
	function SelfieController ($state, config, $cordovaCamera) {
		var vm = this;
		vm.attendee = JSON.parse(window.localStorage.attendee);

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
		      var image = document.getElementById('imgSelfie');
		      image.src = "data:image/jpeg;base64," + imageData;
		      uploadSelfie(imageData);
		    }, function(err) {
		      // error
		    });	
		}

		function uploadSelfie (image) {
			var upload = Built.App('blt5d4sample2633b').Upload();
			upload = upload.setFile(image);

			upload
				.save()
				.then(function(upload) {
					var _payload = {
						uid: vm.attendee.uid,
						profile_image: upload.uid
					}

				var attendees = Built.App('blte2d77fe90da1fd4d').Class('attendees').Object;
				attendees(_payload).save()
					.then(function(attendee) {
					    //window.localStorage.attendee = JSON.stringify(attendee.toJSON());
					    $state.go('done'); 
					}, function(error) {
					    vm.msg = error;
					});

				}, function(error) {
				  	console.log(error);
				});
		}
	}
})();