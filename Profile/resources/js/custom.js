$(document).ready(function() {

  var height = $('#mainNavbar').outerHeight();
  var validId = ['#education', '#habit', '#interest'];

  //slide section effect
  $('.slide-section').click(function(e) {
    var linkHref = $(this).attr('href');
    var linkHrefOffset = $(linkHref).offset().top;

    $('html, body').animate({
      scrollTop: linkHrefOffset
    }, 500);

    e.preventDefault();
  });

  var eventHandler = function(e) {

    var sectionLi = $('ul li');
    var sectionID = [];
    var matchIDIndex = [];
    var scrollY = window.scrollY;

    for (var x = 0; x < sectionLi.length; x++) {
      sectionID.push($(sectionLi[x].innerHTML).attr('href'));
    }

    for (var y = 0; y < sectionID.length; y++) {
      matchIDIndex.push($.inArray(sectionID[y], validId));
    }

    for (var m = 0; m < matchIDIndex.length; m++) {
      if (matchIDIndex[m] >= 0) {
        var sectionIDOffset = $(sectionID[m]).offset().top;

        if (!(sectionID[m + 1] == undefined)) {
          var nextSectionOffset = $(sectionID[m + 1]).offset().top;

          if (scrollY >= sectionIDOffset && scrollY <= nextSectionOffset) {
            $(sectionID[m] + ' .content').fadeIn();
          } else $(sectionID[m] + ' .content').fadeOut(800);
        } else if (scrollY >= sectionIDOffset) {
          $(sectionID[m] + ' .content').fadeIn();
        } else if (scrollY <= $(sectionID[m-1]).offset().top ) $(sectionID[m] + ' .content').fadeOut(800);
      }
    }
  }

  window.addEventListener('scroll', eventHandler, false);

});
