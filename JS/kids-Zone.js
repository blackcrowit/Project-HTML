new WOW().init();

$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 50 ) {
            $('#main-navbar').css("padding-left", "10%");
            $('#main-navbar').css("padding-right", "10%");
        }
        else {
            $('#main-navbar').css("padding-left", "0");
            $('#main-navbar').css("padding-right", "0",);
        }
    });

    $('#toggle-nav-button').click(function(){
        $('#main-navbar').css("background-color", "#FFFFFF");
    });
});





(function($) {
 
    $.fn.parallax = function(options) {
 
        var windowHeight = $(window).height();
 
        // Establish default settings
        var settings = $.extend({
            speed        : 0.15
        }, options);
 
        // Iterate over each object in collection
        return this.each( function() {
 
            // Save a reference to the element
            var $this = $(this);
 
            // Set up Scroll Handler
            $(document).scroll(function(){
 
                    var scrollTop = $(window).scrollTop();
                        var offset = $this.offset().top;
                        var height = $this.outerHeight();
 
            // Check if above or below viewport
            if (offset + height <= scrollTop || offset >= scrollTop + windowHeight) {
                return;
            }
 
            var yBgPosition = Math.round((offset - scrollTop) * settings.speed);
 
                 // Apply the Y Background Position to Set the Parallax Effect
                $this.css('background-position', 'center ' + yBgPosition + 'px');
                
            });
        });
    }
}(jQuery));

$('.bg-1,.bg-3,body').parallax({
    speed : 0.15
});

$('.bg-2').parallax({
    speed : 0.25
});