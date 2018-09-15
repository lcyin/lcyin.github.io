$(document).ready(function() {

  var height = $('#mainNavbar').outerHeight();

  $('.slide-section').click(function(e) {
    var linkHref = $(this).attr('href');

$('html, body').animate({
  scrollTop: $(linkHref).offset().top - height
}, 1000);

    e.preventDefault();
  });
});
