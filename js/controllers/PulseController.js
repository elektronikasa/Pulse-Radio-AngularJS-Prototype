'use strict';
pulseApp.controller('PulseController',
        function PulseController($scope, $location, $rootScope, $cookieStore, PulseData) {
            
            PulseData.checkState($rootScope, $cookieStore);

            $scope.login = function(token) {
                $rootScope.islogin = true;
                $location.replace();
                $location.path("/");
            };
        });


