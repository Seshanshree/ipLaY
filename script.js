const musicList = document.getElementById("music-list");

const availableMovies = {
  title: {
    1: "Jananayagan",
    2: "Leo",
    3: "Varisu",
    4: "Jananayagan",
    5: "Leo",
    6: "Varisu",
    7: "Jananayagan",
    8: "Leo",
    9: "Varisu",
    10: "Jananayagan",
    11: "Leo",
    12: "Varisu",
  },
  artist: {
    1: "Ed Sheeran",
    2: "The Weeknd",
    3: "Dua Lipa",
    4: "Ed Sheeran",
    5: "The Weeknd",
    6: "Dua Lipa",
    7: "Ed Sheeran",
    8: "The Weeknd",
    9: "Dua Lipa",
    10: "Ed Sheeran",
    11: "The Weeknd",
    12: "Dua Lipa",
  },
  icon: {
    1: "icon/jananayagan.jpg",
    2: "icon/leo.jpg",
    3: "icon/leo.jpg",
    4: "icon/jananayagan.jpg",
    5: "icon/leo.jpg",
    6: "icon/leo.jpg",
    7: "icon/jananayagan.jpg",
    8: "icon/leo.jpg",
    9: "icon/leo.jpg",
    10: "icon/jananayagan.jpg",
    11: "icon/leo.jpg",
    12: "icon/leo.jpg",
  },
  songlistpicture: {
    1: [
      "icon/jananayagan.jpg",
      "icon/jananayagan.jpg",
      "icon/jananayagan.jpg",
      "icon/jananayagan.jpg",
    ],
    2: [
      "icon/leo.jpg",
      "icon/leo.jpg",
      "icon/leo.jpg",
      "icon/leo.jpg",
      "icon/leo.jpg",
    ],
    3: [
      "icon/varisu.jpg",
      "icon/varisu.jpg",
      "icon/varisu.jpg",
      "icon/varisu.jpg",
    ],
  },
  songsList: {
    1: [
      "jananayagan/Chella-Magale-MassTamilan.dev.mp3",
      "jananayagan/Oru-Pere-Varalaaru-MassTamilan.dev.mp3",
      "jananayagan/Raavana-Mavandaa-MassTamilan.dev.mp3",
      "jananayagan/Thalapathy Kacheri.mp3",
    ],
    2: [
      "leo/Naa-Ready-MassTamilan.dev.mp3",
      "leo/Badass-MassTamilan.dev.mp3",
      "leo/Bloody-Sweet-MassTamilan.dev.mp3",
      "leo/Lokiverse-2.0-MassTamilan.dev.mp3",
      "leo/Glimpse-of-Harold-Das-MassTamilan.dev.mp3",
    ],
    3: [
      "audio/Verithanam-MassTamilan.dev.mp3",
      "audio/Soul-of-Varisu-MassTamilan.dev.mp3",
      "audio/Vaa-Vaathi-MassTamilan.dev.mp3",
      "audio/Chella-Magale-MassTamilan.dev.mp3",
    ],
  },
  songKey: {
    1: 1,
    2: 2,
    3: 3,
    4: 1,
    5: 2,
    6: 3,
    7: 1,
    8: 2,
    9: 3,
    10: 1,
    11: 2,
    12: 3,
  },
  songs: {
    1: [
      "Chella Magale",
      "Oru Pere Varalaaru",
      "Raavana Mavandaa",
      "Thalapathy Kacheri",
    ],
    2: [
      "Naa-Ready",
      "Badass",
      "Bloody-Sweet",
      "Lokiverse-2.0",
      "Glimpse-of-Harold-Das",
    ],
    3: ["Verithanam", "Soul of Varisu", "Vaa Vaathi", "Chella Magale"],
  },
};

// ── Render all movie cards ──────────────────────────────────────────────────
for (let i = 1; i <= Object.keys(availableMovies.title).length; i++) {
  musicList.innerHTML += `
        <div class="music-item">
            <img src="${availableMovies.icon[i]}" alt="${availableMovies.title[i]}">
            <div class="music-info">
                <h3>${availableMovies.title[i]}</h3>
                <p>${availableMovies.artist[i]}</p>
            </div>
            <button onclick="songsavailable(${i})" class="gobtn">▶</button>
        </div>
    `;
}

// ── Search bar ─────────────────────────────────────────────────────────────
const searchInput = document.querySelector(".search-bar input");
const searchBtn = document.querySelector(".search-btn");

function doSearch() {
  const query = searchInput.value.trim().toLowerCase();
  const items = document.querySelectorAll(".music-item");

  let found = 0;
  items.forEach((item) => {
    const title = item
      .querySelector(".music-info h3")
      .textContent.toLowerCase();
    const artist = item
      .querySelector(".music-info p")
      .textContent.toLowerCase();
    const match = title.includes(query) || artist.includes(query);
    item.style.display = match ? "flex" : "none";
    if (match) found++;
  });

  let noResult = document.getElementById("no-result");
  if (!noResult) {
    noResult = document.createElement("div");
    noResult.id = "no-result";
    noResult.style.cssText =
      "text-align:center;padding:50px 20px;color:#b3b3b3;width:100%;";
    noResult.innerHTML = `<div style="font-size:48px;margin-bottom:16px;">🔍</div>
            <h3 style="color:#fff;margin-bottom:8px;">No songs found</h3>
            <p>Try a different title or artist name.</p>`;
    musicList.appendChild(noResult);
  }
  noResult.style.display = found === 0 && query !== "" ? "block" : "none";
}

searchBtn.addEventListener("click", doSearch);
searchInput.addEventListener("input", doSearch);
searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") doSearch();
});

function songsavailable(i) {
  const key = availableMovies.songKey[i];
  const title = availableMovies.title[i];
  const artist = availableMovies.artist[i];
  const icon = availableMovies.icon[i];
  const list = availableMovies.songs[key];
  musicList.innerHTML = "";

  for (let j = 0; j < availableMovies.songs[key].length; j++) {
    const content = `
        <div class="music-item">
            <img src="${availableMovies.songlistpicture[key][j]}" alt="${availableMovies.title[i]}">
            <div class="music-info">
                <h3>${availableMovies.songs[key][j]}</h3>
                <p>${availableMovies.artist[key]}</p>
            </div>
            <button onclick="playMusic(${key}, ${j})" class="gobtn">▶</button>
        </div>
    `;
    musicList.innerHTML += content;
  }
}

function playMusic(movieKey, songIndex) {
  currentMovieKey = movieKey;
  currentSongIndex = songIndex;

  const songPath = availableMovies.songsList[movieKey][songIndex];

  const songName = availableMovies.songs[movieKey][songIndex];
  console.log(songPath);

  audio.src = songPath;

  audio.play();

  playBtn.innerHTML = "<p style='font-size: 24px; color: #000;'>||</p>";

  currentSong.innerHTML = songName;
}

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
    playBtn.innerHTML = "<p style='font-size: 24px; color: #000;'>▶</p>";
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
