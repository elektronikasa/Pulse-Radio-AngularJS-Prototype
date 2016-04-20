<!DOCTYPE html>
<html lang="en" xmlns:ng="http://angularjs.org" id="ng-app" ng-app="pulseApp">
    <head>
        
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0" />
        <title>Pulse Radio</title>

        <link href="css/main.css" rel="stylesheet">
        <link href="css/james-add-to-compass.css" rel="stylesheet">
        <link href="libs/messenger/build/css/messenger.css" rel="stylesheet">
        <link href="libs/messenger/build/css/messenger-theme-flat.css" rel="stylesheet">
        <link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">

        <link href="libs/formhelpers/dist/css/bootstrap-formhelpers.min.css" rel="stylesheet">
        <link rel="stylesheet" href="http://cdn.oesmith.co.uk/morris-0.4.3.min.css">
        <link href="css/angular-motion/angular-motion.min.css" rel="stylesheet" type="text/css"/>
        <script src="libs/vendor/modernizr-2.7.1.min.js"></script>
        <!-- Respond.js IE8 support media queries -->
        <!--[if lt IE 9]>
            <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
        <![endif]-->
        <style>
            .popupcontent_contentplaceholder {
                display: none;
            }
        </style>
        <link href="libs/angular/angular-csp.css" rel="stylesheet" type="text/css"/>

    </head>
    <body ng-controller="PulseController">


        <!-- facebook includes sdk -->

        <div id="fb-root"></div>
        <script>(function(d, s, id) {
                        var js, fjs = d.getElementsByTagName(s)[0];
                        if (d.getElementById(id))
                            return;
                        js = d.createElement(s);
                        js.id = id;
                        js.src = "//connect.facebook.net/en_GB/all.js#xfbml=1&appId=1385970685007138";
                        fjs.parentNode.insertBefore(js, fjs);
                    }(document, 'script', 'facebook-jssdk'));</script>

        <!-- facebook includes sdk end -->


        <!-- preloader -->
        <div class="preloader js-preloader">
            <div class="preloader__wrap">
                <div class="preloader__content">
                    <!--<div class="preloader__logo icons icons-logo"></div>
                    <img class="preloader__loader"
                     src="img/animation/spinner.gif"
                     alt="Loading...">-->
                </div>
            </div>
        </div> <!-- .preloader -->
        <!-- preloader end -->


        <!-- Signup Takeover Start -->
        <!-- Signup-Angular -->
        <div signup-module >
            {{module.content}}
        </div>
        <!-- Signup Takeover End -->

        <!-- startr mobile snap drawers -->
        <!-- pull menus -->
        <div mobiles-Napdrawers-Module >
            {{module.content}}
        </div>
        <!-- end mobile snap drawers -->

        <div class="fixed-content js-fixed-content">

            <div class="visible-xs visible-sm">

                <!-- start nav bar -->
                <div class="nav-bar">
                    <a href="#" id="openLeft" class="nav-bar__btn icn icn-mobi-nav-btn">
                        <div class="icn-mobi-nav-btn__line icn-mobi-nav-btn__line--first"></div>
                        <div class="icn-mobi-nav-btn__line icn-mobi-nav-btn__line--middle"></div>
                        <div class="icn-mobi-nav-btn__line icn-mobi-nav-btn__line--last"></div>
                    </a> <!-- .nav-mobi-btn -->

                    <div class="logo js-side-nav-item" data-name="home">
                        <img class="logo__img"
                             src="img/general/logo@2x.png"
                             height="21"
                             width="72"
                             alt="Pulse">
                    </div>

                    <a href="#" id="openRight" class="l-right">
                        <i class="icons icons-search"></i>
                    </a>
                </div> <!-- .nav-bar -->
                <!-- end nav bar -->

                <!-- Angular Pulse Main Mobile Nav -->
                <div mobile-Nav-Module>
                    {{module.content}}
                </div>

            </div> <!-- .visible -->

            <div class="hidden-xs hidden-sm">

                <div class="header">
                    <div class="waveform"></div>
                    <div class="header__banner js-header-banner">
                        <div class="container">
                            <!--music player -->
                            <!-- Signup-Angular -->
                            <div player-module >
                                {{module.content}}
                            </div>

                        </div>
                    </div>
                </div> <!-- .header -->

                <!-- Angular Pulse Main Desktop Nav -->
                <div desktopnav-Module>
                    {{module.content}}
                </div>

                <!-- start nav logged out Navigation-Angular -->
                <div class="container p-relative">
                    <div class="row">
                        <!-- Navigation-Angular -->
                        <div nav-module islogin="{{islogin}}">
                            {{module.content}}
                        </div>
                    </div>
                </div> <!-- .container -->

                <div class="back-top icons icons-up-arrow visible-lg js-back-top"></div>
            </div> <!-- hidden-xs.hidden-sm -->



        </div> <!-- .fixed-content -->

        <!-- start content -->
        <div class="snap-content  js-snap  snap-content--listing">


            <!-- app containers -->
            <div class="main  snap-item  container  container--sm-vacant  js-filter-container  js-snap-item  js-snap-home" id="content">
                <div id="pulseFront" class="row">
                    <!-- start our view control -->
                    <ng-view></ng-view>
                </div> <!-- .row -->

                <div class="clearfix"></div>
                <!-- start backend -->
                <div id="pulseBack"
                     class="row is-hidden"
                     style="width: 1050px;">

                </div>
                <!-- end backend -->
                <div class="clearfix"></div>

            </div> <!-- .main.container -->

            <!-- Angular footer -->
            <div footer-Module>
                {{module.content}}
            </div>


        </div> <!-- .js-snap -->

       <div mobile-Player-Module>
            {{module.content}}
        </div>

        <!-- Angular site-search -->

        <div desktopsearch-Module>
            {{module.content}}
        </div>

        <!--Lib-->
        <script src="libs/jquery-1.10.2.min.js"></script>
        <script src="libs/jquery-ui.min.js"></script>
        <script src="libs/vendor/jquery.easing.1.3.js"></script>

        <script src="libs/pulseradio.js"></script>
        <script src="libs/isotope/jquery.isotope.js"></script>
        <script src="libs/jquery.tinycarousel.min.js"></script>
        <script src="libs/jquery.menuFlip.js"></script>
        <script src="libs/snap.min.js"></script>
        <script src="libs/toggles.js"></script>
        <script src="libs/vendor/jquery.plusslider-min.js"></script>
        <script src="libs/vendor/jquery.nos.min.js"></script>
        <script src="libs/retina-1.1.0.min.js"></script>
        <script src="./libs/iphone-style-checkboxes.js"></script>

        <!--<script src="js/formhelpers/dist/js/bootstrap-formhelpers.min.js"></script>-->
        <script src="libs/jquery.sharrre.min.js"></script>
        <script src="libs/wavesurfer/wavesurfer.min.js"></script>
        <script src="libs/handlebars.js"></script>
        <script src="js/main.js"></script>

        <!-- charting stuff -->
        <!--<script src="libs/chartjs/Lib/js/knockout-3.0.0.js"></script>
        <script src="libs/chartjs/Lib/js/globalize.min.js"></script>
        <script src="libs/chartjs/Lib/js/dx.chartjs.js"></script>
        <script src="libs/chartjs/Lib/js/vectormap-data/world.js"></script>--><!-- attendee locations map -->

        <!--<script src="libs/temp-data/zoomingData.js"></script>--><!-- temp zooming data -->

