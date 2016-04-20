'use strict';

pulseApp.directive('navModule', function() {
    return {
        restrict: 'A',
        scope: {
            islogin: '@'
        },
        templateUrl: '/partial/navigationModule.html',
        transclude: true,
        controller: ['$scope', '$location', '$rootScope', function($scope, $location, $rootScope) {
                $scope.goToUrl = function(url, islogout) {
                    if (islogout)
                        $rootScope.islogin = false;
                    $location.replace();
                    $location.path(url);
                    
                    if ($('#userMenuSide').length) {
                        $('#popoverLoggedIn').click();
                        $('#userMenuSide').off('mouseleave');
                    }

                };
            }],
        link: function(scope, elem, attrs) {


            scope.link = function(token, path) {
                scope.goToUrl(path, false);
            };
            scope.logout = function(token, path) {
                scope.goToUrl("/", true);
            };
            scope.popoverClick = function() {
                setTimeout(function() {
                    $('#userMenuSide').on('mouseleave', (function() {
                        $('#popoverLoggedIn').click();
                        return;
                    }));
                }, 50);

            };
        }
    };
});