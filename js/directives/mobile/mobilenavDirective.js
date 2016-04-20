'use strict';
pulseApp.directive('mobileNavModule', function() {
    return {
        restrict: 'A',
        scope: {
        },
        templateUrl: '/partial/mobile/mobilenavModule.html',
        transclude: true,
        link: function(scope, elem, attrs) {

            $(document).ready(function() {
                // Filter for type
                $('.js-nav-item').on('click', function() {
                    var name = $(this).data('name');
                    // Only apply to phone
                    if ($(window).width() < 768) {
                        $(".js-filter").isotope({filter: ".filter" + name});
                    }

                    // Hide slides
                    $('.js-drwr-left-item').addClass('is-hidden');

                    // Show relevant slide
                    $('.js-drwr-left-item-' + name).removeClass('is-hidden');
                });
            });
        }
    };
});