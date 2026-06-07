const musicList = document.getElementById("music-list");

var indexMovies = {
  title: {
    1: "Minnale",
    2: "Jananayagan",
    3: "Leo",
    4: "Varisu",
    5: "The Greatest of All Time",
    6: "Jeans",
    7: "Karuppu",
    8: "Love Insurance Kompany Lik",
    9: "Meesaya Murukku 2",
    10: "Dude",
    11: "Youth",
    12: "3",
    13: "Kadaram Kondan",
    14: "Sivakasi",
  },
  artist: {
    1: "Harrish Jayaraj and Team",
    2: "Anirudh Ravichander and Team",
    3: "Anirudh Ravichander and Team",
    4: "Thaman S and Team",
    5: "Yuvan Shankar Raja and Team",
    6: "A.R.Rahman and Team",
    7: "Sai Abhyankkar and Team",
    8: "Anirudh Ravichander and Team",
    9: "Hiphop Tamizha and Team",
    10: "Sai Abhyankkar and Team",
    11: "G.V.Prakash Kumar and Team",
    12: "Anirudh Ravichander and Team",
    13: "Ghibran Vaibodha and Team",
    14: "Srikanth Deva and Team",
  },
  icon: {
    1: "https://www.masstamilan.dev/w/minnale-tamil-2001.webp",
    2: "icon/jananayagan.jpg",
    3: "https://www.masstamilan.dev/w/leo-tamil-2023.webp",
    4: "https://www.masstamilan.dev/w/varisu-tamil-2023.webp",
    5: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbL8VaAb2GLq38_SAAYRy-dcir-hBjk4fomA&s",
    6: "https://www.masstamilan.dev/w/jeans-1998.webp",
    7: "https://www.masstamilan.dev/w/karuppu-tamil-2026.webp",
    8: "https://www.masstamilan.dev/w/love-insurance-kompany-lik-tamil-2026.webp",
    9: "https://www.masstamilan.dev/w/meesaya-murukku-2-tamil-2026.webp",
    10: "https://www.masstamilan.dev/w/dude-tamil-2025.webp",
    11: "https://www.masstamilan.dev/w/youth-tamil-2026.webp",
    12: "https://www.masstamilan.dev/w/3-moonu-tamil-2012.webp",
    13: "https://www.masstamilan.dev/w/kadaram-kondan-2019.webp",
    14: "https://www.masstamilan.dev/w/sivakasi-2005.webp",
  },
  songlistpicture: {
    1: [
      "https://www.masstamilan.dev/w/minnale-tamil-2001.webp",
      "https://www.masstamilan.dev/w/minnale-tamil-2001.webp",
      "https://www.masstamilan.dev/w/minnale-tamil-2001.webp",
      "https://www.masstamilan.dev/w/minnale-tamil-2001.webp",
      "https://www.masstamilan.dev/w/minnale-tamil-2001.webp"
    ],
    2: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQXIk7h9nS9DsamRn_UWsukg4Pf7IlncK5cQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9784HdLZ52d8Q75xLrLLFIZm6upP_-ZJ98A&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBqZHFpcQ6a4CqKn4OjWK0IQ9oMauquxlXQQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOx_Icl1S5PSzAuHwD1U-zoPcUTN3QorH8qQ&s",
    ],
    3: [
      "https://www.masstamilan.dev/w/leo-tamil-2023.webp",
      "https://www.masstamilan.dev/w/leo-tamil-2023.webp",
      "https://www.masstamilan.dev/w/leo-tamil-2023.webp",
      "https://www.masstamilan.dev/w/leo-tamil-2023.webp",
      "https://www.masstamilan.dev/w/leo-tamil-2023.webp",
    ],
    4: [
      "https://www.masstamilan.dev/w/varisu-tamil-2023.webp",
      "https://www.masstamilan.dev/w/varisu-tamil-2023.webp",
      "https://www.masstamilan.dev/w/varisu-tamil-2023.webp",
      "https://www.masstamilan.dev/w/varisu-tamil-2023.webp",
      "https://www.masstamilan.dev/w/varisu-tamil-2023.webp",
      "https://www.masstamilan.dev/w/varisu-tamil-2023.webp",
    ],
    5: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbL8VaAb2GLq38_SAAYRy-dcir-hBjk4fomA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbL8VaAb2GLq38_SAAYRy-dcir-hBjk4fomA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbL8VaAb2GLq38_SAAYRy-dcir-hBjk4fomA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbL8VaAb2GLq38_SAAYRy-dcir-hBjk4fomA&s",
    ],
    6: [
      "https://www.masstamilan.dev/w/jeans-1998.webp",
      "https://www.masstamilan.dev/w/jeans-1998.webp",
      "https://www.masstamilan.dev/w/jeans-1998.webp",
      "https://www.masstamilan.dev/w/jeans-1998.webp",
      "https://www.masstamilan.dev/w/jeans-1998.webp",
      "https://www.masstamilan.dev/w/jeans-1998.webp",
    ],
    7: [
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
    8: [
      "https://www.masstamilan.dev/w/love-insurance-kompany-lik-tamil-2026.webp",
      "https://www.masstamilan.dev/w/love-insurance-kompany-lik-tamil-2026.webp",
      "https://www.masstamilan.dev/w/love-insurance-kompany-lik-tamil-2026.webp",
      "https://www.masstamilan.dev/w/love-insurance-kompany-lik-tamil-2026.webp",
      "https://www.masstamilan.dev/w/love-insurance-kompany-lik-tamil-2026.webp",
      "https://www.masstamilan.dev/w/love-insurance-kompany-lik-tamil-2026.webp",
    ],
    9: [
      "https://www.masstamilan.dev/w/meesaya-murukku-2-tamil-2026.webp",
      "https://www.masstamilan.dev/w/meesaya-murukku-2-tamil-2026.webp",
      "https://www.masstamilan.dev/w/meesaya-murukku-2-tamil-2026.webp",
    ],
    10: [
      "https://www.masstamilan.dev/w/dude-tamil-2025.webp",
      "https://www.masstamilan.dev/w/dude-tamil-2025.webp",
      "https://www.masstamilan.dev/w/dude-tamil-2025.webp",
      "https://www.masstamilan.dev/w/dude-tamil-2025.webp",
      "https://www.masstamilan.dev/w/dude-tamil-2025.webp",
      "https://www.masstamilan.dev/w/dude-tamil-2025.webp",
    ],
    11: [
      "https://www.masstamilan.dev/w/youth-tamil-2026.webp",
      "https://www.masstamilan.dev/w/youth-tamil-2026.webp",
      "https://www.masstamilan.dev/w/youth-tamil-2026.webp",
      "https://www.masstamilan.dev/w/youth-tamil-2026.webp",
      "https://www.masstamilan.dev/w/youth-tamil-2026.webp",
      "https://www.masstamilan.dev/w/youth-tamil-2026.webp",
      "https://www.masstamilan.dev/w/youth-tamil-2026.webp",
      "https://www.masstamilan.dev/w/youth-tamil-2026.webp",
    ],
    12: [
      "https://www.masstamilan.dev/w/3-moonu-tamil-2012.webp",
      "https://www.masstamilan.dev/w/3-moonu-tamil-2012.webp",
      "https://www.masstamilan.dev/w/3-moonu-tamil-2012.webp",
      "https://www.masstamilan.dev/w/3-moonu-tamil-2012.webp",
      "https://www.masstamilan.dev/w/3-moonu-tamil-2012.webp",
      "https://www.masstamilan.dev/w/3-moonu-tamil-2012.webp",
      "https://www.masstamilan.dev/w/3-moonu-tamil-2012.webp",
    ],
    13: [
       "https://www.masstamilan.dev/w/kadaram-kondan-2019.webp",
       "https://www.masstamilan.dev/w/kadaram-kondan-2019.webp",
       "https://www.masstamilan.dev/w/kadaram-kondan-2019.webp"
    ],
    14: [
      "https://www.masstamilan.dev/w/sivakasi-2005.webp",
      "https://www.masstamilan.dev/w/sivakasi-2005.webp",
      "https://www.masstamilan.dev/w/sivakasi-2005.webp",
      "https://www.masstamilan.dev/w/sivakasi-2005.webp",
      "https://www.masstamilan.dev/w/sivakasi-2005.webp",
      "https://www.masstamilan.dev/w/sivakasi-2005.webp"
    ]
  },
  songsList: {
    1: [
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780739144/Vaseegara_qdunim.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780739145/Azhagiya_Theeye_dyqlwd.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780739134/Venmathiye_o5rec5.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780739144/Oh_Mama_Mama_cpw4i5.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780739134/Verenna_Verenna_Ivan_Yaro_gxlbff.mp3",

    ],
    2: [
      "https://res.cloudinary.com/seshancloudy/video/upload/v1778678628/Chella-Magale-MassTamilan.dev_qgjxyf.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1778678616/Oru-Pere-Varalaaru-MassTamilan.dev_yys7mt.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1778678616/Raavana-Mavandaa-MassTamilan.dev_t8o665.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1778678617/Thalapathy_Kacheri_ymxdbx.mp3",
    ],
    3: [
      "leo/Naa-Ready-MassTamilan.dev.mp3",
      "leo/Badass-MassTamilan.dev.mp3",
      "leo/Bloody-Sweet-MassTamilan.dev.mp3",
      "leo/Lokiverse-2.0-MassTamilan.dev.mp3",
      "leo/Glimpse-of-Harold-Das-MassTamilan.dev.mp3",
    ],
    4: [
      "varisu/Celebration-Of-Varisu-MassTamilan.dev.mp3",
      "varisu/Jimikki-Ponnu-MassTamilan.dev.mp3",
      "varisu/Ranjithame-MassTamilan.dev (1).mp3",
      "varisu/Soul-Of-Varisu-MassTamilan.dev.mp3",
      "varisu/Thee-Thalapathy-MassTamilan.dev.mp3",
      "varisu/Vaa-Thalaivaa-MassTamilan.dev.mp3",
    ],
    5: [
      "https://res.cloudinary.com/seshancloudy/video/upload/v1778677796/Chinna_Chinna_Kangal_lhwhxb.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1778677816/Matta_dysr8z.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1778677799/Spark_fyxqn8.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1778677857/Whistle_Podu_dykdzh.mp3",
    ],
    6: [
      "https://res.cloudinary.com/seshancloudy/video/upload/v1778678920/Anbe-Anbe_z5jtdv.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1778679063/Columbus-Columbu_cflsmy.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1778678940/Ennake-Ennaka_e1tqne.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1778678979/Kannodu-Kaanberallam_wctkai.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1778679083/Poovukkul_l4b3cj.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1778679099/Varaya-Thozhi_vvdoij.mp3",
    ],
    7: [
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
    8: [
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780138574/Dheema_caqm24.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780133959/Vibe_Vaasey_zstbrp.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780133783/Pattuma_tbcr1i.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780133886/Adaavadi_gn6ete.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780138800/Pookattum_kjprdl.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780138892/Enakenna_Yaarum_Illaye_zpbfof.mp3",
    ],
    9: [
      "meesaya murukku 2/Pappali Pazhamey.mp3",
      "meesaya murukku 2/Aura 10-10.mp3",
      "meesaya murukku 2/Goindhamma.mp3",
    ],
    10: [
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780153988/Oorum_Blood_kkxuwk.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780153991/Singari_jddjzo.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780153991/Kannukulla_li5i45.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780153985/Yumabaibesa_n5dwdj.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780153994/Nallaru_Po_alkjpp.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780153981/Blud_Is_On_His_Way_etgs16.mp3",
    ],
    11: [
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780154936/Mutta_Kalakki_w1ql1z.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780154932/Aasa_Pulla_htecgn.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780154936/Paranthene_Penne_dsl4fv.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780154933/Loveah_Sollitalea_zpoksp.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780154932/Alapuzha_Sandhayila_keo87b.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780154935/Thanga_Magan_uc2zls.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780154935/Ponmaaney_upoewt.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780154934/Poga_Poga_r9yj79.mp3",
    ],
    12: [
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780155606/Idhazhin_Oram_The_Innocence_of_Love_za3yt4.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780155631/Kannazhaga_The_Kiss_of_Love_qgffcm.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780155755/Po_Nee_Po_The_Pain_of_Love_lx71ny.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780155752/Po_Nee_Po_Remix_-_The_Scream_of_Love_xlintm.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780155755/Why_This_Kolaveri_Di_The_Soup_of_Love_xlgi0r.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780155750/Nee_Paartha_Vizhigal_The_Touch_of_Love_h4ws4w.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780155550/Come_on_Girls_The_Celebration_of_Love_xlvwlg.mp3",
    ],
    13: [
        "https://res.cloudinary.com/dmnlhl2xn/video/upload/v1780236035/Thaarame-Thaarame-MassTamilan.io_l3cjar.mp3",
        "https://res.cloudinary.com/dmnlhl2xn/video/upload/v1780236035/Theesudar-Kuniyuma-MassTamilan.io_hbnqp0.mp3",
        "https://res.cloudinary.com/dmnlhl2xn/video/upload/v1780235917/Kadaram-Kondan-MassTamilan.io_eznet7.mp3",
        ""
    ],
    14:[
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780680108/Kodambakkam-Area_qfnir7.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780680107/Deepavali-Deepavali_rqd4oz.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780680105/Ada-Ennatha-Solvenungo_ijrvkd.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780680105/Dheivathukke-Maaruvesama_n0sd9b.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780680108/Idhu-Enna-Idhu-Enna_rij16n.mp3",
      "https://res.cloudinary.com/seshancloudy/video/upload/v1780680108/Vaada-Vaada_kqyrfx.mp3"
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
    13: 13,
    14: 14,
  },
  songs: {
    1: [
      "Vaseegara",
      "Azhagiya Theeye",
      "Venmathiye",
      "Oh Mama Mama",
      "Verenna Verenna (Ivan Yaro)",
    ],
    2: [
      "Chella Magale",
      "Oru Pere Varalaaru",
      "Raavana Mavandaa",
      "Thalapathy Kacheri",
    ],
    3: [
      "Naa-Ready",
      "Badass",
      "Bloody-Sweet",
      "Lokiverse-2.0",
      "Glimpse-of-Harold-Das",
    ],
    4: [
      "Celebration-Of-Varisu",
      "Jimikki-Ponnu",
      "Ranjithame",
      "Soul-Of-Varisu",
      "Thee-Thalapathy",
      "Vaa-Thalaivaa",
    ],
    5: ["Chinna Chinna Kangal", "Matta", "Spark", "Whistle Podu"],
    6: [
      "Anbe Anbe",
      "Columbus Columbu",
      "Ennake Ennaka",
      "Kannodu Kaanberallam",
      "Poovukkul",
      "Varaya Thozhi",
    ],
    7: [
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
    8: [
      "Dheema",
      "Vibe Vaasey",
      "Pattuma",
      "Adaavadi",
      "Pookattum",
      "Enakenna Yaarum Illaye",
    ],
    9: ["Pappali Pazhamey", "Aura 10/10", "Goindhamma"],
    10: [
      "Oorum Blood",
      "Singari",
      "Kannukulla",
      "Yumabaibesa",
      "Nallaru Po",
      "Blud is on his Way",
    ],
    11: [
      "Mutta Kalakki",
      "Aasa Pulla",
      "Paranthene Penne",
      "Loveah Sollitalea",
      "Alapuzha Sandhayila",
      "Thanga Magan",
      "Ponmaaney",
      "Poga Poga",
    ],
    12: [
      "Idhazhin Oram",
      "Kannazhaga",
      "Po Nee Po",
      "Po Nee PO (Remix)",
      "Why this Kolaveri Di",
      "Ne Paartha Vizhigal",
      "Come on Girls",
    ],
    13: [
        "Thaarame Thaarame",
        "Theesudar Kuniyuma",
        "Kadaram Kondan",  
    ],
    14: [
      "Kodambakkam Area",
      "Deepavali Deepavali",
      "Ada Ennatha Solvenungo",
      "Dheivathukke Maaruvesama",
      "Idhu Enna Idhu Enna",
      "Vaada Vaada"
    ]
  },
};

// ── Render all movie cards ──────────────────────────────────────────────────
function displayMovies() {
  musicList.innerHTML =
    '<h5 class="noteh6" style="text-align: center ;">Availabe Movies List<br>Tap the movies to <span class="logo">pLaY</span> the Songs</h5>';

  for (let i = 1; i <= Object.keys(indexMovies.title).length; i++) {
    musicList.innerHTML += `
      <div class="music-item" onclick="songsavailable(${i})">
          <img src="${indexMovies.icon[i]}" alt="${indexMovies.title[i]}">
          <div class="music-info">
              <h5 style="font-size: 10.5px;">${indexMovies.title[i]}</h5>
              <p style="font-size: 8px; color: #b3b3b3;">
                ${indexMovies.artist[i]}
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
  const key = indexMovies.songKey[i];
  const title = indexMovies.title[i];
  const artist = indexMovies.artist[i];
  const icon = indexMovies.icon[i];
  const list = indexMovies.songs[key];
  musicList.innerHTML = "";
  musicList.innerHTML += `
<button id="back-btn" onclick="displayMovies()">Back</button>
`;

  for (let j = 0; j < indexMovies.songs[key].length; j++) {
    const content = `
        <div class="music-item" onclick="playMusic(${key}, ${j})">
            <img src="${indexMovies.songlistpicture[key][j]}" alt="${indexMovies.title[i]}">
            <div class="music-info">
                <h5 style="font-size: 10.5px;">${indexMovies.songs[key][j]}</h5>
                <p style="font-size: 8px; color: #b3b3b3; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; padding-top: 3px;">${indexMovies.artist[key]}</p>
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

  const songPath = indexMovies.songsList[movieKey][songIndex];

  const songName = indexMovies.songs[movieKey][songIndex];
  console.log(songPath);

  audio.src = songPath;

  audio.play();

  playBtn.innerHTML = "<p style='font-size: 15px; color: #000;'>||</p>";
  document.getElementById("audio-player").style.display = "block";
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

// Close modals when clicking outside the content
window.onclick = function(event) {
    const disclaimerModal = document.getElementById("disclaimerModal");
    if (event.target === disclaimerModal) {
        closeDisclaimer();
    }
    
    const timerModal = document.getElementById("timerModal");
    if (event.target === timerModal) {
        closeTimerModal();
    }
    // 👇 PASTE location 3 RIGHT HERE, before the closing }
    const aboutModal = document.getElementById("aboutModal");
    if (event.target === aboutModal) closeAboutModal();
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
        // 👇 PASTE location 2 RIGHT HERE, before the closing });
    const logoImg = document.getElementById("logoimg");
    if (logoImg) { logoImg.addEventListener("click", openAboutModal); logoImg.style.cursor = "pointer"; }
});


// 1. Add at the very end of the file:
function openAboutModal() {
    document.getElementById("aboutModal").style.display = "flex";
    document.body.style.overflow = "hidden";
}
function closeAboutModal() {
    document.getElementById("aboutModal").style.display = "none";
    document.body.style.overflow = "";
}



//------------------------------------

function songsavailable2() {
  document.getElementById("audio-player").style.display = "block";
  const container    = document.getElementById("songsavailablelist");
  const musicListDiv = document.getElementById("music-list");
  const btn          = document.getElementById("songavailable");

  if (container.style.display === "flex") {
    container.style.display = "none";
    musicListDiv.style.display = "flex";
    btn.textContent = "All Songs";
    queueModeActive = false; // ← exit queue mode when closing
    return;
  }

  musicListDiv.style.display = "none";
  container.style.display = "flex";
  container.style.flexDirection = "column";
  btn.textContent = "Back";

  // Build the flat queue once
  buildAllSongsQueue();
  queueModeActive = true; // ← activate queue mode

  let html = `<h5 class="noteh6" style="text-align:center;margin-bottom:12px;">
    All Songs — Tap to <span class="logo">pLaY</span>
  </h5>`;

  // Use queue index for onclick so next/prev works correctly
  allSongsQueue.forEach((item, i) => {
    html += `
      <div class="music-item" onclick="playQueueSong(${i})">
        <img src="${item.img}" alt="${item.name}" onerror="this.style.display='none'">
        <div class="music-info">
          <h5 style="font-size:10.5px;">${item.name}</h5>
          <p style="font-size:8px;color:#b3b3b3;">${item.artist}</p>
        </div>
        <button onclick="event.stopPropagation(); playQueueSong(${i})" class="gobtn">▶</button>
      </div>`;
  });

  container.innerHTML = html;
}

// Global function called from the All Songs list
function playQueueSong(index) {
  queueModeActive = true;
  playFromQueue(index);
}



