'use strict';
pulseApp.directive('desktopsearchModule', function() {
    return {
        restrict: 'A',
        scope: {
        },
        templateUrl: '/partial/public/desktopsearchModule.html',
        transclude: true,
        link: function(scope, elem, attrs) {
            $(document).ready(function() {
                // Desktop Site Search
                /////////////////////////////////////////////////////////////////
                $('.js-nav-search').on('click', function() {
                    $('.js-site-search').fadeIn();
                });

                $('.js-site-search-close').on('click', function() {
                    $('.js-site-search').fadeOut();
                });
            });
        }
    };
});