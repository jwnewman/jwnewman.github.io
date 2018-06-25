var TUNES_DIRECTORY = "/tunes";

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

    function load_audio() {
    	$.ajax({
    		url: TUNES_DIRECTORY,
    		success: function(data) {
    			$(data).find("a:contains(.mp3)").each(function() {
    				var filename = this.href.replace(window.location, "").replace("https://", "");
    				console.log(filename);
    			});
    		}
    	});
    }

})(jQuery);






