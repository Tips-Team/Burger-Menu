$(document).ready(function(){
    var $button__reload = $('.js_button--reload');

    var $background = $('.js_background');
    var $title = $('.js_title');
    var $description = $('.js_description');
    var $interest = $('.js_interest');

    var loadAPlace = function(){
        var jqxhr = $.getJSON("js/places.json")
            .done(function(data){
                random = data[Math.floor(Math.random()*data.length)];

                $background.css({backgroundImage: 'url('+ random.image +')'});

                $title.html(random.city);
                $description.html(random.description);
                $interest.html(random.interests);
            });
    }

    loadAPlace();

    $button__reload.click(function(e){
        e.preventDefault();

        loadAPlace();
    });
});

$(window).bind('mousewheel', function(event) {
  if (event.originalEvent.wheelDelta >= 0) {

    //event.preventDefault();
    console.log('Scroll up');
    if ($('body').hasClass('black')) {
      $('body').css('top','0vh');
      $('body').removeClass('black');
      $('.nav__pages li:last').removeClass('active');
      $('.nav__pages li:first').addClass('active');
    }
    return false;
  }
  else {

    //event.preventDefault();
    console.log('Scroll down');
    if (!$('body').hasClass('black')) {
      $('body').css('top','-100vh');
      $('body').addClass('black');
      $('.nav__pages li:first').removeClass('active');
      $('.nav__pages li:last').addClass('active');
    }

    return false;
  }
});

var windowWidth = $(window).width();
var switched = false;
$('.nav__toggle').on('click', function(){
  /*if(!switched) {
  	$('nav').removeClass('nav--closed');
  	switched = true;
  } else {
  	$('nav').addClass('nav--closed');
  	switched = false;
  }*/

  $('nav').toggleClass('nav--closed');
  switched = !switched;
});
