$(window).on('load', function () {
  AOS.init({
    duration: 750,
    once: true 
  });
});
//timer
if (($("#timer")).length) {
  var future = Date.parse('01 May 2018 00:00:00 GMT+0800');
  function updateTimer() {
    var now = Date.now();
    var diff = (future - now) / 1000;
    var days = Math.trunc(diff / 86400);
    var hours = Math.trunc((diff - days * 86400 ) / 3600);
    var mins = Math.trunc((diff - days * 86400 - hours * 3600) / 60);
    var secs = Math.trunc(diff - days * 86400 - hours * 3600 - mins * 60);
    if (diff < 0) {
      document.getElementById("timer")
        .innerHTML =
        '<div class="timer__number-container">' +
        '<span class="timer__number-title">Days</span>' +
        '<span class="timer__digit">00</span>' +
        '</div>' +
        '<span class="timer__colon">:</span>' +
        '<div class="timer__number-container">' +
        '</span>' + '<span class="timer__number-title">Hours</span>' +
        '<span class="timer__digit">00</span>' +
        '</div>' +
        '<span class="timer__colon">:</span>' +
        '<div class="timer__number-container">' +
        '<span class="timer__number-title">Minutes</span>' +
        '<span class="timer__digit">00</span>' +
        '</div>' +
        '<span class="timer__colon">:</span>' +
        '<div class="timer__number-container">' +
        '<span class="timer__number-title">Seconds</span>' +
        '<span class="timer__digit">00</span>' +

        '</div>';
      return;
    }
    function parseNumbers(number) {
      return number < 10 ? '0' + number : number
    }
    document.getElementById("timer")
      .innerHTML =
      '<div class="timer__number-container">' +
      '<span class="timer__number-title">Days</span>' +
      '<span class="timer__digit">' + parseNumbers(days) + '</span>' +
      '</div>' +
      '<span class="timer__colon">:</span>' +
      '<div class="timer__number-container">' +
      '</span>' + '<span class="timer__number-title">Hours</span>' +
      '<span class="timer__digit">' + parseNumbers(hours) + '</span>' +
      '</div>' +
      '<span class="timer__colon">:</span>' +
      '<div class="timer__number-container">' +
      '<span class="timer__number-title">Minutes</span>' +
      '<span class="timer__digit">' + parseNumbers(mins) + '</span>' +
      '</div>' +
      '<span class="timer__colon">:</span>' +
      '<div class="timer__number-container">' +
      '<span class="timer__number-title">Seconds</span>' +
      '<span class="timer__digit">' + parseNumbers(secs) + '</span>' +
      '</div>';
  }
  setInterval('updateTimer()', 1000);
}



$(document).ready(function(){
    var $document = $(document);
    var $header = $('header');
    $('.btn-menu').on('click', function () {
        $(this).toggleClass('open');
        $('.header-nav').toggleClass('open').fadeToggle();
        $('body').toggleClass('menu-open');
    });

    var markerFirstScroll = true;

    $('.scroll-page').on('click', function (e) {
        e.preventDefault();
        var body = $('html, body');
        var $target = $($(this).attr('href'));
        if ($target.length) {
            $('html, body').animate({
                'scrollTop': $target.offset().top - $header.outerHeight()
            }, {duration:500}
            );
        }
        markerFirstScroll = false;
        return false;
    });

    function onScroll(e) {
        var scrollPos = $document.scrollTop();
        if (scrollPos > $header.height()/2) {
            $header.addClass('scroll');
        } else {
            $header.removeClass('scroll');
        }
    }
    onScroll();
    $document.on("scroll", onScroll);
});

