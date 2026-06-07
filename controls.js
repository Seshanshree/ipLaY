// ── AUDIO PLAYER ─────────────────────────────────────

const audio = new Audio();
audio.preload = "auto";

let currentMovieKey = 1;
let currentSongIndex = 0;

const playBtn = document.getElementById("play-btn");
const currentSong = document.getElementById("current-song");

// ── BACKGROUND PLAYBACK: WAKE LOCK ────────────────────────────────────────────
// Prevents the OS from suspending the browser tab during playback
let wakeLock = null;

async function requestWakeLock() {
  if (!("wakeLock" in navigator)) return; // Not supported (iOS Safari)
  try {
    wakeLock = await navigator.wakeLock.request("screen");
    wakeLock.addEventListener("release", () => {
      // Re-acquire if tab becomes visible again and music is still playing
      if (!document.hidden && !audio.paused) requestWakeLock();
    });
  } catch (err) {
    // Silently fail — other fixes still cover this
  }
}

// Re-acquire wake lock when user returns to the tab
document.addEventListener("visibilitychange", () => {
  if (!document.hidden && !audio.paused && wakeLock === null) {
    requestWakeLock();
  }
});

// ── BACKGROUND PLAYBACK: MEDIA SESSION API ───────────────────────────────────
// Tells the OS "I am a real music app" — critical for lock screen controls
// and prevents Android/iOS from killing background audio
function updateMediaSession(movieKey, songIndex) {
  if (!("mediaSession" in navigator)) return;

  // Get song metadata — try both indexMovies (index.js) and availableMovies (library.js)
  let title = "Unknown Song";
  let artist = "ipLaY";
  let artwork = "iconicon.jpeg";

  if (typeof indexMovies !== "undefined" && indexMovies.songs[movieKey]) {
    title = indexMovies.songs[movieKey][songIndex] || title;
    artist = indexMovies.artist[movieKey] || artist;
    const pic = indexMovies.songlistpicture[movieKey]?.[songIndex];
    if (pic) artwork = pic;
  } else if (typeof availableMovies !== "undefined" && availableMovies.songs[movieKey]) {
    title = availableMovies.songs[movieKey][songIndex] || title;
    const pic = availableMovies.songlistpicture[movieKey]?.[songIndex];
    if (pic) artwork = pic;
  }

  navigator.mediaSession.metadata = new MediaMetadata({
    title: title,
    artist: artist,
    album: "ipLaY — Tamil Music",
    artwork: [
      { src: artwork, sizes: "512x512", type: "image/jpeg" },
    ],
  });

  // ALL action handlers must be set — missing ones cause OS to suspend audio
  navigator.mediaSession.setActionHandler("play", () => {
    audio.play();
    playBtn.innerHTML = "<p style='color: #000;'>||</p>";
    document.getElementById("audio-player").style.display = "block";
    requestWakeLock();
  });

  navigator.mediaSession.setActionHandler("pause", () => {
    audio.pause();
    playBtn.innerHTML = "<p style='color: #000;'>▶</p>";
  });

  navigator.mediaSession.setActionHandler("nexttrack", () => songInc());
  navigator.mediaSession.setActionHandler("previoustrack", () => songDec());

  navigator.mediaSession.setActionHandler("seekto", (details) => {
    if (details.seekTime !== undefined) {
      audio.currentTime = details.seekTime;
    }
  });

  navigator.mediaSession.setActionHandler("seekforward", (details) => {
    audio.currentTime = Math.min(audio.duration, audio.currentTime + (details.seekOffset || 10));
  });

  navigator.mediaSession.setActionHandler("seekbackward", (details) => {
    audio.currentTime = Math.max(0, audio.currentTime - (details.seekOffset || 10));
  });
}

// ── BACKGROUND PLAYBACK: SILENT AUDIO KEEPALIVE ─────────────────────────────
// Plays a silent 1-sample audio burst every 9 minutes to prevent
// the browser AudioContext from being suspended by the OS
let keepAliveInterval = null;

