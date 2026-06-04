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

const currentTimeEl = document.getElementById("current-time");

const durationEl = document.getElementById("duration");

// format time
function formatTime(time) {
  const minutes = Math.floor(time / 60);

  const seconds = Math.floor(time % 60);

  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

// update progress bar
audio.addEventListener("timeupdate", () => {
  const currentTime = audio.currentTime;

  const duration = audio.duration;

  if (duration) {
    progress.value = (currentTime / duration) * 100;

    currentTimeEl.innerText = formatTime(currentTime);

    durationEl.innerText = formatTime(duration);
  }
});
// seek song
progress.addEventListener("input", () => {
  audio.currentTime = (progress.value / 100) * audio.duration;
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

// ============================================
// SLEEP TIMER FUNCTIONALITY (PERSISTENT)
// ============================================

let sleepTimerInterval = null;
let sleepTimerTimeout = null;
let timerEndTime = null;

// Timer event listener for storage changes (sync across tabs/pages)
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
  // Clear any existing timer
  clearSleepTimer();

  const milliseconds = minutes * 60 * 1000;
  timerEndTime = Date.now() + milliseconds;

  // Update the timer display every second
  if (sleepTimerInterval) clearInterval(sleepTimerInterval);
  sleepTimerInterval = setInterval(updateTimerDisplay, 1000);

  // Set timeout to pause music
  sleepTimerTimeout = setTimeout(() => {
    if (audio && !audio.paused) {
      audio.pause();
      if (typeof playBtn !== "undefined" && playBtn) {
        playBtn.innerHTML = "<p style='font-size: 15px; color: #000;'>▶</p>";
      }

      // Show notification if browser supports it
      if (Notification.permission === "granted") {
        new Notification("ipLaY Sleep Timer", {
          body: "Timer completed! Music has been paused.",
          icon: "iplay_icon.png",
        });
      }

      // Also show a small UI alert
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

  // Save to localStorage for persistence across pages
  if (!isRestoring) {
    localStorage.setItem("sleep_timer_end", timerEndTime);
    localStorage.setItem("sleep_timer_start_time", Date.now());
    localStorage.setItem("sleep_timer_duration", minutes);
  }

  // Update UI
  updateActiveTimerUI(true);
  updateTimerIndicator();

  // Request notification permission if not already granted
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

  // Update timer button text to show remaining time
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

  // Update floating indicator
  updateTimerIndicator();
}

function updateTimerIndicator() {
  const indicator = document.getElementById("timer-status-indicator");
  if (!indicator) return;

  if (timerEndTime && timerEndTime > Date.now()) {
    const remaining = timerEndTime - Date.now();
    const minutes = Math.floor(remaining / 60000);
    const seconds = Math.floor((remaining % 60000) / 1000);

    if (minutes > 0) {
      // indicator.innerHTML = `⏱ Timer: ${minutes}m ${seconds}s`;
    } else if (seconds > 0) {
      // indicator.innerHTML = `⏱ Timer: ${seconds}s`;
    } else {
      // indicator.innerHTML = `⏱ Timer Active`;
    }
    // indicator.style.display = "flex";
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

  // Reset timer button text
  const timerBtn = document.getElementById("timer-btn");
  if (timerBtn) {
    timerBtn.innerHTML = `⏱ `;
  }

  // Hide floating indicator
  updateTimerIndicator();

  // Hide active timer info in modal if it's open
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
      // Restore the timer without saving again
      timerEndTime = parseInt(savedEndTime);

      // Update UI immediately
      updateTimerDisplay();
      updateActiveTimerUI(true);
      updateTimerIndicator();

      // Clear any existing interval/timeout
      if (sleepTimerInterval) clearInterval(sleepTimerInterval);
      if (sleepTimerTimeout) clearTimeout(sleepTimerTimeout);

      // Restart the timer display
      sleepTimerInterval = setInterval(updateTimerDisplay, 1000);

      // Set timeout to pause music when timer ends
      sleepTimerTimeout = setTimeout(() => {
        if (audio && !audio.paused) {
          audio.pause();
          if (typeof playBtn !== "undefined" && playBtn) {
            playBtn.innerHTML =
              "<p style='font-size: 15px; color: #000;'>▶</p>";
          }
        }
        clearSleepTimer();
        updateActiveTimerUI(false);
        updateTimerIndicator();
        localStorage.removeItem("sleep_timer_end");
      }, remaining);
    } else {
      // Timer expired while page was closed
      localStorage.removeItem("sleep_timer_end");
      localStorage.removeItem("sleep_timer_start_time");
      localStorage.removeItem("sleep_timer_duration");
    }
  }
  updateTimerIndicator();
}

// Initialize timer event listeners
function initTimerEventListeners() {
  console.log("Initializing timer event listeners...");

  const timerBtn = document.getElementById("timer-btn");
  if (timerBtn) {
    // Remove any existing listeners to avoid duplicates
    const newTimerBtn = timerBtn.cloneNode(true);
    timerBtn.parentNode.replaceChild(newTimerBtn, timerBtn);
    newTimerBtn.addEventListener("click", openTimerModal);
    console.log("Timer button listener attached");
  } else {
    console.log("Timer button not found");
  }

  // Preset buttons
  document.querySelectorAll(".timer-preset-btn").forEach((btn) => {
    btn.removeEventListener("click", btn._listener);
    btn._listener = function (e) {
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
    console.log("Apply custom button listener attached");
  }

  const cancelTimerBtn = document.getElementById("cancel-timer");
  if (cancelTimerBtn) {
    cancelTimerBtn.removeEventListener("click", cancelTimerBtn._listener);
    cancelTimerBtn._listener = function (e) {
      console.log("Cancel button clicked");
      cancelTimer();
    };
    cancelTimerBtn.addEventListener("click", cancelTimerBtn._listener);
    console.log("Cancel button listener attached");
  } else {
    console.log("Cancel button not found");
  }

  // Check for existing timer
  checkExistingTimer();
}

// Make sure functions are globally available
window.openTimerModal = openTimerModal;
window.closeTimerModal = closeTimerModal;
window.applyCustomTimer = applyCustomTimer;
window.cancelTimer = cancelTimer;
window.startSleepTimer = startSleepTimer;
window.clearSleepTimer = clearSleepTimer;

// Run when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function () {
    initTimerEventListeners();
  });
} else {
  initTimerEventListeners();
}

// ── SEARCH BAR TOGGLE ─────────────────────────────────────
let searchTimeout;

function toggleSearchBar() {
  const searchBar = document.querySelector(".search-bar");

  // Clear any existing timeout to reset the timer
  if (searchTimeout) {
    clearTimeout(searchTimeout);
  }

  if (searchBar) {
    const searchInput = document.getElementById("search-input");
    const searchButton = document.querySelector(".search-btn");

    if (searchBar.style.display === "none" || searchBar.style.display === "") {
      // Show the search bar
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

      // Auto hide after 8 seconds
      searchTimeout = setTimeout(() => {
        searchBar.style.display = "none";
        if (searchInput && typeof searchSongs === "function") {
          searchInput.removeEventListener("input", searchSongs);
        }
      }, 20000);
    } else {
      // Hide the search bar
      searchBar.style.display = "none";
      if (searchInput && typeof searchSongs === "function") {
        searchInput.removeEventListener("input", searchSongs);
      }
    }
  }
}
