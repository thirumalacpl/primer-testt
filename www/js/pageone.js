$(document).on('pageshow', '#pageonee', function(){  
 
 alert('kdasf');
 
  $(document).off('click', '#jiort').on('click', '#jiort', function() {

  $.mobile.changePage($('#pagesecond'), { transition: "none", changeHash: true, reverse: false });
  return false;
  });


});