function startKeepAlive() {
  stopKeepAlive();
  keepAliveInterval = setInterval(() => {
    if (!audio.paused) {
      try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const buf = ctx.createBuffer(1, 1, 22050);
        const src = ctx.createBufferSource();
        src.buffer = buf;
        src.connect(ctx.destination);
        src.start(0);
        // Close context after use to free memory
        setTimeout(() => ctx.close(), 500);
      } catch (e) { /* Silently fail */ }
    }
  }, 9 * 60 * 1000); // Every 9 min (before the 10 min OS cutoff)
}

function stopKeepAlive() {
  if (keepAliveInterval) {
    clearInterval(keepAliveInterval);
    keepAliveInterval = null;
  }
}

// ── BACKGROUND PLAYBACK: STALL & SUSPEND RECOVERY ───────────────────────────
// Auto-recovers if the audio stream gets interrupted
audio.addEventListener("stalled", () => {
  if (!audio.paused) {
    audio.load();
    audio.play().catch(() => {});
  }
});

audio.addEventListener("suspend", () => {
  // 'suspend' fires when browser pauses buffering — NOT the same as user pausing
  // Only auto-resume if we were playing
  if (!audio.paused) {
    audio.play().catch(() => {});
  }
});

// Update Media Session playback position continuously (for lock screen scrubber)
audio.addEventListener("timeupdate", () => {
  if ("mediaSession" in navigator && audio.duration) {
    try {
      navigator.mediaSession.setPositionState({
        duration: audio.duration,
        playbackRate: audio.playbackRate,
        position: audio.currentTime,
      });
    } catch (e) { /* Ignore if not supported */ }
  }
});

// ── LOAD SONG ────────────────────────────────────────────────────────────────

function loadSong(movieKey, songIndex) {
  currentMovieKey = movieKey;
  currentSongIndex = songIndex;
  audio.src = availableMovies.songsList[movieKey][songIndex];
  currentSong.innerText = availableMovies.songs[movieKey][songIndex];
  updateMediaSession(movieKey, songIndex);
}

// ── PLAY / PAUSE ─────────────────────────────────────────────────────────────

function songPlay() {
  if (!audio.src) {
    loadSong(1, 0);
  }

  if (audio.paused) {
    audio.play().then(() => {
      requestWakeLock();
      startKeepAlive();
    }).catch(() => {});
    playBtn.innerHTML = "<p style='color: #000;'>||</p>";
    document.getElementById("audio-player").style.display = "block";
  } else {
    audio.pause();
    playBtn.innerHTML = "<p style='color: #000;'>▶</p>";
    stopKeepAlive();
  }
}

// ── NEXT ─────────────────────────────────────────────────────────────────────

function songInc() {
  currentSongIndex++;
  if (currentSongIndex >= availableMovies.songs[currentMovieKey].length) {
    currentSongIndex = 0;
  }
  loadSong(currentMovieKey, currentSongIndex);
  audio.play().then(() => {
    requestWakeLock();
    startKeepAlive();
  }).catch(() => {});
  playBtn.innerHTML = "<p style='color: #000;'>||</p>";
  document.getElementById("audio-player").style.display = "block";
}

// ── PREVIOUS ─────────────────────────────────────────────────────────────────

function songDec() {
  currentSongIndex--;
  if (currentSongIndex < 0) {
    currentSongIndex = availableMovies.songs[currentMovieKey].length - 1;
  }
  loadSong(currentMovieKey, currentSongIndex);
  audio.play().then(() => {
    requestWakeLock();
    startKeepAlive();
  }).catch(() => {});
  playBtn.innerHTML = "<p style='color: #000;'>||</p>";
  document.getElementById("audio-player").style.display = "block";
}

// ── AUTO NEXT WHEN SONG ENDS ─────────────────────────────────────────────────

audio.addEventListener("ended", () => {
  songInc();
});

// ── PROGRESS BAR ─────────────────────────────────────────────────────────────

const progress = document.getElementById("progress");
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

audio.addEventListener("timeupdate", () => {
  const currentTime = audio.currentTime;
  const duration = audio.duration;
  if (duration) {
    progress.value = (currentTime / duration) * 100;
    currentTimeEl.innerText = formatTime(currentTime);
    durationEl.innerText = formatTime(duration);
  }
});

progress.addEventListener("input", () => {
  audio.currentTime = (progress.value / 100) * audio.duration;
});

// ── PERSIST PLAYBACK ACROSS PAGE NAVIGATION ───────────────────────────────────

