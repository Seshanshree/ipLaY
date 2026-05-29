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
    playBtn.innerHTML = "<p style='color: #000;'>||</p>";
  } else {
    audio.pause();
    playBtn.innerHTML = "<p style='color: #000; '>▶</p>";
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
  playBtn.innerHTML = "<p style=' color: #000;'>||</p>";
}

// Previous button
function songDec() {
  currentSongIndex--;

  if (currentSongIndex < 0) {
    currentSongIndex = availableMovies.songs[currentMovieKey].length - 1;
  }

  loadSong(currentMovieKey, currentSongIndex);

  audio.play();
  playBtn.innerHTML = "<p style=' color: #000;'>||</p>";
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


//_-------

// ── PERSIST PLAYBACK ACROSS PAGE NAVIGATION ───────────────────────────────

// Save state right before the page unloads (nav to home or library)
window.addEventListener("beforeunload", () => {
  localStorage.setItem("iplay_src", audio.src);
  localStorage.setItem("iplay_time", audio.currentTime);
  localStorage.setItem("iplay_playing", !audio.paused);
  localStorage.setItem("iplay_movieKey", currentMovieKey);
  localStorage.setItem("iplay_songIndex", currentSongIndex);
  localStorage.setItem("iplay_songName", currentSong.innerText);
});

// Restore state when the new page loads
window.addEventListener("load", () => {
  const src = localStorage.getItem("iplay_src");
  const time = parseFloat(localStorage.getItem("iplay_time") || "0");
  const wasPlaying = localStorage.getItem("iplay_playing") === "true";
  const movieKey = parseInt(localStorage.getItem("iplay_movieKey") || "1");
  const songIndex = parseInt(localStorage.getItem("iplay_songIndex") || "0");
  const songName = localStorage.getItem("iplay_songName") || "";

  if (src) {
    currentMovieKey = movieKey;
    currentSongIndex = songIndex;
    audio.src = src;
    audio.currentTime = time;
    currentSong.innerText = songName;

    if (wasPlaying) {
      audio.play();
      playBtn.innerHTML = "<p style=' color: #000;'>||</p>";
    }
  }
});
