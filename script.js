// const musicList = document.getElementById('music-list');


// const availableMovies = {
//     title: {
//         1: 'Jananayagan',
//         2: 'Leo',
//         3: 'Varisu',
//         4: 'Jananayagan',
//         5: 'Leo',
//         6: 'Varisu',
//         7: 'Jananayagan',
//         8: 'Leo',
//         9: 'Varisu',
//         10: 'Jananayagan',
//         11: 'Leo',
//         12: 'Varisu',

//     },
//     artist: {
//         1: 'Ed Sheeran',
//         2: 'The Weeknd',
//         3: 'Dua Lipa',
//         4: 'Ed Sheeran',
//         5: 'The Weeknd',
//         6: 'Dua Lipa',
//         7: 'Ed Sheeran',
//         8: 'The Weeknd',
//         9: 'Dua Lipa',
//         10: 'Ed Sheeran',
//         11: 'The Weeknd',
//         12: 'Dua Lipa'
//     },
//     icon: {
//         1: 'icon/jananayagan.jpg',
//         2: 'icon/leo.jpg',
//         3: 'icon/leo.jpg',
//         4: 'icon/jananayagan.jpg',
//         5: 'icon/leo.jpg',
//         6: 'icon/leo.jpg',
//         7: 'icon/jananayagan.jpg',
//         8: 'icon/leo.jpg',
//         9: 'icon/leo.jpg',
//         10: 'icon/jananayagan.jpg',
//         11: 'icon/leo.jpg',
//         12: 'icon/leo.jpg'
//     }
// };
// for(let i = 1; i <= 12; i++){

//     musicList.innerHTML += `
    
//     <div class="music-item">
//         <img src="${availableMovies.icon[i]}" alt="${availableMovies.title[i]}">
//         <div class="music-info">
//             <h3>${availableMovies.title[i]}</h3>
//             <p>${availableMovies.artist[i]}</p>
            
//         </div>
//         <button onclick="playMusic(${i})" class=" gobtn"> ▶ </button>
//     </div>

//     `;
// }

// const searchInput = document.getElementById('search-input');
// const searchBtn = document.querySelector('.search-btn');
// searchBtn.addEventListener('click', () => {
//     const query = searchInput.value.toLowerCase();
//     const musicItems = document.querySelectorAll('.music-item');
//     musicItems.forEach(item => {
//         const title = item.querySelector('.music-info h3').textContent.toLowerCase();
//         const artist = item.querySelector('.music-info p').textContent.toLowerCase();
//         if (title.includes(query) || artist.includes(query)) {
//             item.style.display = 'flex';
//         }   else {
//             item.style.display = 'none';
//         }
//     });
// }
// );

// const songs = {
//     1: [
//         "Raavana Mavandaa",
//         "Thalapathy Kacheri",
//         "Oru Pere Varalaaru",
//         "Chella Magale",
//     ],
//     2: [
//         "Leo Theme",
//         "Naa Ready",
//         "Badass",
//         "Chella Magale",
//     ],
//     3: [
//         "Verithanam",
//         "Soul of Varisu",
//         "Vaa Vaathi",   
//         "Chella Magale",
//     ]
// };


//------------------------------------------


const musicList = document.getElementById('music-list');

const availableMovies = {
    title: {
        1: 'Jananayagan', 2: 'Leo',         3: 'Varisu',
        4: 'Jananayagan', 5: 'Leo',         6: 'Varisu',
        7: 'Jananayagan', 8: 'Leo',         9: 'Varisu',
        10: 'Jananayagan',11: 'Leo',         12: 'Varisu',
    },
    artist: {
        1: 'Ed Sheeran',  2: 'The Weeknd',  3: 'Dua Lipa',
        4: 'Ed Sheeran',  5: 'The Weeknd',  6: 'Dua Lipa',
        7: 'Ed Sheeran',  8: 'The Weeknd',  9: 'Dua Lipa',
        10: 'Ed Sheeran', 11: 'The Weeknd', 12: 'Dua Lipa',
    },
    icon: {
        1: 'icon/jananayagan.jpg', 2: 'icon/leo.jpg',         3: 'icon/leo.jpg',
        4: 'icon/jananayagan.jpg', 5: 'icon/leo.jpg',         6: 'icon/leo.jpg',
        7: 'icon/jananayagan.jpg', 8: 'icon/leo.jpg',         9: 'icon/leo.jpg',
        10: 'icon/jananayagan.jpg',11: 'icon/leo.jpg',        12: 'icon/leo.jpg',
    },
    songKey: {
        1: 1,  2: 2,  3: 3,
        4: 1,  5: 2,  6: 3,
        7: 1,  8: 2,  9: 3,
        10: 1, 11: 2, 12: 3,
    }
};