window.addEventListener("beforeunload", () => {
  localStorage.setItem("iplay_src", audio.src);
  localStorage.setItem("iplay_time", audio.currentTime);
  localStorage.setItem("iplay_playing", !audio.paused);
  localStorage.setItem("iplay_movieKey", currentMovieKey);
  localStorage.setItem("iplay_songIndex", currentSongIndex);
  localStorage.setItem("iplay_songName", currentSong.innerText);
});

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
    updateMediaSession(movieKey, songIndex);

    if (wasPlaying) {
      audio.play().then(() => {
        requestWakeLock();
        startKeepAlive();
      }).catch(() => {});
      playBtn.innerHTML = "<p style='color: #000;'>||</p>";
      document.getElementById("audio-player").style.display = "block";
    }
  }
});

// ── SLEEP TIMER FUNCTIONALITY (PERSISTENT) ───────────────────────────────────

let sleepTimerInterval = null;
let sleepTimerTimeout = null;
let timerEndTime = null;

window.addEventListener("storage", function (e) {
  if (e.key === "sleep_timer_end") {
    if (e.newValue) {
      const remaining = parseInt(e.newValue) - Date.now();
      if (remaining > 0) {
        startSleepTimer(remaining / 60000, true);
      } else {
        clearSleepTimer();
        updateActiveTimerUI(false);
        updateTimerIndicator();
      }
    } else {
      clearSleepTimer();
      updateActiveTimerUI(false);
      updateTimerIndicator();
    }
  }
});

function startSleepTimer(minutes, isRestoring = false) {
  clearSleepTimer();

  const milliseconds = minutes * 60 * 1000;
  timerEndTime = Date.now() + milliseconds;

  if (sleepTimerInterval) clearInterval(sleepTimerInterval);
  sleepTimerInterval = setInterval(updateTimerDisplay, 1000);

  sleepTimerTimeout = setTimeout(() => {
    if (audio && !audio.paused) {
      audio.pause();
      stopKeepAlive();
      if (typeof playBtn !== "undefined" && playBtn) {
        playBtn.innerHTML = "<p style='font-size: 15px; color: #000;'>▶</p>";
      }

      if (Notification.permission === "granted") {
        new Notification("ipLaY Sleep Timer", {
          body: "Timer completed! Music has been paused.",
          icon: "iplay_icon.png",
        });
      }

      const currentSongDiv = document.getElementById("current-song");
      if (currentSongDiv) {
        const originalText = currentSongDiv.innerHTML;
        currentSongDiv.innerHTML = " Timer completed - Music paused";
        setTimeout(() => {
          if (currentSongDiv.innerHTML === " Timer completed - Music paused") {
            currentSongDiv.innerHTML = originalText;
          }
        }, 3000);
      }
    }
    clearSleepTimer();
    updateActiveTimerUI(false);
    updateTimerIndicator();
    localStorage.removeItem("sleep_timer_end");
  }, milliseconds);

  if (!isRestoring) {
    localStorage.setItem("sleep_timer_end", timerEndTime);
    localStorage.setItem("sleep_timer_start_time", Date.now());
    localStorage.setItem("sleep_timer_duration", minutes);
  }

  updateActiveTimerUI(true);
  updateTimerIndicator();

  if (Notification.permission === "default") {
    Notification.requestPermission();
  }
}

function updateTimerDisplay() {
  if (!timerEndTime) return;

  const remaining = timerEndTime - Date.now();
  if (remaining <= 0) {
    updateActiveTimerUI(false);
    updateTimerIndicator();
    return;
  }

  const minutes = Math.floor(remaining / 60000);
  const seconds = Math.floor((remaining % 60000) / 1000);

  const timerDisplay = document.getElementById("timer-time-remaining");
  if (timerDisplay) {
    timerDisplay.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }

  const timerBtn = document.getElementById("timer-btn");
  if (timerBtn && remaining < 3600000) {
    if (minutes > 0) {
      timerBtn.innerHTML = `⏱ ${minutes}m`;
    } else if (seconds > 0) {
      timerBtn.innerHTML = `⏱ ${seconds}s`;
    }
  } else if (timerBtn && (!timerEndTime || remaining <= 0)) {
    timerBtn.innerHTML = `⏱ `;
  }

  updateTimerIndicator();
}

