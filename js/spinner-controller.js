$(document).ready(function() {
  $('#spinner-switcher').change(function() {
    if($(this).is(":checked")) {
      console.log("enabled");
      $('.spinner').each(function(){
        $(this).show();
      });
      $('.spinner-disabled').each(function(){
        $(this).hide();
      });
    } else {
      console.log("disabled");
      $('.spinner').each(function(){
        $(this).hide();
      });
      $('.spinner-disabled').each(function(){
        $(this).show();
      });
    }
  });
});
