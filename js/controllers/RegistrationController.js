/**
 * Created by michaelkaraz on 4/28/14.
 */
'use strict';
tasksApp.controller('RegistrationController',
        function RegistrationController($scope, registrationData, $location) {

            $scope.registration = {};

            $scope.saveRegistration = function(registration, form) {
                if (form.$valid) {
                    registrationData.save(registration, function(data) {
                        $location.replace();
                        $location.path('/logon');
                    });
                }
            };

            $scope.cancelRegistration = function() {
                $location.replace();
                $location.path('/');
            };

        }
);
