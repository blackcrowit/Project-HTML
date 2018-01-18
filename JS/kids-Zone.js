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


$(document).ready(function(){
     $('body').scrollspy({target: ".navbar", offset: 50}); 
  // Add smooth scrolling to all links
  $("#item a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});