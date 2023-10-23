const library = document.getElementById('library');

const albums = [
  { artist: 'Artist Name', title: 'Super Cool Album 1', year: 2010 },
  { artist: 'Artist Name', title: 'Super Cool Album 2', year: 2015 },
  // ... other albums
];

function renderLibrary() {
  library.innerHTML = '';
  albums.forEach(album => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="https://f4.bcbits.com/img/a1770171322_10.jpg" alt="${album.title}">
      <h2>${album.artist} - ${album.title} (${album.year})</h2>
    `;
    library.appendChild(card);
  });
}

renderLibrary();
