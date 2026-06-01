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
      "Aasa Kooda",
      "Pavazha Malli",
      "Naanga Naalu Peru",
      "Katchi Sera",
      "Sithira Puthiri",
      "Vizhi Veekura",
      "Oorum Blood",
      "Singari",
      "Kannukulla",
      "Yumabaibesa",
      "Nallaru Po"
    ],
    2: [
      "Po Urave",
      "Pirai Thedum",
      "Sakkra Nilave",
      "Poongateile",
      "Kanave Kanave",
      "Imaye Imaye",
      "Ava Enna",
      "Yamma Yamma",
      "Kadhal Oru Aagayam",
      "Unna Nenachu",
      "Pona Pogattum",
      "Thanimaiye",
      "Enai Vittu",
      "Po Nee Po",
      "Ennai Kollethey",
      "Thodu Vaanam",
      "Enakenna Yaarum Illaye",
      "Marappadhilai Nenje",
      "Yedho Ondru Ennai",
      "Venmegam",
      "Adiyae Azhagae"
    ],
    3: [
      "Macha Kanni",
      "Machi Open the Bottle",
      "Mascara",
      "Yen Chellaperu Apple",
      "Daddy Mummy",
      "En Peeru Meenakumari",
      "Manogari",
      "Pia Pia",
      "Thanjavoor Jilla Kaari",
      "Dailamo Dailamo",
      "Heartukulla",
      "Jungunamani",
      "Oru Kuchi Oru Kulfi",
      "Vaadi Vaadi Naatu Katta",
      "Achacho",
      "Kaavaalaa",
      "Kannu Rendum",
      "Chiku Chiku Boom Boom",
      "Pavazha Malli",
      "Aura 10/10",
      "Karupa Kooda Va"
    ],
    4: [
      "Jimikki Ponnu",
      "Ranjithame",
      "Soul Of Varisu",
      "Thalapathy Kacheri",
      "Spark",
    ],
    5: [
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
    6: [
      "Chella Magale",
      "Oru Pere Varalaaru",
      "Raavana Mavandaa",
      "Thalapathy Kacheri",
    ],
    7: [
        "Chinna Chinna Kangal", 
        "Matta", 
        "Spark", 
        "Whistle Podu"],
    8: [
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
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780196688/Aasa_Kooda_g4gadv.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780196687/Pavazha_Malli_hkdbcp.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780133371/Naanga_Naalu_Peru_mt1hys.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780196691/Katchi_Sera_fgybzp.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780196693/Sithira-Puthiri-MassTamilan.dev_mtefop.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780196693/Vizhi_Veekura_o8lac0.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780153988/Oorum_Blood_kkxuwk.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780153991/Singari_jddjzo.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780153991/Kannukulla_li5i45.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780153985/Yumabaibesa_n5dwdj.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780153994/Nallaru_Po_alkjpp.mp3",
    ],
    2: [
        "https://res.cloudinary.com/dmnlhl2xn/video/upload/v1780239268/Po-Urave-MassTamilan.com_dvo20u.mp3",
        "https://res.cloudinary.com/dmnlhl2xn/video/upload/v1780239325/Pirai-Thedum_vaooai.mp3",
        "https://res.cloudinary.com/dmnlhl2xn/video/upload/v1780239378/Sakkarai_Nilave_iwhqkr.mp3",
        "https://res.cloudinary.com/dmnlhl2xn/video/upload/v1780239530/Poongkaatrilae_ppcgu5.mp3",
        "https://res.cloudinary.com/dmnlhl2xn/video/upload/v1780239549/Kanave-Kanave-MassTamilan.com_djvu27.mp3",
        "https://res.cloudinary.com/dmnlhl2xn/video/upload/v1780239508/Imaye-Imaye_rcvfti.mp3",
        "https://res.cloudinary.com/dmnlhl2xn/video/upload/v1780239547/Ava-Enna-Enna-MassTamilan.com_bpmone.mp3",
        "https://res.cloudinary.com/dmnlhl2xn/video/upload/v1780240113/Yamma-Yamma_nrw1bo.mp3",
        "https://res.cloudinary.com/dmnlhl2xn/video/upload/v1780239980/Kadhal-Oru-Aagayam-MassTamilan.com_wt5msw.mp3",
        "https://res.cloudinary.com/dmnlhl2xn/video/upload/v1780240094/Unna-Nenachu-MassTamilan.io_kviavs.mp3",
        "https://res.cloudinary.com/dmnlhl2xn/video/upload/v1780240001/Pona-Pogattum-MassTamilan.io_zic8ip.mp3",
        "https://res.cloudinary.com/dmnlhl2xn/video/upload/v1780240107/Thanimaye-Thanimaye-MassTamilan.io_xyccaz.mp3",
        "https://res.cloudinary.com/dmnlhl2xn/video/upload/v1780240112/Ennai-Vittu-MassTamilan.dev_tiwtiy.mp3",
        "https://res.cloudinary.com/dmnlhl2xn/video/upload/v1780240125/Po_Nee_Po_Remix_-_The_Scream_of_Love_palppu.mp3",
        "https://res.cloudinary.com/dmnlhl2xn/video/upload/v1780240197/Ennai-Kollathey-MassTamilan.fm_x1l827.mp3",
        "https://res.cloudinary.com/dmnlhl2xn/video/upload/v1780240204/Thodu-Vaanam_btcktc.mp3",
        "https://res.cloudinary.com/dmnlhl2xn/video/upload/v1780239816/Enakenna_Yaarum_Illaye_eai0kr.mp3",
        "https://res.cloudinary.com/dmnlhl2xn/video/upload/v1780239803/Marappadhilai-Nenje-_Additional-Song_-MassTamilan.io_hoakqg.mp3",
        "https://res.cloudinary.com/dmnlhl2xn/video/upload/v1780240255/Yedho-Ondru-Ennai_swojgg.mp3",
        "https://res.cloudinary.com/dmnlhl2xn/video/upload/v1780240349/Venmegam-Pennaga_xc07ig.mp3",
        "https://res.cloudinary.com/dmnlhl2xn/video/upload/v1780240405/Adiyae-Azhagae_ucw7yg.mp3"
    ],
    3: [
        "https://res.cloudinary.com/dmnlhl2xn/video/upload/v1780295858/Macha-Kanni_taiimn.mp3",
        "https://res.cloudinary.com/dmnlhl2xn/video/upload/v1780296020/Machi-Open-The-Bottle_fmqngh.mp3",
        "https://res.cloudinary.com/dmnlhl2xn/video/upload/v1780296066/Mascara-Pottu_gvff7i.mp3",
        "https://res.cloudinary.com/dmnlhl2xn/video/upload/v1780296049/En-Chella-Peru-Apple_zbcvng.mp3",
        "https://res.cloudinary.com/dmnlhl2xn/video/upload/v1780296035/Daddy_Mummy_ntzlr7.mp3",
        "https://res.cloudinary.com/dmnlhl2xn/video/upload/v1780296075/En-Peru-Meenakumari-MassTamilan.io_gedqbc.mp3",
        "https://res.cloudinary.com/dmnlhl2xn/video/upload/v1780297890/Manogari_wf70zp.mp3",
        "https://res.cloudinary.com/dmnlhl2xn/video/upload/v1780298725/Piya_Piya_-_Vijay_Antony_Chorus_cs0w6g.mp3",
        "https://res.cloudinary.com/dmnlhl2xn/video/upload/v1780298934/Thanjavoor-Jillakkari_ruxdet.mp3",
        "https://res.cloudinary.com/dmnlhl2xn/video/upload/v1780299422/Dailamo-Dailamo_s1l83z.mp3",
        "https://res.cloudinary.com/dmnlhl2xn/video/upload/v1780298176/Heartukulla-Pachakuthiye-MassTamilan.com_oihbnb.mp3",
        "https://res.cloudinary.com/dmnlhl2xn/video/upload/v1780299315/Jingunamani_z4n2gf.mp3",
        "https://res.cloudinary.com/dmnlhl2xn/video/upload/v1780299010/Oru-Kuchi-Oru-Kulfi-MassTamilan.com_uxsafb.mp3",
        "https://res.cloudinary.com/dmnlhl2xn/video/upload/v1780298843/Vadi-Vadi-Nattukkattai_hxy79m.mp3",
        "https://res.cloudinary.com/dmnlhl2xn/video/upload/v1780299000/Achacho_sgoczw.mp3",
        "https://res.cloudinary.com/dmnlhl2xn/video/upload/v1780299184/Kaavaalaa-MassTamilan.dev_x2njtl.mp3",
        "https://res.cloudinary.com/dmnlhl2xn/video/upload/v1780299501/Kannu-Rendum_aaltkq.mp3",
        "https://res.cloudinary.com/dmnlhl2xn/video/upload/v1780299493/Chiku-Chiku-Boom_zceqxj.mp3",
        "https://res.cloudinary.com/seshancloudy/video/upload/v1780196687/Pavazha_Malli_hkdbcp.mp3",
        "meesaya murukku 2/Aura 10-10.mp3",
        "https://res.cloudinary.com/seshancloudy/video/upload/v1780133545/Karuppa_Kooda_Va_kknomo.mp3"
    ],  
    4: [
      "varisu/Jimikki-Ponnu-MassTamilan.dev.mp3",
      "varisu/Ranjithame-MassTamilan.dev (1).mp3",
      "varisu/Soul-Of-Varisu-MassTamilan.dev.mp3",
      "varisu/Thee-Thalapathy-MassTamilan.dev.mp3",
      "varisu/Vaa-Thalaivaa-MassTamilan.dev.mp3",
    ],
    5: [
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
    6: [
      "https://res.cloudinary.com/seshancloudy/video/upload/v1778678628/Chella-Magale-MassTamilan.dev_qgjxyf.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1778678616/Oru-Pere-Varalaaru-MassTamilan.dev_yys7mt.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1778678616/Raavana-Mavandaa-MassTamilan.dev_t8o665.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1778678617/Thalapathy_Kacheri_ymxdbx.mp3",
    ],
    7: [
      "https://res.cloudinary.com/seshancloudy/video/upload/v1778677796/Chinna_Chinna_Kangal_lhwhxb.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1778677816/Matta_dysr8z.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1778677799/Spark_fyxqn8.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1778677857/Whistle_Podu_dykdzh.mp3",
    ],
    8: [
      "akkaplaylist/Kallaliye Kallaliye.mp3",
      "akkaplaylist/Maalai-Mangum-Neram.mp3",
      "akkaplaylist/Pirai-Thedum.mp3",
      "akkaplaylist/En Jeevan(KoshalWorld.Com).mp3",
      "akkaplaylist/Kanna-Veesi-Kanna-Veesi-MassTamilan.io.mp3",
      "akkaplaylist/Varaya Thozhi.mp3",
    ],
  },

  songlistpicture: {
    1: [
      "https://www.masstamilan.dev/w/aasa-kooda-indie-tamil-2024.webp",
      "https://www.masstamilan.dev/w/pavazha-malli-indie-tamil-2026.webp",
      "https://www.masstamilan.dev/w/karuppu-tamil-2026.webp",
      "https://www.masstamilan.dev/w/katchi-sera-indie-tamil-2024.webp",
      "https://www.masstamilan.dev/w/sithira-puthiri-indie-tamil-2025.webp",
      "https://www.masstamilan.dev/w/vizhi-veekura-indie-tamil-2025.webp",
      "https://www.masstamilan.dev/w/dude-tamil-2025.webp",
      "https://www.masstamilan.dev/w/dude-tamil-2025.webp",
      "https://www.masstamilan.dev/w/dude-tamil-2025.webp",
      "https://www.masstamilan.dev/w/dude-tamil-2025.webp",
      "https://www.masstamilan.dev/w/dude-tamil-2025.webp",
    ],
    2: [

    ],
    3: [

    ],
    4: Array(6).fill("https://www.masstamilan.dev/w/varisu-tamil-2023.webp"),
    5: Array(15).fill("https://www.masstamilan.dev/w/leo-tamil-2023.webp"),
    6: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQXIk7h9nS9DsamRn_UWsukg4Pf7IlncK5cQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9784HdLZ52d8Q75xLrLLFIZm6upP_-ZJ98A&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBqZHFpcQ6a4CqKn4OjWK0IQ9oMauquxlXQQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOx_Icl1S5PSzAuHwD1U-zoPcUTN3QorH8qQ&s",
    ],
    7: Array(5).fill(
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbL8VaAb2GLq38_SAAYRy-dcir-hBjk4fomA&s",
    ),
    8: [
      "https://www.masstamilan.dev/w/maaman-tamil-2025.webp",
      "https://www.masstamilan.dev/w/rowthiram-2011.webp",
      "https://www.masstamilan.dev/w/mayakkam-enna-2011.webp",
      "https://koshalworld.com/siteuploads/thumb/sft74/36719_4.webp",
      "https://www.masstamilan.dev/w/kadhal-ondru-kanden-short-film-tamil-2020.webp",
    ],
  },
};

