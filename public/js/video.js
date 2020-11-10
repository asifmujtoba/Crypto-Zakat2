document.addEventListener('DOMContentLoaded', function() {

  var player;
  var backgroundVideo;
  (function() {
    if (!$('#backVideo').length) return;
    if ($(window).width() < 700) return;
    var $openPlayer = $('#openVideo');
    var $closePlayer = $('#closePlayer');
    var $videoPlayer = $('#videoPlayer');
    $openPlayer.on('click', function(e) {
      e.preventDefault();
      $videoPlayer.prop('hidden', false);
      if (player && player.playVideo) player.playVideo();
    });

    $('.video-backdrop').prop('hidden', false);
    $openPlayer.prop('hidden', false);

    $closePlayer.on('click', function () {
      $videoPlayer.prop('hidden', true);
      player.stopVideo();
    });

    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    var onYouTubeIframeAPIReady = function() {
      player = new YT.Player('player', {
        videoId: 'R03qBmtgHSY',
        playerVars: { showinfo: 0, loop: 1, autoplay: 0, modestbranding: 1 },
      });
      backgroundVideo = new YT.Player('backVideo', {
        videoId: 'R03qBmtgHSY',
        playerVars: { autoplay: 1, controls: 0, showinfo: 0, mute: 1, loop: 1, rel: 0, enablejsapi: 1, modestbranding: 1, playlist: 'R03qBmtgHSY' },
        events: {
          onStateChange: onBackgroundPlayerStateChange
        }
      });
    }
    var onBackgroundPlayerStateChange = function(event) {
      if (event.data === YT.PlayerState.PLAYING) {
        $('.video-backdrop').prop('hidden', false);
        $openPlayer.prop('hidden', false);
      }
    }

    var onBackgroundVideoReady = function(event) {
      event.target.setPlaybackRate(2);
    }

    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
    window.onBackgroundVideoReady = onBackgroundVideoReady;
  }());


  (function() {
    var form = $('#contact-form');
    var success = $('#contact-form-success');
    if (!form.length) return;
    var button = form.find('a');
    var email = form.find('input');
    var submit = function(e) {
      e.preventDefault();
      if (!email.val()) return;
      $.post("php/contact-send.php", {email: email.val()})
        .done(function() {
          if (player) player.loadVideoById({videoId: 'UG-2MjFUpag'}).stopVideo();
          if (backgroundVideo) backgroundVideo.loadVideoById({videoId: 'UG-2MjFUpag'}).mute().setLoop(true);
          form.prop('hidden', true);
          success.prop('hidden', false);
        })
        .fail(function() {
          console.log("Connection problems. The email was not sent.");
        });
    };
    button.on('click', submit);
    form.on('submit', submit);
  }());
});
