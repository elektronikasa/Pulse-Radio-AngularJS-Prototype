'use strict';
pulseApp.directive('topNavModule', function() {
    return {
        restrict: 'A',
        scope: {
            title: '@',
            navdata: '@'
        },
        templateUrl: '/partial/navigation/private/topnavModule.html',
        transclude: true,
        controller: ['$scope', '$location', '$rootScope', function($scope, $location, $rootScope) {
                $scope.nav=angular.fromJson($scope.navdata);
                $scope.goTo = function(url) {
                    $location.replace();
                    $location.path(url);
                };
            }],
        link: function(scope, elem, attrs) {
            
        }
    };
});