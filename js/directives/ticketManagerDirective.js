'use strict';
pulseApp.directive('ticketManagerModule', function() {
    return {
        restrict: 'A',
        scope: {
            title: '@',
            navdata:'@'
        },
        templateUrl: '/partial/ticketManager/private/ticketManagerModule.html',
        transclude: true,
        link: function(scope, elem, attrs) {
            $(document).ready(function() {
                
            });
        }
    };
});