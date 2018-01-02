var player;


function  onPlayerReady() {
  // player.playVideo()
}

function onPlayerStateChange() {

}


function onYouTubeIframeAPIReady() {
  player = new YT.Player('embed', {
    videoId: '9VoLHdADma8',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}
