var TUNES_DIRECTORY = "tunes/";
var TUNE_NAMES = [];

(function($) {

	"use strict";	

	$(document).ready(load_audio);

  
    $('.navigation').singlePageNav({
        currentClass : 'active'
    });


    $('.toggle-menu').click(function(){
        $('.responsive-menu').stop(true,true).slideToggle();
        return false;
    });

    // Load all the audio files in the tunes directory into the DOM.
    function load_audio() {
    	// If running on the filesystem, ajax won't work, so populate some test data.
    	if (window.location.protocol === "file:") {
    		TUNE_NAMES = ["meeting of the minds", "spider jive"];
    	} else {
    		// Iterate over the tunes in the tune directory and add them to a list.
	    	$.ajax({
	    		url: '/'+TUNES_DIRECTORY,
	    		success: function(data) {
	    			$(data).find("a:contains(.mp3)").each(function() {
	    				var filename = this.href.replace(window.location, "").replace("https://", "");
	    				TUNE_NAMES.push(unescape(filename.substr(0, filename.indexOf('.'))));
	    				$('#tunes').append("<audio id=" + filename.substr(0, ));
	    			});
	    		}
	    	});
	    }
	    // Create an audio element for each tune. The name of the element is the name of the
	    // mp3 file, minus the extension.
	    for (var i = 0; i < TUNE_NAMES.length; ++i) {
	    	$('#tunes').append(
	    		"<audio id='" + TUNE_NAMES[i] + "'>"
	    			+ "<source src='" + TUNES_DIRECTORY + TUNE_NAMES[i] + ".mp3'>"
    			+ "</audio>"
    		);
	    }
    }

})(jQuery);






