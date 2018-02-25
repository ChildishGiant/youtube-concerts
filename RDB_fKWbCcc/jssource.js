var player;


function  onPlayerReady() {
  // player.playVideo()
}

function onPlayerStateChange() {

}


function onYouTubeIframeAPIReady() {
  player = new YT.Player('embed', {
    videoId: 'RDB_fKWbCcc',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}
