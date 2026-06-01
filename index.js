const musicList = document.getElementById("music-list");

const availableMovies = {
  title: {
    1: "Jananayagan",
    2: "Leo",
    3: "Varisu",
    4: "The Greatest of All Time",
    5: "Jeans",
    6: "Karuppu",
    7: "Love Insurance Kompany Lik",
    8: "Meesaya Murukku 2",
    9: "Dude",
    10: "Youth",
    11: "3",
    12: "Kadaram Kondan"
  },
  artist: {
    1: "Anirudh Ravichander and Team",
    2: "Anirudh Ravichander and Team",
    3: "Thaman S and Team",
    4: "Yuvan Shankar Raja and Team",
    5: "A.R.Rahman and Team",
    6: "Sai Abhyankkar and Team",
    7: "Anirudh Ravichander and Team",
    8: "Hiphop Tamizha and Team",
    9: "Sai Abhyankkar and Team",
    10: "G.V.Prakash Kumar and Team",
    11: "Anirudh Ravichander and Team",
    12: "Ghibran Vaibodha and Team"
  },
  icon: {
    1: "icon/jananayagan.jpg",
    2: "https://www.masstamilan.dev/w/leo-tamil-2023.webp",
    3: "https://www.masstamilan.dev/w/varisu-tamil-2023.webp",
    4: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbL8VaAb2GLq38_SAAYRy-dcir-hBjk4fomA&s",
    5: "https://www.masstamilan.dev/w/jeans-1998.webp",
    6: "https://www.masstamilan.dev/w/karuppu-tamil-2026.webp",
    7: "https://www.masstamilan.dev/w/love-insurance-kompany-lik-tamil-2026.webp",
    8: "https://www.masstamilan.dev/w/meesaya-murukku-2-tamil-2026.webp",
    9: "https://www.masstamilan.dev/w/dude-tamil-2025.webp",
    10: "https://www.masstamilan.dev/w/youth-tamil-2026.webp",
    11: "https://www.masstamilan.dev/w/3-moonu-tamil-2012.webp",
    12: "https://www.masstamilan.dev/w/kadaram-kondan-2019.webp"
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
    5: [
      "https://www.masstamilan.dev/w/jeans-1998.webp",
      "https://www.masstamilan.dev/w/jeans-1998.webp",
      "https://www.masstamilan.dev/w/jeans-1998.webp",
      "https://www.masstamilan.dev/w/jeans-1998.webp",
      "https://www.masstamilan.dev/w/jeans-1998.webp",
      "https://www.masstamilan.dev/w/jeans-1998.webp",
    ],
    6: [
      "https://www.masstamilan.dev/w/karuppu-tamil-2026.webp",
      "https://www.masstamilan.dev/w/karuppu-tamil-2026.webp ",
      "https://www.masstamilan.dev/w/karuppu-tamil-2026.webp ",
      "https://www.masstamilan.dev/w/karuppu-tamil-2026.webp ",
      "https://www.masstamilan.dev/w/karuppu-tamil-2026.webp ",
      "https://www.masstamilan.dev/w/karuppu-tamil-2026.webp ",
      "https://www.masstamilan.dev/w/karuppu-tamil-2026.webp ",
      "https://www.masstamilan.dev/w/karuppu-tamil-2026.webp ",
      "https://www.masstamilan.dev/w/karuppu-tamil-2026.webp ",
    ],
    7: [
      "https://www.masstamilan.dev/w/love-insurance-kompany-lik-tamil-2026.webp",
      "https://www.masstamilan.dev/w/love-insurance-kompany-lik-tamil-2026.webp",
      "https://www.masstamilan.dev/w/love-insurance-kompany-lik-tamil-2026.webp",
      "https://www.masstamilan.dev/w/love-insurance-kompany-lik-tamil-2026.webp",
      "https://www.masstamilan.dev/w/love-insurance-kompany-lik-tamil-2026.webp",
      "https://www.masstamilan.dev/w/love-insurance-kompany-lik-tamil-2026.webp",
    ],
    8: [
      "https://www.masstamilan.dev/w/meesaya-murukku-2-tamil-2026.webp",
      "https://www.masstamilan.dev/w/meesaya-murukku-2-tamil-2026.webp",
      "https://www.masstamilan.dev/w/meesaya-murukku-2-tamil-2026.webp",
    ],
    9: [
      "https://www.masstamilan.dev/w/dude-tamil-2025.webp",
      "https://www.masstamilan.dev/w/dude-tamil-2025.webp",
      "https://www.masstamilan.dev/w/dude-tamil-2025.webp",
      "https://www.masstamilan.dev/w/dude-tamil-2025.webp",
      "https://www.masstamilan.dev/w/dude-tamil-2025.webp",
      "https://www.masstamilan.dev/w/dude-tamil-2025.webp",
    ],
    10: [
      "https://www.masstamilan.dev/w/youth-tamil-2026.webp",
      "https://www.masstamilan.dev/w/youth-tamil-2026.webp",
      "https://www.masstamilan.dev/w/youth-tamil-2026.webp",
      "https://www.masstamilan.dev/w/youth-tamil-2026.webp",
      "https://www.masstamilan.dev/w/youth-tamil-2026.webp",
      "https://www.masstamilan.dev/w/youth-tamil-2026.webp",
      "https://www.masstamilan.dev/w/youth-tamil-2026.webp",
      "https://www.masstamilan.dev/w/youth-tamil-2026.webp",
    ],
    11: [
      "https://www.masstamilan.dev/w/3-moonu-tamil-2012.webp",
      "https://www.masstamilan.dev/w/3-moonu-tamil-2012.webp",
      "https://www.masstamilan.dev/w/3-moonu-tamil-2012.webp",
      "https://www.masstamilan.dev/w/3-moonu-tamil-2012.webp",
      "https://www.masstamilan.dev/w/3-moonu-tamil-2012.webp",
      "https://www.masstamilan.dev/w/3-moonu-tamil-2012.webp",
      "https://www.masstamilan.dev/w/3-moonu-tamil-2012.webp",
    ],
    12: [
       "https://www.masstamilan.dev/w/kadaram-kondan-2019.webp",
       "https://www.masstamilan.dev/w/kadaram-kondan-2019.webp",
       "https://www.masstamilan.dev/w/kadaram-kondan-2019.webp"
    ]
  },
  songsList: {
    1: [
      "https://res.cloudinary.com/seshancloudy/video/upload/v1778678628/Chella-Magale-MassTamilan.dev_qgjxyf.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1778678616/Oru-Pere-Varalaaru-MassTamilan.dev_yys7mt.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1778678616/Raavana-Mavandaa-MassTamilan.dev_t8o665.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1778678617/Thalapathy_Kacheri_ymxdbx.mp3",
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
      "varisu/Vaa-Thalaivaa-MassTamilan.dev.mp3",
    ],
    4: [
      "https://res.cloudinary.com/seshancloudy/video/upload/v1778677796/Chinna_Chinna_Kangal_lhwhxb.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1778677816/Matta_dysr8z.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1778677799/Spark_fyxqn8.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1778677857/Whistle_Podu_dykdzh.mp3",
    ],
    5: [
      "https://res.cloudinary.com/seshancloudy/video/upload/v1778678920/Anbe-Anbe_z5jtdv.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1778679063/Columbus-Columbu_cflsmy.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1778678940/Ennake-Ennaka_e1tqne.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1778678979/Kannodu-Kaanberallam_wctkai.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1778679083/Poovukkul_l4b3cj.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1778679099/Varaya-Thozhi_vvdoij.mp3",
    ],
    6: [
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780133371/Naanga_Naalu_Peru_mt1hys.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780133391/God_Mode_Begins_vri2ei.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780133432/Verappa_ftgnc1.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780133277/Aathi_Raasathi_ha3nhs.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780133493/Athu_Thalore_uvmeob.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780133545/Karuppa_Kooda_Va_kknomo.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780133574/Raathu_Raasan_roppod.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780133611/Verappa_-_Extended_fq6fen.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780133640/God_Mode_rqe5xs.mp3",
    ],
    7: [
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780138574/Dheema_caqm24.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780133959/Vibe_Vaasey_zstbrp.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780133783/Pattuma_tbcr1i.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780133886/Adaavadi_gn6ete.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780138800/Pookattum_kjprdl.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780138892/Enakenna_Yaarum_Illaye_zpbfof.mp3",
    ],
    8: [
      "meesaya murukku 2/Pappali Pazhamey.mp3",
      "meesaya murukku 2/Aura 10-10.mp3",
      "meesaya murukku 2/Goindhamma.mp3",
    ],
    9: [
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780153988/Oorum_Blood_kkxuwk.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780153991/Singari_jddjzo.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780153991/Kannukulla_li5i45.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780153985/Yumabaibesa_n5dwdj.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780153994/Nallaru_Po_alkjpp.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780153981/Blud_Is_On_His_Way_etgs16.mp3",
    ],
    10: [
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780154936/Mutta_Kalakki_w1ql1z.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780154932/Aasa_Pulla_htecgn.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780154936/Paranthene_Penne_dsl4fv.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780154933/Loveah_Sollitalea_zpoksp.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780154932/Alapuzha_Sandhayila_keo87b.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780154935/Thanga_Magan_uc2zls.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780154935/Ponmaaney_upoewt.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780154934/Poga_Poga_r9yj79.mp3",
    ],
    11: [
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780155606/Idhazhin_Oram_The_Innocence_of_Love_za3yt4.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780155631/Kannazhaga_The_Kiss_of_Love_qgffcm.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780155755/Po_Nee_Po_The_Pain_of_Love_lx71ny.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780155752/Po_Nee_Po_Remix_-_The_Scream_of_Love_xlintm.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780155755/Why_This_Kolaveri_Di_The_Soup_of_Love_xlgi0r.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780155750/Nee_Paartha_Vizhigal_The_Touch_of_Love_h4ws4w.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780155550/Come_on_Girls_The_Celebration_of_Love_xlvwlg.mp3",
    ],
    12: [
        "https://res.cloudinary.com/dmnlhl2xn/video/upload/v1780236035/Thaarame-Thaarame-MassTamilan.io_l3cjar.mp3",
        "https://res.cloudinary.com/dmnlhl2xn/video/upload/v1780236035/Theesudar-Kuniyuma-MassTamilan.io_hbnqp0.mp3",
        "https://res.cloudinary.com/dmnlhl2xn/video/upload/v1780235917/Kadaram-Kondan-MassTamilan.io_eznet7.mp3"
    ]
  },
  songKey: {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    11: 11,
    12: 12,
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
    3: [
      "Celebration-Of-Varisu",
      "Jimikki-Ponnu",
      "Ranjithame",
      "Soul-Of-Varisu",
      "Thee-Thalapathy",
      "Vaa-Thalaivaa",
    ],
    4: ["Chinna Chinna Kangal", "Matta", "Spark", "Whistle Podu"],
    5: [
      "Anbe Anbe",
      "Columbus Columbu",
      "Ennake Ennaka",
      "Kannodu Kaanberallam",
      "Poovukkul",
      "Varaya Thozhi",
    ],
    6: [
      "Naanga Naalu peru",
      "God Mode Begins",
      "Verappa",
      "Aathi Raasathi",
      "Athu Thalore",
      "Karuppa Kooda Va",
      "Raathu Raasan",
      "Verappa-Extended",
      "God Mode",
    ],
    7: [
      "Dheema",
      "Vibe Vaasey",
      "Pattuma",
      "Adaavadi",
      "Pookattum",
      "Enakenna Yaarum Illaye",
    ],
    8: ["Pappali Pazhamey", "Aura 10/10", "Goindhamma"],
    9: [
      "Oorum Blood",
      "Singari",
      "Kannukulla",
      "Yumabaibesa",
      "Nallaru Po",
      "Blud is on his Way",
    ],
    10: [
      "Mutta Kalakki",
      "Aasa Pulla",
      "Paranthene Penne",
      "Loveah Sollitalea",
      "Alapuzha Sandhayila",
      "Thanga Magan",
      "Ponmaaney",
      "Poga Poga",
    ],
    11: [
      "Idhazhin Oram",
      "Kannazhaga",
      "Po Nee Po",
      "Po Nee PO (Remix)",
      "Why this Kolaveri Di",
      "Ne Paartha Vizhigal",
      "Come on Girls",
    ],
    12: [
        "Thaarame Thaarame",
        "Theesudar Kuniyuma",
        "Kadaram Kondan"
    ]
  },
};

