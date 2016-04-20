'use strict';
pulseApp.directive('affiliateManagerModule', function() {
    return {
        restrict: 'A',
        scope: {
            title: '@',
            navdata:'@'
        },
        templateUrl: '/partial/affiliateManager/private/affiliateManagerModule.html',
        transclude: true,
        link: function(scope, elem, attrs) {
            $(document).ready(function() {
                
            });
        }
    };
});