function Player(config) {
  if (config.media && config.play) {
    this.media = document.querySelector(config.media),
    this.video = {
      play: document.querySelector(config.play),
      mute: document.querySelector(config.mute)
    }
    if (this.media && this.video.play) {
      this.video.play.onclick = () => {
        this.togglePlay();
      };
    } else {
      console.error('the media or play selector is error wrong');
    }
    if (this.video.mute) {
      this.video.mute.onclick = () => {
        this.toggleMute();
      }
    }
  } else {
    console.error('media and play properties are required in config object');
  }
}
Player.prototype.play = function() {
  this.media.play();
}
Player.prototype.pause = function() {
  this.media.pause();
}
Player.prototype.togglePlay = function() {
  if (this.media.paused) {
    this.play();
  } else {
    this.pause();
  }
}
Player.prototype.mute = function() {
  this.media.muted = true;
}
Player.prototype.unmute = function() {
  this.media.muted = false;
}
Player.prototype.toggleMute = function() {
  if (this.media.muted) {
    this.media.muted = false;
  } else {
    this.media.muted = true;
  }
}
export default Player