// ── PLAYLIST GRID METADATA ────────────────────────────────────────────────────
var playlists = {
  1: {
    title :'Sai Abhyankkar',
    movieKey: 1,
    imageUrl: "https://www.masstamilan.dev/w/pavazha-malli-indie-tamil-2026.webp"
  },
  2: {
    title : "Drugs",
    movieKey: 2,
    imageUrl: "",
  },
  3: {
    title : "Vibe Uhaa",
    movieKey: 3,
    imageUrl: ""
  },
  4: {
    title: "Kadhal Veesum",
    movieKey: 4,
    imageUrl: availableMovies.songlistpicture[1][0],
  },
  5: {
    title: "Thalapathy Hits",
    movieKey: 5,
    imageUrl: availableMovies.songlistpicture[2][0],
  },
  6: {
    title: "Anirudh's Best",
    movieKey: 6,
    imageUrl: availableMovies.songlistpicture[3][0],
  },
  7: {
    title: "Top Tamil Songs",
    movieKey: 7,
    imageUrl: availableMovies.songlistpicture[4][0],
  },
  8: {
    title: "V Songs",
    movieKey: 8,
    imageUrl: availableMovies.songlistpicture[5][0],
  },
  9: {
    title: "Romantic Tamil Songs",
    movieKey: 9,
    imageUrl: availableMovies.songlistpicture[3][0],
  },
  // 7: { title: "Dance Hits", movieKey: null, imageUrl: "" },
  // 8: { title: "Melody Mix", movieKey: null, imageUrl: "" },
  // 9: { title: "Party Anthems", movieKey: null, imageUrl: "" },
  // 10: { title: "Sad Tamil Songs", movieKey: null, imageUrl: "" },
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
        <img src="${playlists[id].imageUrl || ""}" alt="${playlists[id].title}" onerror="this.style.display='none'" />
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
            <h5 style="font-size:10.5px;font-weight:600;color:#ffffff;">${songs[j]}</h5>
            <p style="font-size:8px;color:#b3b3b3;">${title}</p>
          </div>
          <button class="gobtn" onclick="event.stopPropagation(); playLibrarySong(${movieKey}, ${j})">▶</button>
        </div>`;
    }
  }

  playlistContainer.innerHTML = `
    <button id="back-buttoninlib" onclick="displayPlaylist()">Back</button>
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
  playBtn.innerHTML = "<p style='color:#000;'>||</p>";
}



// ── DISCLAIMER MODAL FUNCTIONS ───────────────────────────────────────────────

function showDisclaimer() {
    const modal = document.getElementById("disclaimerModal");
    if (modal) {
        modal.style.display = "flex";
        document.body.style.overflow = "hidden"; // Prevent background scrolling
    }
}

function closeDisclaimer() {
    const modal = document.getElementById("disclaimerModal");
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = ""; // Restore scrolling
    }
}

function acknowledgeDisclaimer() {
    closeDisclaimer();
    // Optional: Store in localStorage that user has seen disclaimer
    localStorage.setItem("disclaimer_acknowledged", "true");
}

// Close modal when clicking outside the content
window.onclick = function(event) {
    const modal = document.getElementById("disclaimerModal");
    if (event.target === modal) {
        closeDisclaimer();
    }
}

// Attach click event to logo when DOM is ready
document.addEventListener("DOMContentLoaded", function() {
    const logo = document.querySelector(".logo");
    if (logo) {
        logo.addEventListener("click", function(e) {
            e.preventDefault();
            showDisclaimer();
        });
        logo.style.cursor = "pointer";
    }
});
