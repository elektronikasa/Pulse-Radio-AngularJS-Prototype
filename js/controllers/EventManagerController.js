'use strict';
pulseApp.controller('EventManagerController',
        function EventManagerController($scope) {
            $scope.title = "MANAGE MY EVENTS";
            $scope.navdata = [
                {"id": 1, "nav": "/dashboard", "name": "EDIT"},
                {"id": 2, "nav": "/dashboard", "name": "VIEW"},
                {"id": 3, "nav": "/dashboard", "name": "COPY"},
                {"id": 4, "nav": "/dashboard", "name": "UNPUBLISH"},
                {"id": 5, "nav": "/dashboard", "name": "CANCEL EVENT"}
            ];
        });


