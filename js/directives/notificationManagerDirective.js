'use strict';
pulseApp.directive('notificationManagerModule', function() {
    return {
        restrict: 'A',
        scope: {
            title: '@',
            navdata:'@'
        },
        templateUrl: '/partial/notificationManager/private/notificationManagerModule.html',
        transclude: true,
        link: function(scope, elem, attrs) {
            $(document).ready(function() {
                
            });
        }
    };
});