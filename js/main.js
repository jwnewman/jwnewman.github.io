var TUNES_DIRECTORY = "tunes/";
var TUNE_NAMES = [];
var MOST_RECENTLY_PLAYED = "";

(function($) {

    "use strict";    

    $(document).ready(loadTunes);
  

    $('.navigation').singlePageNav({
        currentClass : 'active'
    });


    $('.toggle-menu').click(function(){
        $('.responsive-menu').stop(true,true).slideToggle();
        return false;
    });


    $('.fa-play-circle-o').click(function(event) {
        var $target = $(event.target);
        toggleAudio($(this), $target.data("tune"));
    });

    $('audio').on('pause', function() {
        console.log("hi");
        // $(this).toggleClass("fa-play-circle fa-play-circle-o");
    });

})(jQuery);






