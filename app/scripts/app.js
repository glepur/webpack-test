define(['angular', 'angularRouter'], function() {
    var app     = angular.module('webpackTestApp', ['ui.router']);
    app.config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider.state({
            name: 'home',
            url: '/',
            templateUrl: '/views/home.html',
            controller: function() {
                require.ensure(['home'], function() {
                    // callback here
                    console.log('home loaded');
                })
            },
        });
        $stateProvider.state({
            name: 'about',
            url: '/about/',
            templateUrl: '/views/about.html',
            controller: function() {
                require.ensure(['about'], function() {
                    // callback here
                    console.log('about loaded');
                })
            },
        });
        $stateProvider.state({
            name: 'contact',
            url: '/contact/',
            templateUrl: '/views/contact.html',
            controller: function() {
                require.ensure(['contact'], function() {
                    // callback here
                    console.log('contact loaded');
                })
            },
        });
    });
});
