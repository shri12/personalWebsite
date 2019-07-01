$(document).ready(function() {
    $(window).scroll(function() {
       if($(this).scrollTop() > height) { 
           $('.nav').addClass('scrolled');
       } else {
           $('.nav').removeClass('scrolled');
       }
    });
});