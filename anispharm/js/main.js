// Swiper init
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 100,
  centeredSlides: true,
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    1000: {
      slidesPerView: 3
    }
  }
});

swiper.slideNext();
// !Swiper

document.querySelector('.message-icon').addEventListener('click', () => {
  document.querySelector('.message').classList.add('active');
  document.querySelector('.consultant').classList.add('active');
});

document.querySelector('.message .close').addEventListener('click', () => {
  document.querySelector('.message').classList.remove('active');
  document.querySelector('.consultant').classList.remove('active');
});


// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '360',
    width: '640',
    videoId: '1JrwxRxm7QY',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  // event.target.playVideo();
  player.setVolume(50);
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    // setTimeout(stopVideo, 6000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}


const voiceBtn = document.getElementById('voice-control');

$(function() {
  $( ".advice__voice-bar" ).slider({
    orientation:"vertical",
    value:50,
    slide: function( event, ui ) {
      voiceBtn.style.height = `${ui.value}%`;
      player.setVolume(ui.value);
   }  
  });
 voiceBtn.style.height = `${$(".advice__voice-bar").slider("value")}%`;
});