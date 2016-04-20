'use strict';
pulseApp.controller('SettingsController',
        function SettingsController($scope) {
            $scope.title = "Settings";
            $scope.navdata = [
                {"id": 1, "nav": "/dashboard", "name": "DASHBOARD"},
                {"id": 2, "nav": "/myevents", "name": "MY EVENTS"},
                {"id": 3, "nav": "/affiliates", "name": "MY Affiliates"},
                {"id": 3, "nav": "/tickets", "name": "MY TICKETS"}
            ];
        });


