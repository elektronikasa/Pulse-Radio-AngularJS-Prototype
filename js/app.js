'use strict';

var pulseApp = angular.module('pulseApp', ['ngRoute','ngAnimate', 'ngResource','ngCookies','mgcrea.ngStrap']);


pulseApp.config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
    $routeProvider
            .when('/',
            {
                templateUrl: '/templates/home.html',
                controller: 'HomeController'
            })
            .when('/hello',
            {
                templateUrl: '/templates/hello.html',
                controller: 'HelloController'
            })
            .when('/settings',
            {
                templateUrl: '/templates/settings.html',
                controller: 'SettingsController'
            })
            .when('/tickets',
            {
                templateUrl: '/templates/tickets.html',
                controller: 'TicketsController'
            })
            .when('/people',
            {
                templateUrl: '/templates/people.html',
                controller: 'PeopleController'
            })
            .when('/notifications',
            {
                templateUrl: '/templates/notifications.html',
                controller: 'NotificationsController'
            })
            .when('/mypulse',
            {
                templateUrl: '/templates/mypulse.html',
                controller: 'MyPulseController'
            })
            .when('/affiliates',
            {
                templateUrl: '/templates/myaffiliates.html',
                controller: 'MyAffiliatesController'
            })
            .when('/myevents',
            {
                templateUrl: '/templates/myevents.html',
                controller: 'MyEventsController'
            })
            .when('/eventmanager',
            {
                templateUrl: '/templates/eventmanager.html',
                controller: 'EventManagerController'
            })
            .when('/dashboard',
            {
                templateUrl: '/templates/dashboard.html',
                controller: 'DashboardController'
            })
            .when('/mobi_mymusic',
            {
                templateUrl: '/templates/mobile-mymusic.html',
                controller: 'MobileMyMusicController'
            })
            .when('/cart',
            {
                templateUrl: '/templates/cart.html',
                controller: 'ShoppingCartController'
            })
            .when('/uploadmusic',
            {
                templateUrl: '/templates/uploadmusic.html',
                controller: 'UploadMusicController'
            })
            .when('/article',
            {
                templateUrl: '/templates/single-article.html',
                controller: 'SingleArticleController'
            })
            .when('/article-listing',
            {
                templateUrl: '/templates/list-article.html',
                controller: 'ListArticleController'
            })
            .when('/podcast-listing',
            {
                templateUrl: '/templates/list-podcast.html',
                controller: 'ListPodcastController'
            })
            .when('/podcast',
            {
                templateUrl: '/templates/podcast.html',
                controller: 'SinglePodcastController'
            })
            .when('/event',
            {
                templateUrl: '/templates/single-event.html',
                controller: 'SingleEventController'
            })
            .when('/event-listing',
            {
                templateUrl: '/templates/list-events.html',
                controller: 'ListEventsController'
            })
            ;
    $routeProvider.otherwise({redirectTo: '/'});

}).run();


