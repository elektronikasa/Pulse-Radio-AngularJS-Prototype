(function($) {
    window.pulseApp = {};

    // trigger checks - Demographics
    var lineChartAlt = false;

    function triggerHiddenEl() {
        //console.log($('#line-chart-alt').is(':visible'));
        if ($('#line-chart-alt').is(':visible') && lineChartAlt == false) {

            Morris.Line({
                element: 'line-chart-alt',
                data: [
                    {y: '2006', a: 50, b: 40},
                    {y: '2007', a: 65, b: 55},
                    {y: '2008', a: 50, b: 40},
                    {y: '2009', a: 75, b: 65},
                    {y: '2010', a: 50, b: 40},
                    {y: '2011', a: 75, b: 65},
                    {y: '2012', a: 100, b: 90}
                ],
                xkey: 'y',
                ykeys: ['a', 'b'],
                labels: ['Series A', 'Series B'],
                lineColors: ['#0aa699', '#d1dade'],
            });

            lineChartAlt = true;
        }
    }

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
            //src: './framework/includes/pulse-admin/admin-framework/index.php',
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


        // $("#widgetLogin").popover({trigger: 'click', placement: 'right', html: 'true', container: '#widgetNavPopOvers', content: $("#popupcontent_loginpopover").html()});

        //$("#widgetLoggedIn").popover({trigger: 'click', placement: 'right', html: 'true', container: '#widgetNavPopOvers', content: $("#popupcontent_loggedinpopover").html()});


        // $("#widgetLogin").on("show.bs.popover", function () {
        /*
         $(".contentContainerHP").css("z-index", -1);
         $(this).css("z-index", 110);
         $("#widgetNavPopOvers").css("z-index", 110);
         */
        // });

        // $("#widgetLogin").on("shown.bs.popover", function () {
        //     $(".hide-popover").on("click", function () {
        //         console.log("close?");
        //         $("#widgetLogin").popover("hide");
        //     });
        //     window.scrollBy(0, 1);
        // });

        // $("#widgetLogin").on("hide.bs.popover", function () {
        //     //console.log("hiding... reinitialist isotopes");
        //     //$('#eventsFilter').isotope();
        //     //$('#musicFilter').isotope();
        //     //$('#wordsFilter').isotope();
        //     //reInitPopovers();
        // });

        // $("#widgetLogin").on("hidden.bs.popover", function () {
        //     console.log("emptied...");
        //     $("#widgetNavPopOvers").html("");
        //     //console.log("hiding... reinitialist isotopes");
        //     //$('#eventsFilter').isotope();
        //     //$('#musicFilter').isotope();
        //     //$('#wordsFilter').isotope();
        //     //reInitPopovers();
        // });


        /*
         $("#widgetLogin").popover({trigger: 'click', placement : 'right', html: 'true', container: '#widgetNavPopOvers', content: $("#popupcontent_loginpopover").html()});
         $("#widgetLogin").on("show.bs.popover", function(){
         $(".contentContainerHP").css("z-index", -1);
         $(this).css("z-index", 110);
         $("#widgetNavPopOvers").css("z-index", 110);
         //     $("#widgetNavPopOvers").find(".popover").css("top", "0px !important");
         //     $("#widgetNavPopOvers").find(".arrow").css("top", "100px !important");
         });
         
         $(".pulseLovesTrigger").parent().each(
         function(){
         html = $(this).find("a").attr("rel");
         html = $("#" + html).html();
         id = "#" + $(this).attr("id");
         
         $(this).popover(
         {
         trigger:   'hover',
         placement:     'bottom',
         html:      'true',
         container: id,
         content:   html
         });
         }
         );
         $(".pulseLovesTrigger").parent().on("show.bs.popover", function(){
         $(".contentContainerHP").not( $(this).closest(".contentContainerHP")).css("z-index", 0);
         $(".contentContainerHP").not( $(this).closest(".contentContainerHP")).css("overflow", "hidden");
         
         $(this).closest(".contentContainerHP").css("z-index", 100);
         $(this).closest(".contentContainerHP").css("overflow", "visible");
         });
         */

        // $("#eventsFilter").niceScroll({horizrailenabled:false});


        // reInitPopovers();

        // hide #back-top first
        // $("#back-top").hide();

        //Start charts carousel
        // $('#charts-carousel').tinycarousel({ pager: true, interval: true  });

        // // fade in #back-top
        // $(window).scroll(function () {
        //     if ($(this).scrollTop() > 100) {
        //         $('#back-top').fadeIn();
        //     } else {
        //         $('#back-top').fadeOut();
        //     }
        // });

        // // scroll body to 0px on click
        // $('#back-top a').click(function () {
        //     $('body,html').animate({
        //         scrollTop: 0
        //     }, 800);
        //     return false;
        // });



        // function sticky_relocate() {
        //     var window_top = $(window).scrollTop();
        //     var div_top = $('#sticky-anchor').offset().top;
        //     if (window_top > div_top) {
        //         $('#sticky').addClass('stick');
        //     } else {
        //         $('#sticky').removeClass('stick');
        //     }
        // }

        // $(function () {
        //     $(window).scroll(sticky_relocate);
        //     sticky_relocate();
        // });


// dropdown menu - events
        // $('#showmenuEvents').click(function() {
        //         $('.dropdown-events').fadeToggle( "slow", "linear" );
        //         $(".dropdown-music").css({display: "none"});
        //         $(".dropdown-words").css({display: "none"});
        //         $(".dropdown-footer").css({display: "none"});
        // });
        // $('#showmenuWords').click(function() {
        //         $('.dropdown-words').fadeToggle( "slow", "linear" );
        //         $(".dropdown-events").css({display: "none"});
        //         $(".dropdown-music").css({display: "none"});
        //         $(".dropdown-footer").css({display: "none"});
        // });
        //  $('#showmenuMusic').click(function() {
        //         $('.dropdown-music').fadeToggle( "slow", "linear" );
        //         $(".dropdown-events").css({display: "none"});
        //         $(".dropdown-words").css({display: "none"});
        //         $(".dropdown-footer").css({display: "none"});

        // });
        // $('#showmenuFooter').click(function() {
        //         $('.dropdown-footer').fadeToggle( "slow", "linear" );
        //         $(".dropdown-events").css({display: "none"});
        //         $(".dropdown-words").css({display: "none"});
        //         $(".dropdown-music").css({display: "none"});

        // });

        $('.flip_nav').menuFlip();
        $('.flip_nav2').menuFlip();
        $('.flip_nav3').menuFlip();

        // $('#showAdmin').click(function() {
        //         $('#contentAdmin').css({visibility: "visible"});
        //         $('#contentAdmin').css({height: "100%"});
        //         $('#contentAdmin').css({display: ""});
        //         $("#content").css({display: "none"});
        //         $(".filterNav").css({display: "none"});
        //         $("#sticky").css({display: "none"});
        //         $('#showContent').css({display: ""});
        // });
        // $('#showContent').click(function() {
        //         $('#contentAdmin').css({visibility: "hidden"});
        //         $('#contentAdmin').css({display: "none"});
        //         $('#showContent').css({display: "none"});
        //         $("#content").fadeToggle( "slow", "linear" );
        //         $(".filterNav").fadeToggle( "slow", "linear" );
        //         $("#sticky").fadeToggle( "slow", "linear" );
        // });

//         function pageY(elem) {
//             if(!elem) return;
//             return elem.offsetParent ? (elem.offsetTop + pageY(elem.offsetParent)) : elem.offsetTop;
//         }
// var buffer = 10; //scroll bar buffer
// function resizeIframe() {
//     var height = window.innerHeight || document.body.clientHeight || document.documentElement.clientHeight;
//     height -= pageY(document.getElementById('ifm'))+ buffer ;
//     height = (height < 0) ? 0 : height;
//     document.getElementById('ifm').style.height = height + 'px';
// }
// window.onresize = resizeIframe;
// window.onload = resizeIframe;
// $('#contentAdmin').css({display: "none"});
//     });


// dropdown menu - events
        $(document).ready(function() {
            // $('#showPlayer').click(function() {
            //         $('#playerContainer').fadeToggle( "slow", "linear" );
            //         $("#bannerContainer").css({display: "none"});
            //         $('body,html').animate({
            //             scrollTop: 0
            //         }, 200);
            //         return false;
            // });
            // $('#closePlayer').click(function() {
            //         $('#bannerContainer').fadeToggle( "slow", "linear" );
            //         $("#playerContainer").css({display: "none"});
            // });



            // dropdown menu - events
            $('.btnSignUp-StepTwo').click(function() {
                $('.signup-container--stepTwo').fadeToggle("slow", "linear");
                $(".signup-container--stepOne").css({display: "none"});
                //$(".signup-container--stepTwo").css({display: "none"});
                $(".signup-container--stepThree").css({display: "none"});
                $(".signup-container--stepFour").css({display: "none"});
                $(".signup-container--stepFive").css({display: "none"});
            });

            $('.btnSignUp-StepThree').click(function() {
                $(".signup-container--stepThree").fadeToggle("slow", "linear");
                $(".signup-container--stepOne").css({display: "none"});
                $('.signup-container--stepTwo').css({display: "none"});
                //$(".signup-container--stepTwo").css({display: "none"});
                $(".signup-container--stepFour").css({display: "none"});
                $(".signup-container--stepFive").css({display: "none"});
            });

            $('.btnSignUp-StepFour').click(function() {
                $(".signup-container--stepFour").fadeToggle("slow", "linear", function() {
                    // vincent
                    //dj slider
                    // Make sure slider hasn't yet been initialized
                    if (!$('#dj-slider').hasClass('plusslider-container')) {
                        // $('#dj-slider').plusSlider({
                        //     sliderEasing: 'easeInOutExpo', // Anything other than 'linear' and 'swing' requires the easing plugin
                        //     fullWidth: true,
                        //     createPagination: false
                        // });
                    }
                });
                $(".signup-container--stepOne").css({display: "none"});
                $('.signup-container--stepTwo').css({display: "none"});
                //$(".signup-container--stepTwo").css({display: "none"});
                $(".signup-container--stepThree").css({display: "none"});

                $(".signup-container--stepFive").css({display: "none"});
            });

            $('.btnSignUp-StepFive').click(function() {
                $(".signup-container--stepOne").css({display: "none"});
                $('.signup-container--stepTwo').css({display: "none"});
                //$(".signup-container--stepTwo").css({display: "none"});
                $(".signup-container--stepThree").css({display: "none"});
                $(".signup-container--stepFour").css({display: "none"});
                $(".signup-container--stepFive").fadeToggle("slow", "linear");
            });

            $('.btnSignUp-StepOne').click(function() {
                $(".signup-container--stepOne").fadeToggle("slow", "linear");
                $('.signup-container--stepTwo').css({display: "none"});
                $(".signup-container--stepThree").css({display: "none"});
                $(".signup-container--stepFour").css({display: "none"});
                $(".signup-container--stepFive").css({display: "none"});
            });


            // $("#navigation").navobile({
            //       cta: "#show-navobile",
            //       changeDOM: true
            //     })
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

        $('.js-main-nav-select').nosFormSelect({
            defaultDropdown: true,
            namespace: 'nav-main-select'
        });

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

        // Nav
        /////////////////////////////////////////////////////////////////
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



        // Filter for type
        $('.js-mobi-nav-main-item').on('click', function() {
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





        // Play component
        /////////////////////////////////////////////////////////////////

        function togglePlayComponent() {

            if ($('.js-play-component').data('active') === true) {

                $('.js-play-component').removeAttr('style').data('active', false);

            } else {
                var windowHeight = $(window).height();
                var headerHeight = $('.js-fixed-content').height();
                var playComponentHeight = windowHeight - headerHeight;

                $('.js-play-component').height(playComponentHeight).data('active', true);
            }

            $('.js-nav-bot-left-item').toggle();
            $('.js-nav-bot-right-item').toggle();
        }

        $('.js-open-play').on('click', function() {
            togglePlayComponent();
        });

        // Player Component
        /////////////////////////////////////////////////////////////////

        function playerComponentTimeUpdate($el, $fauxEl, o) {
            var totalSecs = parseFloat($el.val());
            var mins = Math.floor(totalSecs / 60);
            var secs = totalSecs % 60;
            o.dom.$handle.text(mins + ' : ' + secs);
        }

        // function togglePlayer() {
        //     $('.js-snap').animate({
        //         scrollTop: 0
        //     }, function(){

        //         // Toggle banners
        //         if($('.js-banner').is(':visible')) {
        //             $('.js-banner').fadeOut(1000, function(){
        //                 $('.js-player-component').fadeIn();
        //             });
        //         } else {
        //             $('.js-player-component').fadeOut(function(){
        //                 $('.js-banner').fadeIn();
        //             });
        //         }
        //     });
        // }

        // $('.js-player-close').on('click', function(){
        //     togglePlayer();
        // });

        // $('.js-player-btn').on('click', function(){
        //     togglePlayer();
        // });

        // If touch doesn't exist
        if (!Modernizr.touch) {
            $('.js-player-range').nosInputRange({
                namespace: 'player-slider',
                onChange: function($el, $fauxEl, o) {
                    playerComponentTimeUpdate($el, $fauxEl, o);
                },
                onInit: function($el, $fauxEl, o) {
                    playerComponentTimeUpdate($el, $fauxEl, o);
                }
            });

            $('.js-slider-range').nosInputRange({
                namespace: 'player-alt-slider'
            });
        }

        $(".js-checkbox-switch").nosInputCheckbox({
            namespace: 'checkbox-switch',
            'switch': true
        });

        $(window).trigger('resize');

        // Notification
        /////////////////////////////////////////////////////////////////
        $('.js-notification-close').on('click', function() {
            $(this).closest('.js-notification').fadeOut(700);
        });

        // Desktop Site Search
        /////////////////////////////////////////////////////////////////
        $('.js-nav-search').on('click', function() {
            $('.js-site-search').fadeIn();
        });

        $('.js-site-search-close').on('click', function() {
            $('.js-site-search').fadeOut();
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
        
        
        Morris.Line({
            element: 'line-chart',
            data: [
                {y: '2006', a: 50, b: 40},
                {y: '2007', a: 65, b: 55},
                {y: '2008', a: 50, b: 40},
                {y: '2009', a: 75, b: 65},
                {y: '2010', a: 50, b: 40},
                {y: '2011', a: 75, b: 65},
                {y: '2012', a: 100, b: 90}
            ],
            xkey: 'y',
            ykeys: ['a', 'b'],
            labels: ['Series A', 'Series B'],
            lineColors: ['#0aa699', '#d1dade'],
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
//Mock data :: Michael
/////////////////////////////////////////////////////////////////////////////////////
    var playlistmusic = [
        {"track": 1, "artist": "Piono Guys", "name": "Titanium Pavane", "length": "04:55", "file": "01_Titanium_Pavane", "image": "framework/images/mobile/player/list-menu/close.png"},
        {"track": 2, "artist": "Piono Guys", "name": "Peponi Paradise", "length": "03:37", "file": "02_Peponi _Paradise", "image": "framework/images/mobile/player/list-menu/close.png"},
        {"track": 3, "artist": "Piono Guys", "name": "Michael Meets Mozart", "length": "04:05", "file": "03_Michael_Meets_Mozart", "image": "framework/images/mobile/player/list-menu/close.png"},
        {"track": 4, "artist": "Piono Guys", "name": "Moonlight", "length": "04:40", "file": "04_Moonlight", "image": "framework/images/mobile/player/list-menu/close.png"},
        {"track": 5, "artist": "Piono Guys", "name": "Over The Rainbow Simple Gifts", "length": "03:59", "file": "05_Over_The_Rainbow_Simple_Gifts", "image": "framework/images/mobile/player/list-menu/close.png"}
    ];
    //main list
    var main_playerlist_src = $("#main-playerlist-tmp").html();
    var main_playerlist_tmp = Handlebars.compile(main_playerlist_src);
    var main_playerlist_html = main_playerlist_tmp(playlistmusic);
    $('#play-list-container').html(main_playerlist_html);
    //mobile lists
    //playerCued 
    var main_playerCued_src = $("#mobi-playerlist-tmp").html();
    var main_playerCued_tmp = Handlebars.compile(main_playerCued_src);
    var main_playerCued_html = main_playerCued_tmp(playlistmusic);
    $('#playerCued').html(main_playerCued_html);
    $('#playerCued ul').addClass('mix-menu-mixes');
    //playerRel
    var main_playerRel_src = $("#mobi-playerlist-tmp").html();
    var main_playerRel_tmp = Handlebars.compile(main_playerRel_src);
    var main_playerRel_html = main_playerRel_tmp(playlistmusic);
    $('#playerRel').html(main_playerRel_html);
    $('#playerRel ul').addClass('mix-menu-mixes');
    //playerMixes
    var main_playerMixes_src = $("#mobi-playerlist-tmp").html();
    var main_playerMixes_tmp = Handlebars.compile(main_playerMixes_src);
    var main_playerMixes_html = main_playerMixes_tmp(playlistmusic);
    $('#playerMixes').html(main_playerMixes_html);
    $('#playerMixes ul').addClass('mix-menu-mixes');

//Music player :: Michael
/////////////////////////////////////////////////////////////////////////////////////

    var iSupportAudio = !!document.createElement('audio').canPlayType;

    if (iSupportAudio) {
        var wavesurfer = Object.create(WaveSurfer);
        wavesurfer.init({
            container: $('.waveform').get(0),
            waveColor: '#363636',
            progressColor: '#52BFB7',
            height: '40'
        });

        $(document).ready(function() {
            $('.js-player-component').fadeOut();//hide player on load
            $('.waveform').prependTo('.header .player-slider');
            $("[data-toggle=tooltip]").tooltip({placement: 'right'});


            // Hide component
            $('.js-player-close').on('click', function() {
                $('.js-snap').animate({
                    scrollTop: 0
                }, function() {
                    $('.js-player-component').fadeOut();
                    // $('.nav-main-container').fadeOut();
                    $('#pulseFront').css("margin-top", "0px");
                    // $('#banner_tp').fadeOut();
                    // $('#banner_tp').removeClass('hidden-xs');
                });
            });

            // Show component
            $('.js-player-btn').on('click', function() {
                $('.js-snap').animate({
                    scrollTop: 0
                }, function() {
                    $('.js-player-component').fadeIn();
                    // $('.nav-main-container').fadeIn();
                    $('#pulseFront').css("margin-top", "");
                    // $('#banner_tp').fadeIn();
                    // $('#banner_tp').addClass('hidden-xs');
                });
            });


            // Menu popover
            $('[rel=popover]').popover({
                html: true,
                placement: 'right',
                content: function() {
                    return $($(this).data('contentwrapper')).html();
                }
            });
        });

        var index = 0,
                playing = false;
        mediaPath = 'framework/assets/media/',
                extension = '',
                tracks = playlistmusic,
                trackCount = tracks.length,
                npAction = $('#npAction'),
                npTitle = $('#npTitle'),
                audio = $('#audio1').bind('play', function() {
            playing = true;
            npAction.text('Now Playing:');
        }).bind('pause', function() {
            playing = false;
            npAction.text('Paused:');
        }).bind('ended', function() {
            npAction.text('Paused:');
            if ((index + 1) < trackCount) {
                index++;
                loadTrack(index);
                audio.play();
            } else {
                audio.pause();
                index = 0;
                loadTrack(index);
            }
        }).get(0),
                btnMobilePlay = $('#mobile_play').click(function() {
            if (!playing) {
                npAction.text('Play:');
                //index = 0;
                //loadTrack(index);
                audio.play();
                playing = true;
            }
            else {
                audio.pause();
                playing = false;
            }
        }),
                btnItemPlay = $('.colBlue').click(function() {

            npAction.text('Play:');
            index = $(this).attr('data-item');
            loadTrack(index);
            audio.play();
        }),
                btnPlay = $('.js-player-btn').click(function() {
            npAction.text('Play:');
            audio.play();
            //index = 0;
            //loadTrack(index);
        }),
                btnPause = $('.player__controls-pause').click(function() {
            if (!playing) {
                npAction.text('Play:');
                //index = 0;
                //loadTrack(index);
                audio.play();
                playing = true;
            }
            else {
                audio.pause();
                playing = false;
            }
        }),
                btnPrevMobile = $('.js-nav-bot-left-item').click(function() {
            if ((index - 1) > -1) {
                index--;
                loadTrack(index);
                if (playing) {
                    audio.play();
                }
            } else {
                audio.pause();
                index = 0;
                loadTrack(index);
            }
        }),
                btnNextMobile = $('.js-nav-bot-right-item').click(function() {
            if ((index + 1) <= trackCount) {
                index++;
                loadTrack(index);
                if (playing) {
                    audio.play();
                }
            } else {
                audio.pause();
                index = 0;
                loadTrack(index);
            }
        }),
                btnPrev = $('.player__controls-prev').click(function() {
            if ((index - 1) > -1) {
                index--;
                loadTrack(index);
                if (playing) {
                    audio.play();
                }
            } else {
                audio.pause();
                index = 0;
                loadTrack(index);
            }
        }),
                btnNext = $('.player__controls-next').click(function() {
            if ((index + 1) <= trackCount) {
                index++;
                loadTrack(index);
                if (playing) {
                    audio.play();
                }
            } else {
                audio.pause();
                index = 0;
                loadTrack(index);
            }
        }),
                li = $('#player-list li').click(function() {
            id = $(this).data('track');
            // if(id !== index) {
            playTrack(id);
            // }
        }),
                moli = $('.mobiplayer-list li').click(function() {
            if ($(this).hasClass('mobiplayer-list__item--active') === false) {
                $(this).addClass('mobiplayer-list__item--active');
            }
            var id = $(this).data('track');
            //if(id !== index) {
            playTrack(id);
            //}
        }),
                loadTrack = function(id) {
                    var music = getObjects(tracks, 'track', id)[0]; // Returns an array of matching objects
                    if (music === undefined) {
                        id = $('#player-list li').first().data('track');
                        music = getObjects(tracks, 'track', id)[0];//init
                    }
                    var li = $('#player-list').find("[data-track='" + id + "']");
                    var moli = $('.mobiplayer-list').find("[data-track='" + id + "']");
                    //if($(li).hasClass('player-list__item')){
                    $('.player-list__item--active').find('#length').text('');
                    $('.player-list__item--active').removeClass('player-list__item--active');
                    $(li).addClass('player-list__item--active');
                    // }else if($(moli).hasClass('mobiplayer-list__item--active')){
                    $('.mobiplayer-list__item--active').find('#length').text('');
                    $('.mobiplayer-list__item--active').removeClass('mobiplayer-list__item--active');
                    $(moli).addClass('mobiplayer-list__item--active');

                    // }
                    npTitle.text(music.name);
                    index = id;
                    var trackpath = mediaPath + music.file + extension;
                    audio.src = trackpath;
                    wavesurfer.load(trackpath);
                },
                setAudioVol = function(vol) {
                    audio.volume = (vol / 100);
                },
                setAudioPos = function(pos) {
                    audio.pause();
                    audio.currentTime = pos;
                    var timer = window.setTimeout(function() {
                        audio.play();
                    }, 5000);

                },
                getPlayingTimeInMin = function(fromSec) {
                    // Minutes and seconds
                    var mins = ~~(fromSec / 60);
                    var secs = fromSec % 60;
                    // Hours, minutes and seconds
                    var hrs = ~~(fromSec / 3600);
                    var mins = ~~((fromSec % 3600) / 60);
                    var secs = fromSec % 60;
                    // Output like "1:01" or "4:03:59" or "123:03:59"
                    var ret = "";
                    if (hrs > 0)
                        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
                    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
                    ret += "" + secs;
                    return ret;
                },
                playTrack = function(id) {
                    loadTrack(id);
                    audio.play();
                };
        var $volume = $('input[name="volumeControl"]');
        var $slider = $('input[name="sliderControl"]');

        var $mobile_slider = $('input[name="mobile_sliderControl"]');
        $volume.bind('change', function(e) {
            e.preventDefault();
            setAudioVol($(this).val());
        });
        $slider.bind('change', function(e) {
            e.preventDefault();
            setAudioPos($(this).val());
        });

        if (audio.canPlayType('audio/ogg')) {
            extension = '.ogg';
        }
        if (audio.canPlayType('audio/mpeg')) {
            extension = '.mp3';
        }
        loadTrack(index);

        audio.addEventListener('timeupdate', function() {
            var curtime = parseInt(audio.currentTime, 10);
            //tracker.slider('value', curtime);
            if (curtime === 0) {
                $slider.attr("max", audio.duration);
                $mobile_slider.attr("max", audio.duration);
                var totalTime = getPlayingTimeInMin(audio.duration.toFixed());
                $('div.timer-remain').text(totalTime);
            }
            var percentage = ((curtime / audio.duration) * 100) + "%";
            var playTime = getPlayingTimeInMin(curtime);
            var playTimeLeft = getPlayingTimeInMin(audio.duration.toFixed() - curtime);
            $slider.attr("value", curtime);
            $mobile_slider.attr("value", curtime);
            $('.player-list__item--active').find('#length').text(' : ' + playTimeLeft);
            $('.mobiplayer-list__item--active').find('#length').text(' : ' + playTimeLeft);
            $('.player-slider__handle').css("left", percentage);
            $('.player-alt-mobile').find('.player-alt-slider__handle').css("left", percentage);
            $('div.player-slider__handle').text(playTime);
            $('div.timer-elapsed').text(playTime);
            //console.log(curtime);
        });


    }
///pulsePopNav ::Michael
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    $('.nav-side__item').click(function() {

        $('#pulsePopNav li').on('click', (function() {
            openMenu($(this));
            return false;
        }));
        $('#pulsePopNav').on('mouseleave', (function() {
            var $this = $(this);
            if (!$($this.target).closest('.popover').length) {
                $('.popover').each(function() {
                    $(this.previousSibling).popover('toggle');
                });
            }
            return false;
        }));
    });
    $('.btn-group.nudge-top a').click(function() {
        openMenu($(this));
        return false;
    });
    var openMenu = function($this) {
        if (!$($this.target).closest('.popover').length) {
            $('.popover').each(function() {
                $(this.previousSibling).popover('toggle');
            });
        }
        //var $this = $(this);
        var name = $this.data('name');

        $('.js-snap-item').not($this).addClass('is-hidden');

        $('.js-snap-' + name)
                .hide()
                .removeClass('is-hidden')
                .fadeToggle('slow', 'linear', function() {
                    $('.js-filter').isotope();
                });

        if (name !== 'home') {
            $('.js-nav-filter-home').css({visibility: 'hidden'}); // hide
        } else {
            $('.js-nav-filter-home').removeAttr('style'); // show
        }
    };

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

    // // filter items when filter link is clicked
    // $('.js-myEventOverviewFilters [data-filter]').click(function(){
    // var selector = $(this).attr('data-filter');
    //     $container.isotope({ filter: selector });
    // });

    //Start charts carousel
    $('#charts-carousel').tinycarousel({pager: true, interval: true});

    $(window).trigger('resize');

});

