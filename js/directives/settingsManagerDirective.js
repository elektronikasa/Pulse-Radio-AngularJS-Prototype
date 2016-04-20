'use strict';
pulseApp.directive('settingsManagerModule', function() {
    return {
        restrict: 'A',
        scope: {
            title: '@',
            navdata:'@'
        },
        templateUrl: '/partial/settingsManager/private/settingsManagerModule.html',
        transclude: true,
        link: function(scope, elem, attrs) {
            $(document).ready(function() {
                
            });
        }
    };
});