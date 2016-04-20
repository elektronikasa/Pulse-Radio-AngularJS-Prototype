'use strict';
pulseApp.directive('channelManagerModule', function() {
    return {
        restrict: 'A',
        scope: {
            title: '@',
            navdata:'@'
        },
        templateUrl: '/partial/channelManager/private/channelManagerModule.html',
        transclude: true,
        link: function(scope, elem, attrs) {
            $(document).ready(function() {
                
            });
        }
    };
});