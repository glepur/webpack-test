'use strict';

define(['angular', 'app'], function(angular, app) {
    app.controllerProvider
        .register('ContactCtrl', function () {
            console.log('Contact ctrl');
        });
});
