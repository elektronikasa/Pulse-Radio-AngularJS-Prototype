'use strict';
pulseApp.controller('MyAffiliatesController',
        function MyAffiliatesController($scope) {
            $scope.title = "My affiliate sales";
            $scope.navdata = [
                {"id": 1, "nav": "/dashboard", "name": "DASHBOARD"},
                {"id": 2, "nav": "/myevents", "name": "MY EVENTS"},
                {"id": 3, "nav": "/tickets", "name": "MY TICKETS"},
                {"id": 4, "nav": "/settings", "name": "MY SETTINGS"}
            ];
        });


