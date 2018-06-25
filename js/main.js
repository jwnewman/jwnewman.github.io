var TUNES_DIRECTORY = "tunes/";
var TUNE_NAMES = [];
var MOST_RECENTLY_PLAYED = "";

(function($) {

    "use strict";    

    $(document).ready(loadAudio);

  
    $('.navigation').singlePageNav({
        currentClass : 'active'
    });


    $('.toggle-menu').click(function(){
        $('.responsive-menu').stop(true,true).slideToggle();
        return false;
    });

    $('.fa-play-circle-o').click(function(event) {
        var $target = $(event.target);
        var tune = $target.data("tune");
        var audioElement = document.getElementById(tune);
        if (isPlaying(audioElement)) {
            audioElement.pause();
            audioElement.currentTime = 0;
            audioElement.className="fa fa-play-circle-o"
        }
        else {
            // Pause any playing audio.
            var recentlyPlayedAudioElement = document.getElementById(MOST_RECENTLY_PLAYED);
            if (isPlaying(recentlyPlayedAudioElement)) {
                recentlyPlayedAudioElement.pause();
                recentlyPlayedAudioElement.currentTime = 0;
                recentlyPlayedAudioElement.className="fa fa-play-circle-o"
            }
            audioElement.play();
            MOST_RECENTLY_PLAYED = tune;
            audioElement.className="fa fa-play-circle"
            console.log(audioElement.className);
        }
    });

    function isPlaying(audioElement) {
        return audioElement !== null && audioElement.duration > 0 && !audioElement.paused;
    }

    // Load all the audio files in the tunes directory into the DOM.
    function loadAudio() {
        // If running on the filesystem, ajax won't work, so populate some test data.
        if (window.location.protocol === "file:") {
            TUNE_NAMES = ["meeting of the minds", "spider jive", "avery's jig"];
            appendTunesToDom();
        } else {
            // Iterate over the tunes in the tune directory and add them to a list.
            $.ajax({
                url: '/' + TUNES_DIRECTORY,
                success: function(data) {
                    $(data).find("a:contains(.mp3)").each(function() {
                        var filename = this.href.replace(window.location, "").replace("https://", "");
                        TUNE_NAMES.push(
                            unescape(filename.substr(0, filename.indexOf('.')))
                        );
                    });
                    appendTunesToDom();
                }
            });
        }
    }

    // Create an audio element for each tune. The name of the element is the name of the
    // mp3 file, minus the extension, and stripped of apostrophes.
    function appendTunesToDom() {
        for (var i = 0; i < TUNE_NAMES.length; ++i) {
            $('#tunes').append(
                "<audio id='" + TUNE_NAMES[i].replace("'", "") + "'>"
                    + "<source src='" + TUNES_DIRECTORY + TUNE_NAMES[i] + ".mp3'>"
                + "</audio>"
            );
        }
    }

})(jQuery);






