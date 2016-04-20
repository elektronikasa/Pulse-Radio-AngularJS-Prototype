'use strict';

tasksApp.controller('LogonController',
        function LogonController($scope, $cookieStore, $location, logonData,$rootScope) {
            logonData.checkState($rootScope, $cookieStore);
            
            $scope.logon = function(logonInfo, form) {
                if (form.$valid) {
                    logonData.logon(logonInfo, function(data) {
                        if (data.error) {
                            $scope.error = data.message;
                            window.alert(data.message);
                            $log.warn(data);
                        } else {
                            window.alert('Welcome back ' + data.name + ' the key is ' + data.apiKey);
                            $cookieStore.put('token', data.apiKey);
                            $cookieStore.put('name', data.name);
                            $cookieStore.put('email', data.email);
                            $cookieStore.put('createdAt', data.createdAt);
                            $scope.token = data.apiKey;
                            $scope.name = data.name;
                            $scope.email = data.email;
                            $scope.createdAt = data.createdAt;
                            $location.replace();
                            $location.path('/');
                        }
                    });
                }
            };
            $scope.logout = function() {
                window.alert('Good-Bye :( C U soon');
                $cookieStore.put('token', '');
                $cookieStore.put('name', '');
                $cookieStore.put('email', '');
                $cookieStore.put('createdAt', '');
                $scope.token = '';
                $scope.name = '';
                $scope.email = '';
                $scope.createdAt = '';
                $location.replace();
                $location.path('/logon');
            };
            $scope.cancelRegistration = function() {
                $location.replace();
                $location.path('/');
            };
        }
);

