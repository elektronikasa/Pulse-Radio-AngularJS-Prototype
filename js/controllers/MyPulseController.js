'use strict';
pulseApp.controller('MyPulseController',
        function MyPulseController($scope) {
            $scope.title = "My Channel";
            $scope.navdata = [
                {"id": 1, "nav": "/dashboard", "name": "DASHBOARD"},
                {"id": 2, "nav": "/myevents", "name": "MY EVENTS"},
                {"id": 3, "nav": "/tickets", "name": "MY TICKETS"},
                {"id": 4, "nav": "/affiliates", "name": "My Affiliates"},
                {"id": 4, "nav": "/settings", "name": "My Settings"}
            ];
        });


