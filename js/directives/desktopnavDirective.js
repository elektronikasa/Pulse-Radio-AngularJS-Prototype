'use strict';
pulseApp.directive('desktopnavModule', function() {
    return {
        restrict: 'A',
        scope: {
        },
        templateUrl: '/partial/public/desktopnavModule.html',
        transclude: true,
        link: function(scope, elem, attrs) {
            $(document).ready(function() {
                // Nav
                /////////////////////////////////////////////////////////////////
                $('.js-main-nav-select').nosFormSelect({
                    defaultDropdown: true,
                    namespace: 'nav-main-select'
                });

                $('.js-sub-nav-list-link').click(function(e) {
                    e.preventDefault();
                    $(this).tab('show');
                });

                var _this = null;
                $('.js-nav-item').on('click', function() {
                    // Hide Other sub navs
                    _this = $(this);
                    var isActive;
                    if ($(this).data('active') === true) {
                        isActive = true;
                    } else {
                        isActive = false;
                    }

                    $('.js-nav-item').data('active', false);

                    $('.js-nav-sub').slideUp(function() {
                        $(this).addClass('is-hidden').removeAttr('style');
                    });

                    $(".js-nav-sub").mouseleave(function() {
                        if (!isActive) {
                            $(_this).data('active', false);
                            // Show relevent nav
                            var name = $(_this).data('name');
                            $('.js-nav-sub-' + name).slideUp();
                        }
                    });

                    // If item is not active, show new slide
                    if (!isActive) {

                        $(this).data('active', true);

                        // Show relevent nav
                        var name = $(this).data('name');
                        $('.js-nav-sub-' + name)
                                .hide()
                                .removeClass('is-hidden')
                                .slideDown();
                    }

                });
            });
        }
    };
});