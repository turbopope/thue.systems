$(document).ready(function() {
  $('#spinner-switcher').change(function() {
    if($(this).is(":checked")) {
      $('.spinner').each(function(){
        $(this).show();
      });
      $('.spinner-disabled').each(function(){
        $(this).hide();
      });
      $('html, body').animate({ scrollTop: 0 }, 'fast');
    } else {
      $('.spinner').each(function(){
        $(this).hide();
      });
      $('.spinner-disabled').each(function(){
        $(this).show();
      });
    }
  });
});
