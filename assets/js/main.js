/***************************************************
      As the page loads, cal these scripts
***************************************************/
$(function(){

  if($('#instafeed').length > 0){
    var feed = new Instafeed({
      //get: 'user',
      //userId: '1045245980',
      get: 'tagged',
      tagName: 'awesome',
      accessToken: '1045245980.ba4c844.e4e85ffbd253421ebf463634a9245454',
      limit: 30,
      resolution: 'standard_resolution',
      template: '<div class="grid-item"><a href="{{link}}"><img class="img-fluid" src="{{image}}" /></a></div>',
      after: function() {
        // init Masonry
        var $grid = $('.grid').masonry({
          itemSelector: '.grid-item',
          percentPosition: true,
          columnWidth: '.grid-sizer',
          gutter: 30
        });
        // layout Isotope after each image loads
        $grid.imagesLoaded().progress( function() {
          $grid.masonry();
        });
      }
    });
    feed.run();
  }
/*
  $('.masonry').masonry({
    // options...
    itemSelector: '.item',
    columnWidth: 200
  });
*/



});
