// ─────────────────────────────────────────────────────────────────────────────
// library.js  — loaded BEFORE controls.js
//
// controls.js already declares (with let/const):
//   audio, playBtn, currentSong, currentMovieKey, currentSongIndex
//
// ⚠️  Do NOT re-declare any of those here — duplicate `let` in the same
//     global scope throws SyntaxError and breaks the entire page.
//
// We only define:
//   • availableMovies  (song data controls.js needs)
//   • playlists        (Library grid metadata)
//   • UI functions     (displayPlaylist, displayPlaylistSongs, playLibrarySong)
// ─────────────────────────────────────────────────────────────────────────────

// ── SONG DATA (controls.js reads this for prev/next/play) ────────────────────
var availableMovies = {
  songs: {
    1: [
      "Jimikki Ponnu",
      "Ranjithame",
      "Soul Of Varisu",
      "Thalapathy Kacheri",
      "Spark",
    ],
    2: [
      "Naa Ready",
      "Badass",
      "Bloody Sweet",
      "Oru Pere Varalaaru",
      "Raavana Mavandaa",
      "Thalapathy Kacheri",
      "Celebration-Of-Varisu",
      "Jimikki-Ponnu",
      "Ranjithame",
      "Soul-Of-Varisu",
      "Thee-Thalapathy",
      "Vaa-Thalaivaa",
      "Matta",
      "Spark",
      "Whistle Podu",
    ],
    3: [
      "Chella Magale",
      "Oru Pere Varalaaru",
      "Raavana Mavandaa",
      "Thalapathy Kacheri",
    ],
    4: ["Chinna Chinna Kangal", "Matta", "Spark", "Whistle Podu"],
    5: [
      "Kallaliye Kallaliye",
      "Maalai Mangum Neram",
      "Pirai Thedum Neram",
      "En Jeevan",
      "Kanna Veesi Kanna Veesi",
      "Varaya Thozhi",
    ],
  },

  songsList: {
    1: [
      "varisu/Jimikki-Ponnu-MassTamilan.dev.mp3",
      "varisu/Ranjithame-MassTamilan.dev (1).mp3",
      "varisu/Soul-Of-Varisu-MassTamilan.dev.mp3",
      "varisu/Thee-Thalapathy-MassTamilan.dev.mp3",
      "varisu/Vaa-Thalaivaa-MassTamilan.dev.mp3",
    ],
    2: [
      "leo/Naa-Ready-MassTamilan.dev.mp3",
      "leo/Badass-MassTamilan.dev.mp3",
      "leo/Bloody-Sweet-MassTamilan.dev.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1778678616/Oru-Pere-Varalaaru-MassTamilan.dev_yys7mt.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1778678616/Raavana-Mavandaa-MassTamilan.dev_t8o665.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1778678617/Thalapathy_Kacheri_ymxdbx.mp3",
      "varisu/Celebration-Of-Varisu-MassTamilan.dev.mp3",
      "varisu/Jimikki-Ponnu-MassTamilan.dev.mp3",
      "varisu/Ranjithame-MassTamilan.dev (1).mp3",
      "varisu/Soul-Of-Varisu-MassTamilan.dev.mp3",
      "varisu/Thee-Thalapathy-MassTamilan.dev.mp3",
      "varisu/Vaa-Thalaivaa-MassTamilan.dev.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1778677816/Matta_dysr8z.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1778677799/Spark_fyxqn8.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1778677857/Whistle_Podu_dykdzh.mp3",
    ],
    3: [
      "https://res.cloudinary.com/seshancloudy/video/upload/v1778678628/Chella-Magale-MassTamilan.dev_qgjxyf.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1778678616/Oru-Pere-Varalaaru-MassTamilan.dev_yys7mt.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1778678616/Raavana-Mavandaa-MassTamilan.dev_t8o665.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1778678617/Thalapathy_Kacheri_ymxdbx.mp3",
    ],
    4: [
      "https://res.cloudinary.com/seshancloudy/video/upload/v1778677796/Chinna_Chinna_Kangal_lhwhxb.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1778677816/Matta_dysr8z.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1778677799/Spark_fyxqn8.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1778677857/Whistle_Podu_dykdzh.mp3",
    ],
    5: [
      "akkaplaylist/Kallaliye Kallaliye.mp3",
      "akkaplaylist/Maalai-Mangum-Neram.mp3",
      "akkaplaylist/Pirai-Thedum.mp3",
      "akkaplaylist/En Jeevan(KoshalWorld.Com).mp3",
      "akkaplaylist/Kanna-Veesi-Kanna-Veesi-MassTamilan.io.mp3",
      "akkaplaylist/Varaya Thozhi.mp3",
    ],
  },

  songlistpicture: {
    1: Array(6).fill("https://www.masstamilan.dev/w/varisu-tamil-2023.webp"),
    2: Array(15).fill("https://www.masstamilan.dev/w/leo-tamil-2023.webp"),
    3: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQXIk7h9nS9DsamRn_UWsukg4Pf7IlncK5cQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9784HdLZ52d8Q75xLrLLFIZm6upP_-ZJ98A&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBqZHFpcQ6a4CqKn4OjWK0IQ9oMauquxlXQQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOx_Icl1S5PSzAuHwD1U-zoPcUTN3QorH8qQ&s",
    ],
    4: Array(4).fill(
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbL8VaAb2GLq38_SAAYRy-dcir-hBjk4fomA&s",
    ),
    5: [
      "https://www.masstamilan.dev/w/maaman-tamil-2025.webp",
      "https://www.masstamilan.dev/w/rowthiram-2011.webp",
      "https://www.masstamilan.dev/w/mayakkam-enna-2011.webp",
      "https://koshalworld.com/siteuploads/thumb/sft74/36719_4.webp",
      "https://www.masstamilan.dev/w/kadhal-ondru-kanden-short-film-tamil-2020.webp"
    ],
  },
};

