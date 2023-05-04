// function changeBG() {
//     var scrollvalue = window.scrollY;
//     console.log(scrollvalue);
// }

// window.addEventListener('scroll', changeBG);

$(function() {
    /* Initialize Carousel */
    var paused = 0;
    $('#myCarousel').carousel({
      interval: 1000,
      pause: 0
    });
  
    /* Play trigger */
    $('#toggleCarousel').click(function() {
      var state = (paused) ? 'cycle' : 'pause';
      paused = (paused) ? 0 : 1;
      $('#myCarousel').carousel(state);
      $(this).find('i').toggleClass('fa-play fa-pause');
    });
  });