function updateTimerIndicator() {
  const indicator = document.getElementById("timer-status-indicator");
  if (!indicator) return;

  if (timerEndTime && timerEndTime > Date.now()) {
    // indicator.style.display = "flex"; // uncomment if you want the indicator
  } else {
    indicator.style.display = "none";
  }
}

function clearSleepTimer() {
  if (sleepTimerInterval) {
    clearInterval(sleepTimerInterval);
    sleepTimerInterval = null;
  }
  if (sleepTimerTimeout) {
    clearTimeout(sleepTimerTimeout);
    sleepTimerTimeout = null;
  }
  timerEndTime = null;
  localStorage.removeItem("sleep_timer_end");
  localStorage.removeItem("sleep_timer_start_time");
  localStorage.removeItem("sleep_timer_duration");

  const timerBtn = document.getElementById("timer-btn");
  if (timerBtn) {
    timerBtn.innerHTML = `⏱ `;
  }

  updateTimerIndicator();

  const activeTimerInfo = document.getElementById("active-timer-info");
  if (activeTimerInfo) {
    activeTimerInfo.style.display = "none";
  }
}

function updateActiveTimerUI(isActive) {
  const activeTimerInfo = document.getElementById("active-timer-info");
  if (activeTimerInfo) {
    activeTimerInfo.style.display = isActive ? "block" : "none";
  }
}

function openTimerModal() {
  const modal = document.getElementById("timerModal");
  if (modal) {
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
    updateTimerDisplay();
  }
}

function closeTimerModal() {
  const modal = document.getElementById("timerModal");
  if (modal) {
    modal.style.display = "none";
    document.body.style.overflow = "";
  }
}

function applyCustomTimer() {
  const minutesInput = document.getElementById("custom-minutes");
  let minutes = parseInt(minutesInput.value);
  if (isNaN(minutes)) minutes = 30;
  minutes = Math.min(180, Math.max(1, minutes));
  startSleepTimer(minutes);
  closeTimerModal();
}

function cancelTimer() {
  clearSleepTimer();
  updateActiveTimerUI(false);
  updateTimerIndicator();
  closeTimerModal();
}

function checkExistingTimer() {
  const savedEndTime = localStorage.getItem("sleep_timer_end");
  if (savedEndTime) {
    const remaining = parseInt(savedEndTime) - Date.now();
    if (remaining > 0 && remaining < 3600000 * 3) {
      timerEndTime = parseInt(savedEndTime);
      updateTimerDisplay();
      updateActiveTimerUI(true);
      updateTimerIndicator();

      if (sleepTimerInterval) clearInterval(sleepTimerInterval);
      if (sleepTimerTimeout) clearTimeout(sleepTimerTimeout);

      sleepTimerInterval = setInterval(updateTimerDisplay, 1000);

      sleepTimerTimeout = setTimeout(() => {
        if (audio && !audio.paused) {
          audio.pause();
          stopKeepAlive();
          if (typeof playBtn !== "undefined" && playBtn) {
            playBtn.innerHTML = "<p style='font-size: 15px; color: #000;'>▶</p>";
          }
        }
        clearSleepTimer();
        updateActiveTimerUI(false);
        updateTimerIndicator();
        localStorage.removeItem("sleep_timer_end");
      }, remaining);
    } else {
      localStorage.removeItem("sleep_timer_end");
      localStorage.removeItem("sleep_timer_start_time");
      localStorage.removeItem("sleep_timer_duration");
    }
  }
  updateTimerIndicator();
}

