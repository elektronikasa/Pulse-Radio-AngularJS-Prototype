'use strict';
pulseApp.controller('DashboardController',
        function DashboardController($scope) {
            $scope.title = "DASHBOARD";
            $scope.navdata = [
                {"id": 2, "nav": "/myevents", "name": "MY EVENTS"},
                {"id": 2, "nav": "/affiliates", "name": "MY AFFILIATES"},
                {"id": 3, "nav": "/tickets", "name": "MY TICKETS"},
                {"id": 4, "nav": "/settings", "name": "MY SETTINGS"}
            ];
        });


