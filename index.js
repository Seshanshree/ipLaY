const musicList = document.getElementById("music-list");

const availableMovies = {
  title: {
    1: "Jananayagan",
    2: "Leo",
    3: "Varisu",
    4: "The Greatest of All Time",
    5: "",
    6: "",
  },
  artist: {
    1: "Anirudh Ravichander and Team",
    2: "Anirudh Ravichander and Team",
    3: "Thaman S and Team",
    4: "",
  },
  icon: {
    1: "icon/jananayagan.jpg",
    2: "https://www.masstamilan.dev/w/leo-tamil-2023.webp",
    3: "https://www.masstamilan.dev/w/varisu-tamil-2023.webp",
    4: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbL8VaAb2GLq38_SAAYRy-dcir-hBjk4fomA&s",
    5: "",
    6: "",
    7: "",
    8: "",
    9: "",
    10: "",
    11: "",
    12: "",
  },
  songlistpicture: {
    1: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQXIk7h9nS9DsamRn_UWsukg4Pf7IlncK5cQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9784HdLZ52d8Q75xLrLLFIZm6upP_-ZJ98A&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBqZHFpcQ6a4CqKn4OjWK0IQ9oMauquxlXQQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOx_Icl1S5PSzAuHwD1U-zoPcUTN3QorH8qQ&s",
    ],
    2: [
      "https://www.masstamilan.dev/w/leo-tamil-2023.webp",
      "https://www.masstamilan.dev/w/leo-tamil-2023.webp",
      "https://www.masstamilan.dev/w/leo-tamil-2023.webp",
      "https://www.masstamilan.dev/w/leo-tamil-2023.webp",
      "https://www.masstamilan.dev/w/leo-tamil-2023.webp",
    ],
    3: [
      "https://www.masstamilan.dev/w/varisu-tamil-2023.webp",
      "https://www.masstamilan.dev/w/varisu-tamil-2023.webp",
      "https://www.masstamilan.dev/w/varisu-tamil-2023.webp",
      "https://www.masstamilan.dev/w/varisu-tamil-2023.webp",
        "https://www.masstamilan.dev/w/varisu-tamil-2023.webp",
        "https://www.masstamilan.dev/w/varisu-tamil-2023.webp",
    ],
    4: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbL8VaAb2GLq38_SAAYRy-dcir-hBjk4fomA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbL8VaAb2GLq38_SAAYRy-dcir-hBjk4fomA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbL8VaAb2GLq38_SAAYRy-dcir-hBjk4fomA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbL8VaAb2GLq38_SAAYRy-dcir-hBjk4fomA&s",
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
        "varisu/Celebration-Of-Varisu-MassTamilan.dev.mp3",
        "varisu/Jimikki-Ponnu-MassTamilan.dev.mp3",
        "varisu/Ranjithame-MassTamilan.dev (1).mp3",
        "varisu/Soul-Of-Varisu-MassTamilan.dev.mp3",
        "varisu/Thee-Thalapathy-MassTamilan.dev.mp3",
        "varisu/Vaa-Thalaivaa-MassTamilan.dev.mp3"
      ],
      4: [
        "GOAT/Chinna Chinna Kangal.mp3",
        "GOAT/Matta.mp3",
        "GOAT/Spark.mp3",
        "GOAT/Whistle Podu.mp3",
      ]
    },
  songKey: {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
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
    3: ["Celebration-Of-Varisu", 
        "Jimikki-Ponnu", 
        "Ranjithame", 
        "Soul-Of-Varisu",
        "Thee-Thalapathy",
        "Vaa-Thalaivaa"
    ],
    4: ["Chinna Chinna Kangal", 
        "Matta", 
        "Spark", 
        "Whistle Podu",
    ]
  },
};

// ── Render all movie cards ──────────────────────────────────────────────────
function displayMovies() {
  musicList.innerHTML = "";

  for (let i = 1; i <= Object.keys(availableMovies.title).length; i++) {
    musicList.innerHTML += `
      <div class="music-item" onclick="songsavailable(${i})">
          <img src="${availableMovies.icon[i]}" alt="${availableMovies.title[i]}">
          <div class="music-info">
              <h5>${availableMovies.title[i]}</h5>
              <p style="font-size: 10.8px; color: #b3b3b3;">
                ${availableMovies.artist[i]}
              </p>
          </div>
          <button onclick="songsavailable(${i})" class="gobtn">▶</button>
      </div>
    `;
  }
}

// 👇 ADD THIS
displayMovies();


// ── Search bar ─────────────────────────────────────────────────────────────
const searchInput = document.querySelector(".search-bar input");
const searchBtn = document.querySelector(".search-btn");

function doSearch() {
  const query = searchInput.value.trim().toLowerCase();
  const items = document.querySelectorAll(".music-item");

  let found = 0;
  items.forEach((item) => {
    const title = item
      .querySelector(".music-info h5")
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
  musicList.innerHTML += `
<button id="back-btn" onclick="displayMovies()">← Back</button>
`;


  for (let j = 0; j < availableMovies.songs[key].length; j++) {
    const content = `
        <div class="music-item" onclick="playMusic(${key}, ${j})">
            <img src="${availableMovies.songlistpicture[key][j]}" alt="${availableMovies.title[i]}">
            <div class="music-info">
                <h5>${availableMovies.songs[key][j]}</h5>
                <p style="font-size: 10.8px; color: #b3b3b3; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; padding-top: 3px;">${availableMovies.artist[key]}</p>
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

  playBtn.innerHTML = "<p style='font-size: 15px; color: #000;'>||</p>";

  currentSong.innerHTML = songName;
}

