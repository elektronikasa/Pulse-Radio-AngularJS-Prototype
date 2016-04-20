'use strict';
pulseApp.controller('NotificationsController',
        function NotificationsController($scope) {
            $scope.title = "NOTIFICATIONS";
            $scope.navdata = [
                {"id": 1, "nav": "/", "name": "ALL"},
                {"id": 2, "nav": "/", "name": "EVENTS"},
                {"id": 3, "nav": "/", "name": "MUSIC"},
                {"id": 4, "nav": "/", "name": "CONTENT"},
                {"id": 5, "nav": "/", "name": "MY PULSE"}
            ];
        });


