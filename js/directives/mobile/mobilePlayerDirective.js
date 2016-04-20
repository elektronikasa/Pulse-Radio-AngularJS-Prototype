'use strict';
pulseApp.directive('mobilePlayerModule', function() {
    return {
        restrict: 'A',
        scope: {
        },
        templateUrl: '/partial/mobile/mobilePlayerModule.html',
        transclude: true,
        link: function(scope, elem, attrs) {
            var playlistmusic = [
                {"track": 1, "artist": "Piono Guys", "name": "Titanium Pavane", "length": "04:55", "file": "01_Titanium_Pavane", "image": "images/mobile/player/list-menu/close.png"},
                {"track": 2, "artist": "Piono Guys", "name": "Peponi Paradise", "length": "03:37", "file": "02_Peponi _Paradise", "image": "images/mobile/player/list-menu/close.png"},
                {"track": 3, "artist": "Piono Guys", "name": "Michael Meets Mozart", "length": "04:05", "file": "03_Michael_Meets_Mozart", "image": "images/mobile/player/list-menu/close.png"},
                {"track": 4, "artist": "Piono Guys", "name": "Moonlight", "length": "04:40", "file": "04_Moonlight", "image": "images/mobile/player/list-menu/close.png"},
                {"track": 5, "artist": "Piono Guys", "name": "Over The Rainbow Simple Gifts", "length": "03:59", "file": "05_Over_The_Rainbow_Simple_Gifts", "image": "images/mobile/player/list-menu/close.png"}
            ];
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

// Player Component
            /////////////////////////////////////////////////////////////////

//            function playerComponentTimeUpdate($el, $fauxEl, o) {
//                var totalSecs = parseFloat($el.val());
//                var mins = Math.floor(totalSecs / 60);
//                var secs = totalSecs % 60;
//                o.dom.$handle.text(mins + ' : ' + secs);
//            }

            // If touch doesn't exist
            if (!Modernizr.touch) {
                $('.js-slider-range').nosInputRange({
                    namespace: 'player-alt-slider'
                });
            }

//            $(".js-checkbox-switch").nosInputCheckbox({
//                namespace: 'checkbox-switch',
//                'switch': true
//            });

           // $(window).trigger('resize');
//Music player :: Michael
/////////////////////////////////////////////////////////////////////////////////////

                var iSupportAudio = !!document.createElement('audio').canPlayType;

                if (iSupportAudio) {
                    //var wavesurfer = Object.create(WaveSurfer);

//                    wavesurfer.init({
//                        container: $('.waveform').get(0),
//                        waveColor: '#363636',
//                        progressColor: '#52BFB7',
//                        height: '40'
//                    });



                    $('.js-player-component').fadeOut();//hide player on load
                    $('.waveform').prependTo('.header .player-slider');
                    $("[data-toggle=tooltip]").tooltip({placement: 'right'});


                    // Hide component
                    $('.js-player-close').on('click', function() {
                        $('.js-snap').animate({
                            scrollTop: 0
                        }, function() {
                            $('.js-player-component').fadeOut();
                            $('#pulseFront').css("margin-top", "0px");
                        });
                    });

                    var index = 0,
                            playing = false;
                    var mediaPath = 'assets/media/',
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
                        var id = $(this).data('track');
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
                               // wavesurfer.load(trackpath);
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
                            //$slider.attr("max", audio.duration);
                            $mobile_slider.attr("max", audio.duration);
                            var totalTime = getPlayingTimeInMin(audio.duration.toFixed());
                            $('div.timer-remain').text(totalTime);
                        }
                        var percentage = ((curtime / audio.duration) * 100) + "%";
                        var playTime = getPlayingTimeInMin(curtime);
                        var playTimeLeft = getPlayingTimeInMin(audio.duration.toFixed() - curtime);
                        //$slider.attr("value", curtime);
                        $mobile_slider.attr("value", curtime);
                        //$('.player-list__item--active').find('#length').text(' : ' + playTimeLeft);
                        $('.mobiplayer-list__item--active').find('#length').text(' : ' + playTimeLeft);
                        //$('.player-slider__handle').css("left", percentage);
                        $('.player-alt-mobile').find('.player-alt-slider__handle').css("left", percentage);
                       // $('div.player-slider__handle').text(playTime);
                        $('div.timer-elapsed').text(playTime);
                        //console.log(curtime);
                    });


                }




            $('.js-open-play').on('click', function(e) {
                if($(e.target).attr('id') === undefined)
                 togglePlayComponent();
            });
 
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
        }
    };
});