  $(function() {
  // Generic selector to be used anywhere
  $(".js-scroll-to-id").click(function(e) {

    // Get the href dynamically
    var destination = $(this).attr('href');

    // Prevent href=“#” link from changing the URL hash (optional)
    e.preventDefault();

    // Animate scroll to destination
    $('html, body').animate({
      scrollTop: $(destination).offset().top
    }, 1500);
  });
});

$(document).ready(function(){
    
    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
    
    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
    
});