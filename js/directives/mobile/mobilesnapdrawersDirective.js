'use strict';
pulseApp.directive('mobilesNapdrawersModule', function() {
    return {
        restrict: 'A',
        scope: {
        },
        templateUrl: '/partial/mobile/mobilesnapdrawersModule.html',
        transclude: true,
        link: function(scope, elem, attrs) {
            $(document).ready(function() {
               
                $('.js-mobi-filter').click(function() {

                    var type = $(this).attr('data-type');
                    var selector = $(this).attr('data-filter');
                    var combined = selector + type;
                    // Only apply to phone
                    if ($(window).width() < 768) {
                        $(".js-filter").isotope({filter: combined});
                    }
                    return false;
                });
            });
        }
    };
});