$(document).ready(function() {
  $('.toggle-menu').click(function() {
    $('#menu').slideToggle(300);
  });

  $(document).click(function(e) {
    if (!$(e.target).closest('.nav').length) {
      $('#menu').slideUp(300);
    }
  });
});
