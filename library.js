const playlistContainer = document.getElementById("playlist-container");

const playlist = {
  title: {
    1: "Kadhal Veesum",
    2: "Thalapathy Hits",
    3: "Anirudh's Best",
    4: "Top Tamil Songs",
    5: "Mass Songs",
    6: "Romantic Tamil Songs",
    7: "Dance Hits",
    8: "Melody Mix",
    9: "Party Anthems",
    10: "Sad Tamil Songs",
  },
  songsinplaylist: {
    1: ["Celebration-Of-Varisu","Jimikki-Ponnu","Ranjithame","","","","","","","","","",],
    2: ["","","","","","","","","","","","",],
    3: ["","","","","","","","","","","","",],
    4: ["","","","","","","","","","","","",],
    5: ["","","","","","","","","","","","",],
    6: ["","","","","","","","","","","",],
    7: ["","","","","","","","","","","","",],
  }
};

function displayPlaylist() {
  playlistContainer.innerHTML = "";
  for (let i = 1; i <= Object.keys(playlist.title).length; i++) {
    playlistContainer.innerHTML += `
      <div class="playlist-item" onclick="displayPlaylistSongs(${i})">
        <div class="playlist-info">
          <h5>${playlist.title[i]}</h5>
        </div>
      </div>
    `;
  }
}

displayPlaylist();


function displayPlaylistSongs(playlistId) {
  const songs = playlist.songsinplaylist[playlistId];
  let songsHTML = "";
  for (let i = 0; i < songs.length; i++) {
    if (songs[i]) {
      songsHTML += `<p>${songs[i]}</p>`;
    }
    playlistContainer.innerHTML = `
    <div class="playlist-item">
    
    <div class="music-info">
      <h5>${playlist.title[playlistId]}</h5>
      ${songsHTML}
    </div>
    <button onclick="displayPlaylist()">Back to Playlists</button>
    </div>
  `;
  }
  
}