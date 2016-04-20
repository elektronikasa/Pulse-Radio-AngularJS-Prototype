 $(document).ready(function() {
 // Minimize header
        function minimizeHeader(offsetTop) {
            if(offsetTop > 0) {
                $('.js-header-banner').slideUp();
                $('#content').addClass('main--scrolled');
            } else {
                $('.js-header-banner').slideDown();
                $('#content').removeClass('main--scrolled');
            }
        }

        function backToTop(offsetTop) {
            var $el = $('.js-back-top');

            if(offsetTop > 0) {
                $el.removeClass('back-top--hidden').css('opacity', 1);
            } else {
                $el.addClass('back-top--hidden').css('opacity', 0);
            }
        }

        $('.js-back-top').on('click', function(){
            // Scroll to top
            $('.js-snap').animate({
                scrollTop: 0
            });
        });

        // Mashable Sharing
        function mashableSharing(offsetTop) {
            if(offsetTop > 0) {
                $('#geoCountry').css("display", "none");
                $('.nav-main__item-link').css("display", "none");
                $('#topNavShare').css("display", "");
            } else {
                $('#geoCountry').css("display", "");
                $('.nav-main__item-link').css("display", "");
                $('#topNavShare').css("display", "none");
            }
        }

        function scrollEvent() {
            // Get element which acts as body's offset top
            var offsetTop = $('.js-snap').scrollTop();
            minimizeHeader(offsetTop);
            mashableSharing(offsetTop);
            backToTop(offsetTop);
        }

        pulseApp.scrollTimer = null;

        // Create a scroll throttle
        $('.js-snap').scroll(function(){

            if(pulseApp.scrollTimer !== null) {
                window.clearTimeout(pulseApp.scrollTimer);
                pulseApp.scrollTimer = window.setTimeout(scrollEvent, 50);

                return;
            }

            pulseApp.scrollTimer = window.setTimeout(scrollEvent, 50);
        });

    });