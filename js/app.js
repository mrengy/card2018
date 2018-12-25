$(document).foundation().ready( function(){
  //Move the snail

  var containingA = $('#lightning').parent('a');
  console.log(containingA);
  $('#lightning').click(function(e){
    //make lightning not clickable
    $('#lightning').unwrap('a');
    //stop the browser's click action
    e.preventDefault();
    //add class to the snail container
    $('#snail-container').addClass('moved');
    //track in google analytics
    ga('send', 'event', 'Easter Egg', 'click', 'Lightning', 1);
  });

  $('#snail').parent().on( 'transitionend', function() {
    $('#snail-container').removeClass('moved');
    $('#lightning').wrap(containingA);
  });
});