const songs = {
    1: ["Raavana Mavandaa", "Thalapathy Kacheri", "Oru Pere Varalaaru", "Chella Magale"],
    2: ["Leo Theme",        "Naa Ready",          "Badass",              "Chella Magale"],
    3: ["Verithanam",       "Soul of Varisu",      "Vaa Vaathi",          "Chella Magale"],
};

// ── Render all movie cards ──────────────────────────────────────────────────
for (let i = 1; i <= 12; i++) {
    musicList.innerHTML += `
        <div class="music-item">
            <img src="${availableMovies.icon[i]}" alt="${availableMovies.title[i]}">
            <div class="music-info">
                <h3>${availableMovies.title[i]}</h3>
                <p>${availableMovies.artist[i]}</p>
            </div>
            <button onclick="playMusic(${i})" class="gobtn">▶</button>
        </div>
    `;
}

// ── Song list modal ─────────────────────────────────────────────────────────
document.body.insertAdjacentHTML('beforeend', `
    <div id="song-modal-overlay" onclick="closeModal()"></div>
    <div id="song-modal">
        <div id="song-modal-header">
            <div id="song-modal-info">
                <img id="song-modal-img" src="" alt="">
                <div>
                    <h2 id="song-modal-title"></h2>
                    <p id="song-modal-artist"></p>
                </div>
            </div>
            <button id="song-modal-close" onclick="closeModal()">✕</button>
        </div>
        <ul id="song-modal-list"></ul>
    </div>

    <style>
        #song-modal-overlay {
            display: none;
            position: fixed; inset: 0;
            background: rgba(0,0,0,0.7);
            z-index: 2000;
            backdrop-filter: blur(4px);
        }
        #song-modal {
            display: none;
            position: fixed;
            bottom: 0; left: 0; right: 0;
            background: #1c1c1c;
            border-radius: 20px 20px 0 0;
            border-top: 2px solid #1db954;
            z-index: 2001;
            padding: 24px;
            max-height: 70vh;
            overflow-y: auto;
            animation: slideUp 0.3s ease;
        }
        @keyframes slideUp {
            from { transform: translateY(100%); }
            to   { transform: translateY(0);    }
        }
        #song-modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
        }
        #song-modal-info {
            display: flex;
            align-items: center;
            gap: 14px;
        }
        #song-modal-img {
            width: 56px; height: 56px;
            border-radius: 10px;
            object-fit: cover;
            border: 2px solid #1db954;
        }
        #song-modal-title {
            font-size: 18px;
            font-weight: 700;
            color: #fff;
            margin-bottom: 3px;
        }
        #song-modal-artist {
            font-size: 13px;
            color: #b3b3b3;
        }
        #song-modal-close {
            background: #282828;
            border: none;
            color: #b3b3b3;
            width: 34px; height: 34px;
            border-radius: 50%;
            font-size: 16px;
            cursor: pointer;
            transition: background 0.2s, color 0.2s;
        }
        #song-modal-close:hover { background: #1db954; color: #000; }
        #song-modal-list {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        #song-modal-list li {
            display: flex;
            align-items: center;
            gap: 14px;
            background: #282828;
            border-radius: 10px;
            padding: 14px 16px;
            cursor: pointer;
            transition: background 0.2s, border-color 0.2s;
            border: 1px solid transparent;
        }
        #song-modal-list li:hover {
            background: #333;
            border-color: #1db954;
        }
        #song-modal-list li .song-num {
            font-size: 13px;
            color: #1db954;
            font-weight: 700;
            width: 20px;
            text-align: center;
        }
        #song-modal-list li .song-name {
            font-size: 15px;
            color: #fff;
            font-weight: 500;
            flex: 1;
        }
        #song-modal-list li .song-play {
            font-size: 12px;
            color: #b3b3b3;
        }
        #song-modal-list li:hover .song-play { color: #1db954; }
        .gobtn {
            background: #1db954;
            color: #000;
            border: none;
            border-radius: 50%;
            width: 36px; height: 36px;
            font-size: 14px;
            cursor: pointer;
            margin-right: 12px;
            flex-shrink: 0;
            font-weight: 700;
            transition: background 0.2s, transform 0.15s;
        }
        .gobtn:hover { background: #1ed760; transform: scale(1.1); }
    </style>
`);

