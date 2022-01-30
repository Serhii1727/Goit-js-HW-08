import Player from "@vimeo/player";
import throttle from "lodash.throttle";


const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const SAVED_VIDEO = "videoplayer-current-time";

const onPlay = function(data) {
    let savedTimeVideo = data.seconds
    localStorage.setItem(SAVED_VIDEO, savedTimeVideo);
};

function setTime() {
    const savedVideo = localStorage.getItem(SAVED_VIDEO);

    if (savedVideo) {
        player.setCurrentTime(savedVideo);
    }


}

player.on('timeupdate', throttle(onPlay, 1000));
setTime();