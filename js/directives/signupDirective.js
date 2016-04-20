'use strict';
pulseApp.directive('signupModule', function() {
    return {
        restrict: 'A',
        scope: {
        },
        templateUrl: '/partial/public/signupModule.html',
        transclude: true,
        controller: ['$scope', '$location', '$rootScope', function($scope, $location, $rootScope) {
                $scope.goToUrl = function(url, isLogin) {
                    if (isLogin)
                        $rootScope.islogin = true;
                    $location.replace();
                    $location.path(url);
                };
            }],
        link: function(scope, elem, attrs) {
            $(document).ready(function() {
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

            });
            scope.signOn = function() {
                $('#signIn').show();
                $('#signUp').hide();
            };
            scope.logon = function(data, form) {
                if (form.$valid) {
                    window.window.alert(data.username);
                    scope.goToUrl("/", true);
                    $('#closeSignIn').click();
                }

            };
            scope.cancel = function() {
                $('#signIn').hide();
                $('#signUp').show();
            };
        }
    };
});