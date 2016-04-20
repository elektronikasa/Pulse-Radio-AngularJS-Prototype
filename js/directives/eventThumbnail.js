'use strict';

tasksApp.directive('eventThumbnail', function() {
    return {
        restrict: 'E',
        templateUrl: '/templates/directives/eventThumbnail.html',
        replace: true,
        scope: {
            event: "="
        }

    }
});
