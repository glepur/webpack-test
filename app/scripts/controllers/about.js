'use strict';

define(['angular', 'app'], function(angular, app) {
	app.controllerProvider
	    .register('AboutCtrl', function ($scope) {
	        $scope.uspjeh = 'Uspjeh';
	    });
});
