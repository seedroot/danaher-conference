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
		      allowEdit: true,
		      encodingType: Camera.EncodingType.JPEG,
		      targetWidth: 100,
		      targetHeight: 100,
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
			var upload = config.upload;
			upload = upload.setFile(image);

			upload
				.save()
				.then(function(upload) {
				  	console.log(upload);

				  	var attendeeObj = Built.App('blte2d77fe90da1fd4d').Class('attendees').Object;
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