// ── PLAYLIST GRID METADATA ────────────────────────────────────────────────────
var playlists = {
  1: { title: "Kadhal Veesum", movieKey: 1 },
  2: { title: "Thalapathy Hits", movieKey: 2 },
  3: { title: "Anirudh's Best", movieKey: 3 },
  4: { title: "Top Tamil Songs", movieKey: 4 },
  5: { title: "V Songs", movieKey: 5 },
  6: { title: "Romantic Tamil Songs", movieKey: null },
  7: { title: "Dance Hits", movieKey: null },
  8: { title: "Melody Mix", movieKey: null },
  9: { title: "Party Anthems", movieKey: null },
  10: { title: "Sad Tamil Songs", movieKey: null },
  
};

// ── DOM ───────────────────────────────────────────────────────────────────────
var playlistContainer = document.getElementById("playlist-container");

// ── RENDER PLAYLIST GRID ──────────────────────────────────────────────────────
function displayPlaylist() {
  playlistContainer.style.display = ""; // restore CSS grid
  playlistContainer.innerHTML = "";

  for (var id in playlists) {
    playlistContainer.innerHTML += `
      <div class="playlist-item" onclick="displayPlaylistSongs(${id})">
        <div class="playlist-info">
          <h5>${playlists[id].title}</h5>
        </div>
      </div>`;
  }
}

displayPlaylist();

// ── RENDER SONGS INSIDE A PLAYLIST ───────────────────────────────────────────
function displayPlaylistSongs(playlistId) {
  var pl = playlists[playlistId];
  var movieKey = pl.movieKey;
  var title = pl.title;
  var songs = movieKey ? availableMovies.songs[movieKey] : [];
  var pictures = movieKey ? availableMovies.songlistpicture[movieKey] : [];

  // Switch container from grid → block so items stack vertically
  playlistContainer.style.display = "block";

  var songsHTML = "";

  if (!songs || songs.length === 0) {
    songsHTML = `<p style="color:#b3b3b3;margin-top:20px;">No songs in this playlist yet.</p>`;
  } else {
    for (var j = 0; j < songs.length; j++) {
      songsHTML += `
        <div class="music-item" onclick="playLibrarySong(${movieKey}, ${j})">
          <img src="${pictures[j] || ""}"
               onerror="this.style.display='none'"
               alt="${songs[j]}" />
          <div class="music-info">
            <h5>${songs[j]}</h5>
            <p style="font-size:10.8px;color:#b3b3b3;">${title}</p>
          </div>
          <button class="gobtn"
                  onclick="event.stopPropagation(); playLibrarySong(${movieKey}, ${j})">▶</button>
        </div>`;
    }
  }

  playlistContainer.innerHTML = `
    <button id="back-buttoninlib" onclick="displayPlaylist()">← Back</button>
    <div class="songs-list1">
      <h3>${title}</h3>
      ${songsHTML}
    </div>`;
}

// ── PLAY A SONG ───────────────────────────────────────────────────────────────
// audio, playBtn, currentSong, currentMovieKey, currentSongIndex
// are all declared in controls.js — do NOT redeclare them here.
function playLibrarySong(movieKey, songIndex) {
  // Update the shared state controls.js uses for prev/next
  currentMovieKey = movieKey;
  currentSongIndex = songIndex;

  audio.src = availableMovies.songsList[movieKey][songIndex];
  audio.play();

  currentSong.innerText = availableMovies.songs[movieKey][songIndex];
  playBtn.innerHTML = "<p style='font-size:24px;color:#000;'>||</p>";
}
