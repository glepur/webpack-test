'use strict';

// common stuff
require('./angular.js');
require('./angular-ui-router.js');

var app = angular.module('webpackTestApp', ['ui.router']);
app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider.state({
        name: 'home',
        url: '/',
        templateUrl: '/views/home.html',
        controller: 'HomeCtrl',
    });
    $stateProvider.state({
        name: 'about',
        url: '/about/',
        templateUrl: '/views/about.html',
        controller: 'AboutCtrl',
    });
    $stateProvider.state({
        name: 'contact',
        url: '/contact/',
        templateUrl: '/views/contact.html',
        controller: 'ContactCtrl',
    });
});

require('./controllers/home.js');
require('./controllers/about.js');
require('./controllers/contact.js');
