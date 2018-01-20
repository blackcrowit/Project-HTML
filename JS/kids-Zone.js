

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