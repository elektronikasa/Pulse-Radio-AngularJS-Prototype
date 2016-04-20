'use strict';
pulseApp.directive('myeventsModule', function() {
    return {
        restrict: 'A',
        scope: {
        },
        templateUrl: '/partial/home/private/myeventsModule.html',
        transclude: true,
        controller: ['$scope', '$location', '$rootScope', function($scope, $location, $rootScope) {

            }],
        link: function(scope, elem, attrs) {
            $('.chart-gallery').flicker();
            $('.js-filter').isotope();

            // if($(window).width() < 768){
            //     $(".js-eventsFilter").isotope({ filter: selector });
            // }

            $('.js-filter-item').click(function(e) {
                e.preventDefault();
                var selector = $(this).attr('data-option-value');

                $(this).closest('.js-filter-container').find('.js-filter').isotope({
                    filter: selector
                });

                console.log(selector, $(this).closest('.js-filter-container'));
            });
        }
    };
});