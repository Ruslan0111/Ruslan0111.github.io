// Swiper init
var main = new Swiper('.main-page', {
  navigation: {
    nextEl: ".main-page__button-next",
    prevEl: ".main-page__button-prev",
  }
});


var videoSlider = new Swiper('.swiper-container', {
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

videoSlider.slideNext();
// !Swiper

document.querySelector('.message-icon').addEventListener('click', () => {
  document.querySelector('.message').classList.add('active');
  document.querySelector('.consultant').classList.add('active');
});

document.querySelector('.message .close').addEventListener('click', () => {
  document.querySelector('.message').classList.remove('active');
  document.querySelector('.consultant').classList.remove('active');
});

let mainButtons = document.querySelectorAll('.main-page .main-page__btn, .delivery__btn, .footer__btn');

mainButtons.forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('#main-form-bg').classList.add('active');
    document.querySelector('#main-form').classList.add('active');
    document.body.classList.add('lock');
  })
})

document.querySelector('#main-form .modal__close').addEventListener('click', () => {
  document.querySelector('#main-form-bg').classList.remove('active');
  document.querySelector('#main-form').classList.remove('active');
  document.body.classList.remove('lock');
})

let instructionButtons = document.querySelectorAll('.page-section-btn');

instructionButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    document.querySelector('#instruction-form-bg').classList.add('active');
    document.querySelector('#instruction-form').classList.add('active');
    document.querySelector('#instruction-form form').setAttribute('data-filename', e.target.dataset.filename);
    document.body.classList.add('lock');
  })
})

document.querySelector('#instruction-form .modal__close').addEventListener('click', () => {
  document.querySelector('#instruction-form-bg').classList.remove('active');
  document.querySelector('#instruction-form').classList.remove('active');
  document.body.classList.remove('lock');
})

document.querySelector('#instruction-form .modal__form').addEventListener('submit', (e) => {
  var link = document.createElement('a');
  var pdflink = e.target.dataset.filename;

  link.setAttribute('href', pdflink + '.png'); 

  link.setAttribute('download', pdflink + '.png');

  // link.setAttribute('target','_blank');      

  link.style.display = 'none';

  document.body.appendChild(link);        

  link.click();       

  document.body.removeChild(link);

  e.preventDefault();
})


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

 let phoneInputs = document.querySelectorAll('.phone');

 phoneInputs.forEach(item => {
  IMask(
   item, 
   {
     mask: '+{998}(00)000-00-00'
   });
 })
});