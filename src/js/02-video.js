import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const KEY_CURRENT_TIME = "videoplayer-current-time";

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);


player.on('timeupdate', throttle(onPlay, 1000));


function onPlay({ seconds }) {
  localStorage.setItem(KEY_CURRENT_TIME, seconds);
}


player
  .setCurrentTime(localStorage.getItem(KEY_CURRENT_TIME))
  .then(function (seconds) {
    seconds = localStorage.getItem(KEY_CURRENT_TIME);
  })
  .catch(function (error) {
    switch (error.name) {
        case 'RangeError':
            seconds = 0 || seconds > player.duration;
            break;

        default:
          console.log('An error occurred while setting the time');
            break;
    }
  });

