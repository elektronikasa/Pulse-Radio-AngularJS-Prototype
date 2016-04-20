(function($) {
    window.pulseApp = {};

    

    // Tablet width isotope column manipulation
    function resizeEvent() {
        var $secListItem = $('.js-sec-list-item');
        var windowWidth = $(window).width();

        $secListItem.each(function() {
            var $this = $(this);
            var colPadding = parseFloat($this.closest('.js-filter').css('paddingLeft')) * 2;
            var colWidth = $this.closest('.js-sec-list-col').width() - colPadding;

            $this.width(colWidth);
            $('.js-filter').isotope();
        });

        if (windowWidth >= 768 && windowWidth < 992) {
            var windowHeight = $(window).height();
            var headerHeight = $('.js-fixed-content').height();
            var navBotHeight = $('.js-nav-bot').height();
            var columnHeight = windowHeight - (headerHeight + navBotHeight);

            $('.js-sec-list-col').height(columnHeight);
        } else {
            $('.js-sec-list-col').removeAttr('style');
        }
    }

    // Throttle resize
    pulseApp.resizeTimer = null;
    $(window).resize(function() {

        if (pulseApp.resizeTimer !== null) {
            window.clearTimeout(pulseApp.resizeTimer);
            pulseApp.resizeTimer = window.setTimeout(resizeEvent, 50);

            return;
        }

        pulseApp.resizeTimer = window.setTimeout(resizeEvent, 50);
    });

    $(window).load(function() {
        $('<iframe />', {
            //src: './includes/pulse-admin/admin-index.php',
            src: '',
            frameborder: '0',
            scrolling: 'auto'
        }).css({
            'width': '100%',
            'height': '100%',
            'minHeight': '800px',
            'display': 'block'
        }).appendTo('#pulseBack');
    });

    $(document).ready(function() {

        // setup the isotop filtering....
        // $('.js-sec-list').isotope();

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




        $('.flip_nav').menuFlip();
        $('.flip_nav2').menuFlip();
        $('.flip_nav3').menuFlip();




// dropdown menu - events
        $(document).ready(function() {
            $('.nav-toggle').click(function() {
                //get collapse content selector
                var collapse_content_selector = $(this).attr('href');

                //make the collapse content to be shown or hide
                var toggle_switch = $(this);
                $(collapse_content_selector).toggle(function() {
                    if ($(this).css('display') == 'none') {
                        //change the button label to be 'Show'
                    } else {
                        //change the button label to be 'Hide'
                    }
                });

                $('.music').click(function() {
                    $("#openLeft").css({display: "none"});
                });
                $('.words').click(function() {
                    $("#openLeft").css({display: "none"});
                });
                $('.events').click(function() {
                    $("#openLeft").css({display: "block"});
                });
            });

            // Only enable snapper script on mobile and tablet
            if ($(window).width() < 993) {
                pulseApp.snapper = new Snap({
                    element: $('.js-snap').get(0)
                });

                $('#openLeft').on('click', function() {
                    // toggle snap
                    if (pulseApp.snapper.state().state === 'left') {
                        pulseApp.snapper.close('left')
                    } else {
                        pulseApp.snapper.open('left');
                    }
                });

                $('#openLeftMypulse').on('click', function() {
                    pulseApp.snapper.open('left');
                });

                $('#openRight').on('click', function() {
                    // toggle snap
                    if (pulseApp.snapper.state().state === 'right') {
                        pulseApp.snapper.close('right')
                    } else {
                        pulseApp.snapper.open('right');
                    }
                });
            }

            $('#openLeftMypulse').click(function() {
                $(".my-pulse-menu").show();
                $(".my-events-menu").hide();
            });

            $('#openLeft').click(function() {
                $(".my-pulse-menu").hide();
                $(".my-events-menu").show();
            });

            // $('#preloader').fadeOut(1200, function() {
            //   $('#grid').css('visibility','visible');
            //   $(this).remove();
            // });
        });

        /*
         Jamy
         */

        // Minimize header
        function minimizeHeader(offsetTop) {
            if (offsetTop > 0) {
                $('.js-header-banner').slideUp();
                $('#content').addClass('main--scrolled');
            } else {
                $('.js-header-banner').slideDown();
                $('#content').removeClass('main--scrolled');
            }
        }

        function backToTop(offsetTop) {
            var $el = $('.js-back-top');

            if (offsetTop > 0) {
                $el.removeClass('back-top--hidden').css('opacity', 1);
            } else {
                $el.addClass('back-top--hidden').css('opacity', 0);
            }
        }

        $('.js-back-top').on('click', function() {
            // Scroll to top
            $('.js-snap').animate({
                scrollTop: 0
            });
        });

        // Mashable Sharing
        function mashableSharing(offsetTop) {
            if (offsetTop > 0) {
                $('#geoCountry').css("display", "none");
                $('#fbTopShare').css("display", "");
                $('#twTopShare').css("display", "");
                $('#gplusTopShare').css("display", "");
            } else {
                $('#geoCountry').css("display", "");
                $('#fbTopShare').css("display", "none");
                $('#twTopShare').css("display", "none");
                $('#gplusTopShare').css("display", "none");
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
        $('.js-snap').scroll(function() {

            if (pulseApp.scrollTimer !== null) {
                window.clearTimeout(pulseApp.scrollTimer);
                pulseApp.scrollTimer = window.setTimeout(scrollEvent, 50);

                return;
            }

            pulseApp.scrollTimer = window.setTimeout(scrollEvent, 50);
        });

        // Feature detect and polyfill input placeholders
        if (!Modernizr.input.placeholder) {
            $('input[placeholder]').nosInputPlaceholder();
        }

        

        // Custom search selects
        $('.js-search-select').nosFormSelect({
            defaultDropdown: true,
            namespace: 'search-select',
            onInit: function($el, $fauxEl, o) {
                var labelText = $el.data('name');

                var $label = $('<div />', {
                    'class': o.namespace + '__label',
                    'text': labelText + ':'
                });

                var $placeholderWrap = $('<div />', {
                    'class': o.namespace + '__placeholder-wrap',
                })


                o.dom.$placeholder.wrap($placeholderWrap).before($label);
            }
        });


        var $eventsOverviewContainer = $('#myEventsOverviewFilter');

        $('.js-select').nosFormSelect({
            defaultDropdown: true,
            namespace: 'form-select',
            onChange: function($el, $fauxEl) {
                // Filter isotopes
                var filter = $el.find(':selected').data('filter');

                if (filter) {
                    $eventsOverviewContainer.isotope({filter: filter});
                }
            }
        });

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

        // filter items when filter link is clicked
        $('.js-myEventOverviewFilters [data-filter]').click(function() {

            var selector = $(this).attr('data-filter');
            $container.isotope({filter: selector});
        });

        $(window).load(function() {
            $('.js-preloader').fadeOut(1200);
            //$('.js-snap-item').not('.js-snap-home').addClass('is-hidden');
        });

        



        




        
        // Play component
        /////////////////////////////////////////////////////////////////


        


        

        // Notification
        /////////////////////////////////////////////////////////////////
        $('.js-notification-close').on('click', function() {
            $(this).closest('.js-notification').fadeOut(700);
        });

        

        //Michael this manages the alternating event manager of bootstrapper on diff ul's
        // Hack to enforce items are loaded only once modified to happen only on button click ~~Michael
        $("a[href*=#myEvents-performance-demographics]").click(function(e) {
            e.preventDefault();
            var timer = window.setTimeout(function() {
                triggerHiddenEl();
            }, 300);
            $('ul.myevents > li.active').removeClass("active");
            $('ul.statistics > li.active').removeClass("active");
        });

        $("a[href*=#myEvents-statistics-fans]").click(function(e) {
            e.preventDefault();
            $('ul.myevents > li.active').removeClass("active");
            $('ul.demographics > li.active').removeClass("active");
        });

        $("ul.myevents").click(function(e) {
            e.preventDefault();
            $('ul.statistics > li.active').removeClass("active");
            $('ul.demographics > li.active').removeClass("active");
        });

        $("ul.promote").click(function(e) {
            e.preventDefault();
            $('ul.statistics > li.active').removeClass("active");
            $('ul.attendees > li.active').removeClass("active");
            $('ul.dayofevent > li.active').removeClass("active");
        });
        $("ul.statistics").click(function(e) {
            e.preventDefault();
            $('ul.promote > li.active').removeClass("active");
            $('ul.attendees > li.active').removeClass("active");
            $('ul.dayofevent > li.active').removeClass("active");
        });
        $("ul.attendees").click(function(e) {
            e.preventDefault();
            $('ul.statistics > li.active').removeClass("active");
            $('ul.promote > li.active').removeClass("active");
            $('ul.dayofevent > li.active').removeClass("active");
        });
        $("ul.dayofevent").click(function(e) {
            e.preventDefault();
            $('ul.statistics > li.active').removeClass("active");
            $('ul.attendees > li.active').removeClass("active");
            $('ul.promote > li.active').removeClass("active");
        });



    });
//Share Component Mock Concept :: Michael
//////////////////////////////////////////////////////////////////////////////////////
    $('.share-button').sharrre({
        share: {
            googlePlus: true,
            facebook: true,
            twitter: true
        },
        buttons: {
            googlePlus: {size: 'tall', annotation: 'bubble'},
            facebook: {layout: 'box_count'},
            twitter: {count: 'vertical', via: '_JulienH'}
        },
        hover: function(api, options) {
            $(api.element).find('.buttons').show();
        },
        hide: function(api, options) {
            $(api.element).find('.buttons').hide();
        },
        enableTracking: true
    });


    
    


})(jQuery);

//jquery search for id in any json array

function getObjects(obj, key, val) {
    var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i))
            continue;
        if (typeof obj[i] == 'object') {
            objects = objects.concat(getObjects(obj[i], key, val));
        } else if (i == key && obj[key] == val) {
            objects.push(obj);
        }
    }
    return objects;
}

$(window).on('load', function() {


    // show mobile plyaer tabs
    $('#showPlayerMenu').click(function() {

        $('#playerMixTabs').fadeToggle("slow", "linear");
        $("#playerMixCover").hide();
    });

    $('#showmenuFooter').click(function() {
        $("#pulseBack").hide().removeClass('is-hidden').fadeToggle("slow", "linear");
        $("#pulseFront").hide();
        $("#closeAdmin").css({display: ""});
    });

    $('#closeAdmin').click(function() {
        $("#pulseFront").fadeToggle("slow", "linear");
        $("#pulseBack").hide();
        $("#closeAdmin").hide();
    });


    // filtering on my events overview

    // cache container
    var $container = $('#myEventsOverviewFilter');
    // initialize isotope
    $container.isotope({
        // options...
        masonryHorizontal: {
            rowHeight: 180
        }
    });


    //Start charts carousel
    $('#charts-carousel').tinycarousel({pager: true, interval: true});

    $(window).trigger('resize');

});