<!--<script src="libs/raphael-min.js"></script>
<script src="libs/morris-0.4.3.min.js"></script>-->

<!-- <script src="libs/messenger/build/js/messenger.min.js"></script> 
<script src="libs/messenger/build/js/messenger-theme-flat.js"></script>-->
<!--<script src="libs/onload-charts.js"></script>-->

        <script src="libs/jquery-finger-v0.1.0.js"></script>
        <script src="libs/flickerplate.js"></script>

        <script src="libs/scroll-listing.js"></script>

        <script src="libs/onload-messages.js"></script>

        <!--[if lte IE 7]>
        <script src="libs/json2.js" type="text/javascript"></script>
        <![endif]-->
        <!--[if lt IE 8]>
        <script src="libs/json3.js" type="text/javascript"></script>
        <![endif]-->  
        <script src="libs/angular/angular.js"></script>
        <script src="libs/angular/angular-route.js"></script>
        <script src="libs/angular/angular-resource.js"></script>
        <script src="libs/angular/angular-cookies.js" type="text/javascript"></script>
        <script src="libs/angular/angular-loader.js" type="text/javascript"></script>
        <script src="libs/angular/angular-animate.js" type="text/javascript"></script>
        <script src="libs/underscore.js"></script>
        <!--Angular Main / Routes-->
        <script src="js/app.js"></script>
        <!--Controllers-->
        <script src="js/controllers/PulseController.js"></script>
        <script src="js/controllers/HomeController.js" ></script>
        <script src="js/controllers/HelloController.js" ></script>
        <script src="js/controllers/SettingsController.js" ></script>
        <script src="js/controllers/TicketsController.js" ></script>
        <script src="js/controllers/PeopleController.js" ></script>
        <script src="js/controllers/NotificationsController.js" ></script>
        <script src="js/controllers/MyPulseController.js" ></script>
        <script src="js/controllers/MyAffiliatesController.js" ></script>
        <script src="js/controllers/MyEventsController.js" ></script>
        <script src="js/controllers/EventManagerController.js" ></script>
        <script src="js/controllers/DashboardController.js" ></script>
        <script src="js/controllers/MobileMyMusicController.js" ></script>
        <script src="js/controllers/ShoppingCartController.js" ></script>
        <script src="js/controllers/SingleArticleController.js" ></script>
        <script src="js/controllers/ListArticleController.js" ></script>
        <script src="js/controllers/ListPodcastController.js" ></script>
        <script src="js/controllers/ListEventsController.js" ></script>
        <script src="js/controllers/SinglePodcastController.js" ></script>
        <script src="js/controllers/SingleEventController.js" ></script>
        <!--Services-->
        <script src="js/services/PulseData.js"></script>

        <script src="libs/bootstrap.min.js"></script>
        <script src="libs/ui-bootstrap-tpls-0.11.0.min.js"></script>
        <script src="libs/AngularStrap/angular-strap.min.js" type="text/javascript"></script>
        <script src="libs/AngularStrap/angular-strap.tpl.min.js" type="text/javascript"></script>
        <!--Directives-->
        <!--Common-->
        <script src="js/directives/helloDirective.js" type="text/javascript"></script>
        <script src="js/directives/topNavDirective.js" type="text/javascript"></script>
        <!--PC-->
        <script src="js/directives/desktopnavDirective.js" type="text/javascript"></script>
        <script src="js/directives/desktopsearchDirective.js" type="text/javascript"></script>
        <script src="js/directives/playerDirective.js" type="text/javascript"></script>
        <script src="js/directives/navigationDirective.js" type="text/javascript"></script>
        <script src="js/directives/signupDirective.js" type="text/javascript"></script>
        <script src="js/directives/footerDirective.js" type="text/javascript"></script>
        <script src="js/directives/affiliateManagerDirective.js" type="text/javascript"></script>
        <script src="js/directives/eventManagerDirective.js" type="text/javascript"></script>
        <script src="js/directives/ticketManagerDirective.js" type="text/javascript"></script>
        <script src="js/directives/channelManagerDirective.js" type="text/javascript"></script>
        <script src="js/directives/notificationManagerDirective.js" type="text/javascript"></script>
        <script src="js/directives/settingsManagerDirective.js" type="text/javascript"></script>
        <script src="js/directives/dashboardDirective.js" type="text/javascript"></script>
        <script src="js/directives/home/myeventsDirective.js" type="text/javascript"></script>
        <script src="js/directives/home/advertDirective.js" type="text/javascript"></script>
        <!--Mobile-->
        <script src="js/directives/mobile/mobilenavDirective.js" type="text/javascript"></script>
        <script src="js/directives/mobile/mobilesnapdrawersDirective.js" type="text/javascript"></script>
        <script src="js/directives/mobile/mobilePlayerDirective.js" type="text/javascript"></script>
        

        <!--Nav Directive-->
        
        <!--Home Directive-->
        
        
        
        <!--Private Directives-->
        
     
    </body>
</html>