// ── Open modal ─────────────────────────────────────────────────────────────
function playMusic(i) {
    const key    = availableMovies.songKey[i];
    const title  = availableMovies.title[i];
    const artist = availableMovies.artist[i];
    const icon   = availableMovies.icon[i];
    const list   = songs[key];

    document.getElementById('song-modal-img').src           = icon;
    document.getElementById('song-modal-img').alt           = title;
    document.getElementById('song-modal-title').textContent  = title;
    document.getElementById('song-modal-artist').textContent = artist;

    const ul = document.getElementById('song-modal-list');
    ul.innerHTML = list.map((name, idx) => `
        <li onclick="playSong('${name}', '${title}')">
            <span class="song-num">${idx + 1}</span>
            <span class="song-name">${name}</span>
            <span class="song-play">▶</span>
        </li>
    `).join('');

    document.getElementById('song-modal-overlay').style.display = 'block';
    document.getElementById('song-modal').style.display         = 'block';
}

function closeModal() {
    document.getElementById('song-modal-overlay').style.display = 'none';
    document.getElementById('song-modal').style.display         = 'none';
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ── Individual song click ──────────────────────────────────────────────────
function playSong(songName, movieTitle) {
    alert(`▶ Now Playing: "${songName}" from ${movieTitle}`);
    // Replace with your actual audio player logic
}

// ── Search bar ─────────────────────────────────────────────────────────────
const searchInput = document.querySelector('.search-bar input');
const searchBtn   = document.querySelector('.search-btn');

function doSearch() {
    const query = searchInput.value.trim().toLowerCase();
    const items = document.querySelectorAll('.music-item');

    let found = 0;
    items.forEach(item => {
        const title  = item.querySelector('.music-info h3').textContent.toLowerCase();
        const artist = item.querySelector('.music-info p').textContent.toLowerCase();
        const match  = title.includes(query) || artist.includes(query);
        item.style.display = match ? 'flex' : 'none';
        if (match) found++;
    });

    let noResult = document.getElementById('no-result');
    if (!noResult) {
        noResult = document.createElement('div');
        noResult.id = 'no-result';
        noResult.style.cssText = 'text-align:center;padding:50px 20px;color:#b3b3b3;width:100%;';
        noResult.innerHTML = `<div style="font-size:48px;margin-bottom:16px;">🔍</div>
            <h3 style="color:#fff;margin-bottom:8px;">No songs found</h3>
            <p>Try a different title or artist name.</p>`;
        musicList.appendChild(noResult);
    }
    noResult.style.display = (found === 0 && query !== '') ? 'block' : 'none';
}

searchBtn.addEventListener('click', doSearch);
searchInput.addEventListener('input', doSearch);
searchInput.addEventListener('keydown', e => { if (e.key === 'Enter') doSearch(); });






//-------------------------------------------


// function playMusic(index) {
//     const songList = songs[index];
//     let songOptions = '';
//     for (let i = 0; i < songList.length; i++) {
//         songOptions += `${i + 1}. ${songList[i]}\n`;
//     }
    // const songChoice = prompt(`Select a song to play:\n${songOptions}`);
    // const songIndex = parseInt(songChoice) - 1;
    // if (songIndex >= 0 && songIndex < songList.length) {
    //     alert(`Playing: ${songList[songIndex]} from ${availableMovies.title[index]} by ${availableMovies.artist[index]}`);
    // } else {
    //     alert('Invalid song selection.');
    // }
// for(let i = 1; i <= 3; i++){

//     musicList.innerHTML += `
    
//     <div class="music-item">
//         <img src="${availableMovies.icon[i]}" alt="${availableMovies.title[i]}">
//         <div class="music-info">
//             <h3>${availableMovies.title[i]}</h3>
//             <p>${availableMovies.artist[i]}</p>
            
//         </div>
//         <button onclick="playMusic(${i})" class=" gobtn"> ▶ </button>
//     </div>

//     `;
// }






