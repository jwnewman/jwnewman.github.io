var TUNES_DIRECTORY = "tunes/";
var MOST_RECENTLY_PLAYED = "";

(function($) {

    "use strict";    

    // Read tunes out of a JSON file in tuneContent.js.
    function loadTunes() {
        var tunes = JSON.parse(window.tunes)[0].tunes;
        for (var i = 0; i < tunes.length; ++i) {
            appendTuneToDom(tunes[i]);
        }

        // Bind event handlers.
        $('audio').on('ended', onEnded);
        $('.fa-play-circle-o').click(function(event) {
            var $target = $(event.target);
            toggleAudio($(this), $target.data("tune"));
        });
    }
    window.loadTunes = loadTunes;


    // Add a tune element to the DOM for a tune represented in JSON.
    function appendTuneToDom(tune) {
        $('.tunes-holder').append(
            `<div class="col-md-4 col-sm-6">
                <div class="tune-item ` + getCssClassForTimeKey(tune.time, tune.key) + `">
                    <div class="tune-background">
                        <i class="fa fa-music"></i>
                    </div>
                    <div class="tune-text">
                        <p>` + tune.name + `</p>
                        <p>` + tune.time + `</p>
                        <p>` + tune.key + `</p>
                        <i class="fa fa-play-circle-o" data-tune="` + tune.audio + `"></i>
                    </div>
                    <div class="tune-hover">
                        <div class="inside">
                            <p>` + tune.description + ` ` + tune.date + `.</p>
                            <a href="` + TUNES_DIRECTORY + tune.pdf + `.pdf" target="_blank"><i class="fa fa-file-pdf-o"></i> Sheet music (.pdf)</a>
                        </div>
                    </div>
                </div>
            </div>`
        );
        $('#tunes').append(
            `<audio id='` + tune.audio + `'>
                <source src='` + TUNES_DIRECTORY + unescape(tune.audio) + `.mp3'>
            </audio>`
        );
    }


    // Tune elements are color-coded. Determine the CSS class for the key and time signature.
    function getCssClassForTimeKey(time, key) {
        if (time === "Jig") {
            return (key.includes("min") || key.includes("dor")) ? "tune-jig-minor" : "tune-jig-major";
        } else if (time === "Waltz") {
            return (key.includes("min") || key.includes("dor")) ? "tune-waltz-minor" : "tune-waltz-major";
        } else {
            return (key.includes("min") || key.includes("dor")) ? "tune-reel-minor" : "tune-reel-major";
        }
    }


    // Handles toggling audio on or off when the user clicks a play button.
    function toggleAudio(clickedButton, tune) {
        var audioElement = document.getElementById(tune);
        if (isPlaying(audioElement)) {
            pause(audioElement);
        }
        else {
            // Pause any playing audio.
            var recentlyPlayedAudioElement = document.getElementById(MOST_RECENTLY_PLAYED);
            if (isPlaying(recentlyPlayedAudioElement)) {
                pause(recentlyPlayedAudioElement);
            }
            audioElement.play();
            MOST_RECENTLY_PLAYED = tune;
            $(clickedButton).toggleClass("fa-play-circle-o fa-play-circle");
        }
    }
    window.toggleAudio = toggleAudio;


    // Pauses playing audio.
    function pause(audioElement) {
        audioElement.pause();
        audioElement.currentTime = 0;
        // Call onEnded manually to prevent races with playing something else.
        onEnded();
    }

    // Resets 'playing' icon when audio is no longer playing.
    function onEnded() {
        $(".fa-play-circle").each(function() {
            $(this).toggleClass("fa-play-circle fa-play-circle-o");
        })
    }



    // Determines whether a given audio element is currently playing.
    function isPlaying(audioElement) {
        return audioElement !== null && audioElement.duration > 0 && !audioElement.paused;
    }


})(jQuery);