// ── Render all movie cards ──────────────────────────────────────────────────
function displayMovies() {
  musicList.innerHTML =
    '<h5 class="noteh6" style="text-align: center ;">Availabe Movies List<br>Tap the movies to <span class="logo">pLaY</span> the Songs</h5>';

  for (let i = 1; i <= Object.keys(availableMovies.title).length; i++) {
    musicList.innerHTML += `
      <div class="music-item" onclick="songsavailable(${i})">
          <img src="${availableMovies.icon[i]}" alt="${availableMovies.title[i]}">
          <div class="music-info">
              <h5 style="font-size: 10.5px;">${availableMovies.title[i]}</h5>
              <p style="font-size: 8px; color: #b3b3b3;">
                ${availableMovies.artist[i]}
              </p>
          </div>
          <button onclick="songsavailable(${i})" class="gobtn">▶</button><br>
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
<button id="back-btn" onclick="displayMovies()">Back</button>
`;

  for (let j = 0; j < availableMovies.songs[key].length; j++) {
    const content = `
        <div class="music-item" onclick="playMusic(${key}, ${j})">
            <img src="${availableMovies.songlistpicture[key][j]}" alt="${availableMovies.title[i]}">
            <div class="music-info">
                <h5 style="font-size: 10.5px;">${availableMovies.songs[key][j]}</h5>
                <p style="font-size: 8px; color: #b3b3b3; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; padding-top: 3px;">${availableMovies.artist[key]}</p>
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
