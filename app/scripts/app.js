define(['angular', 'angularRouter'], function() {
    var app     = angular.module('webpackTestApp', ['ui.router']);
    app.config(function($stateProvider, $urlRouterProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {

        app.controllerProvider = $controllerProvider;
        app.compileProvider    = $compileProvider;
        app.stateProvider      = $stateProvider;
        app.filterProvider     = $filterProvider;
        app.provide            = $provide;

        $urlRouterProvider.otherwise('/');

        $stateProvider.state({
            name: 'home',
            url: '/',
            templateUrl: '/glepur/webpack-test/app/views/home.html',
            controller: 'HomeCtrl',
            resolve: {
                'preloadController': function($q) {
                    var deferred = $q.defer();
                    
                    require.ensure([], function() {
                        // callback here
                        require('home');
                        deferred.resolve();
                    });

                    return deferred.promise;
                }
            },
        });
        $stateProvider.state({
            name: 'about',
            url: '/about/',
            templateUrl: '/glepur/webpack-test/app/views/about.html',
            controller: 'AboutCtrl',
            resolve: {
                'preloadController': function($q) {
                    var deferred = $q.defer();
                    
                    require.ensure([], function() {
                        // callback here
                        require('about');
                        deferred.resolve();
                    });

                    return deferred.promise;
                }
            },
        });
        $stateProvider.state({
            name: 'contact',
            url: '/contact/',
            templateUrl: '/glepur/webpack-test/app/views/contact.html',
            controller: 'ContactCtrl',
            resolve: {
                'preloadController': function($q) {
                    var deferred = $q.defer();
                    
                    require.ensure([], function() {
                        // callback here
                        require('contact');
                        deferred.resolve();
                    });

                    return deferred.promise;
                }
            },
        });
    });

    return app;
});
