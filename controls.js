// ── AUDIO PLAYER ─────────────────────────────────────

const audio = new Audio();

let currentMovieKey = 1;
let currentSongIndex = 0;

const playBtn = document.getElementById("play-btn");
const currentSong = document.getElementById("current-song");

// Load song
function loadSong(movieKey, songIndex) {
  currentMovieKey = movieKey;
  currentSongIndex = songIndex;

  // audio path
  audio.src = availableMovies.songsList[movieKey][songIndex];

  // song name
  currentSong.innerText = availableMovies.songs[movieKey][songIndex];
}

// Play / Pause button
function songPlay() {
  // if no song loaded
  if (!audio.src) {
    loadSong(1, 0);
  }

  if (audio.paused) {
    audio.play();
    playBtn.innerHTML = "<p style='font-size: 24px; color: #000;'>||</p>";
  } else {
    audio.pause();
    playBtn.innerHTML = "<p  style='color: #000; font-weight: 600; font-family: \"Poppins\", sans-serif; font-letter-spacing: 0.04em; font-size: 15px; '>▶</p>";
  }
}

// Next button
function songInc() {
  currentSongIndex++;

  if (currentSongIndex >= availableMovies.songs[currentMovieKey].length) {
    currentSongIndex = 0;
  }

  loadSong(currentMovieKey, currentSongIndex);

  audio.play();
  playBtn.innerHTML = "<p style='font-size: 24px; color: #000;'>||</p>";
}

// Previous button
function songDec() {
  currentSongIndex--;

  if (currentSongIndex < 0) {
    currentSongIndex = availableMovies.songs[currentMovieKey].length - 1;
  }

  loadSong(currentMovieKey, currentSongIndex);

  audio.play();
  playBtn.innerHTML = "<p style='font-size: 24px; color: #000;'>||</p>";
}

// Auto next when song ends
audio.addEventListener("ended", () => {
  songInc();
});



const progress = document.getElementById("progress");

const currentTimeEl =
    document.getElementById("current-time");

const durationEl =
    document.getElementById("duration");

// format time
function formatTime(time) {

    const minutes =
        Math.floor(time / 60);

    const seconds =
        Math.floor(time % 60);

    return `${minutes}:${
        seconds < 10 ? "0" : ""
    }${seconds}`;
}

// update progress bar
audio.addEventListener("timeupdate", () => {

    const currentTime = audio.currentTime;

    const duration = audio.duration;

    if (duration) {

        progress.value =
            (currentTime / duration) * 100;

        currentTimeEl.innerText =
            formatTime(currentTime);

        durationEl.innerText =
            formatTime(duration);
    }
});
// seek song
progress.addEventListener("input", () => {

    audio.currentTime =
        (progress.value / 100) * audio.duration;
});