function initTimerEventListeners() {
  console.log("Initializing timer event listeners...");

  const timerBtn = document.getElementById("timer-btn");
  if (timerBtn) {
    const newTimerBtn = timerBtn.cloneNode(true);
    timerBtn.parentNode.replaceChild(newTimerBtn, timerBtn);
    newTimerBtn.addEventListener("click", openTimerModal);
  }

  document.querySelectorAll(".timer-preset-btn").forEach((btn) => {
    btn.removeEventListener("click", btn._listener);
    btn._listener = function () {
      const minutes = parseInt(this.getAttribute("data-minutes"));
      startSleepTimer(minutes);
      closeTimerModal();
    };
    btn.addEventListener("click", btn._listener);
  });

  const applyCustom = document.getElementById("apply-custom-timer");
  if (applyCustom) {
    applyCustom.removeEventListener("click", applyCustom._listener);
    applyCustom._listener = applyCustomTimer;
    applyCustom.addEventListener("click", applyCustom._listener);
  }

  const cancelTimerBtn = document.getElementById("cancel-timer");
  if (cancelTimerBtn) {
    cancelTimerBtn.removeEventListener("click", cancelTimerBtn._listener);
    cancelTimerBtn._listener = function () { cancelTimer(); };
    cancelTimerBtn.addEventListener("click", cancelTimerBtn._listener);
  }

  checkExistingTimer();
}

// Global exports
window.openTimerModal = openTimerModal;
window.closeTimerModal = closeTimerModal;
window.applyCustomTimer = applyCustomTimer;
window.cancelTimer = cancelTimer;
window.startSleepTimer = startSleepTimer;
window.clearSleepTimer = clearSleepTimer;

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initTimerEventListeners);
} else {
  initTimerEventListeners();
}

// ── SEARCH BAR TOGGLE ─────────────────────────────────────────────────────────

let searchTimeout;

function toggleSearchBar() {
  const searchBar = document.querySelector(".search-bar");

  if (searchTimeout) clearTimeout(searchTimeout);

  if (searchBar) {
    const searchInput = document.getElementById("search-input");
    const searchButton = document.querySelector(".search-btn");

    if (searchBar.style.display === "none" || searchBar.style.display === "") {
      searchBar.style.display = "flex";
      if (searchInput) {
        searchInput.focus();
        if (typeof searchSongs === "function") {
          searchInput.removeEventListener("input", searchSongs);
          searchInput.addEventListener("input", searchSongs);
        }
      }

      if (searchButton && typeof searchSongs === "function") {
        searchButton.removeEventListener("click", searchSongs);
        searchButton.addEventListener("click", function (event) {
          event.preventDefault();
          searchSongs();
        });
      }

      searchTimeout = setTimeout(() => {
        searchBar.style.display = "none";
        if (searchInput && typeof searchSongs === "function") {
          searchInput.removeEventListener("input", searchSongs);
        }
      }, 20000);
    } else {
      searchBar.style.display = "none";
      if (searchInput && typeof searchSongs === "function") {
        searchInput.removeEventListener("input", searchSongs);
      }
    }
  }
}

// ── HOOK INTO index.js's playMusic() TO UPDATE MEDIA SESSION ─────────────────
// Wraps the global playMusic so Media Session updates on every song tap
(function patchPlayMusic() {
  const _originalPlayMusic = window.playMusic;
  if (typeof _originalPlayMusic === "function") {
    window.playMusic = function (movieKey, songIndex) {
      _originalPlayMusic(movieKey, songIndex);
      updateMediaSession(movieKey, songIndex);
      requestWakeLock();
      startKeepAlive();
    };
  } else {
    // index.js may load after controls.js — retry once DOM is ready
    document.addEventListener("DOMContentLoaded", () => {
      if (typeof window.playMusic === "function") {
        const orig = window.playMusic;
        window.playMusic = function (movieKey, songIndex) {
          orig(movieKey, songIndex);
          updateMediaSession(movieKey, songIndex);
          requestWakeLock();
          startKeepAlive();
        };
      }
    });
  }
})();

// Also patch playLibrarySong (library.js)
(function patchPlayLibrarySong() {
  const _orig = window.playLibrarySong;
  if (typeof _orig === "function") {
    window.playLibrarySong = function (movieKey, songIndex) {
      _orig(movieKey, songIndex);
      updateMediaSession(movieKey, songIndex);
      requestWakeLock();
      startKeepAlive();
    };
  } else {
    document.addEventListener("DOMContentLoaded", () => {
      if (typeof window.playLibrarySong === "function") {
        const orig = window.playLibrarySong;
        window.playLibrarySong = function (movieKey, songIndex) {
          orig(movieKey, songIndex);
          updateMediaSession(movieKey, songIndex);
          requestWakeLock();
          startKeepAlive();
        };
      }
    });
  }
})();
