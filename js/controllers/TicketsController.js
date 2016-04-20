'use strict';
pulseApp.controller('TicketsController',
        function TicketsController($scope) {
            $scope.title = "My Tickets";
            $scope.navdata = [
                {"id": 1, "nav": "/", "name": "Past Events"},
                {"id": 2, "nav": "/", "name": "Upcoming Events"},
            ];
        });


