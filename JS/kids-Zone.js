// $(document).ready(function(){
//     $(window).scroll(function(){
//         if($(this).scrollTop() > 50 ) {
//             $('#main-navbar').css("padding-left", "10%");
//             $('#main-navbar').css("padding-right", "10%");
//         }
//         else {
//             $('#main-navbar').css("padding-left", "0");
//             $('#main-navbar').css("padding-right", "0",);
//         }
//     });

//     $('#toggle-nav-button').click(function(){
//         $('#main-navbar').css("background-color", "#FFFFFF");
//     });
// });

window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("main-navbar").className = "navbar navbar-default navbar-fixed-top box-shadow test";
    } else {
        document.getElementById("main-navbar").className = "navbar navbar-default navbar-fixed-top box-shadow";
    }
}


$(window).scroll(function() {
    if ($(this).scrollTop() > 100 ) {
        $('.scrolltop:hidden').stop(true, true).fadeIn();
    } else {
        $('.scrolltop').stop(true, true).fadeOut();
    }
});
$(function(){$(".scroll").click(function(){$("html,body").animate({scrollTop:$(".thetop").offset().top},"1000");return false})})


function reply_click(clicked_id)
{
    var modal = document.getElementById('myBox');
    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById(clicked_id);
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
        modal.style.display = "block";
        modalImg.src = img.src;
        captionText.innerHTML = img.alt;
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("box-close")[0];
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
        modal.style.display = "none";
    }
}
