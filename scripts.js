document.getElementById('sortArtist').addEventListener('click', function () {
    sortAlbums('artist');
  });
  document.getElementById('sortAlbum').addEventListener('click', function () {
    sortAlbums('album');
  });
  document.getElementById('sortYearAsc').addEventListener('click', function () {
    sortAlbums('yearAsc');
  });
  document.getElementById('sortYearDesc').addEventListener('click', function () {
    sortAlbums('yearDesc');
  });
  
  function sortAlbums(criteria) {
    const albums = Array.from(document.querySelectorAll('.album'));
    const sortedAlbums = albums.sort((a, b) => {
      const artistA = a.dataset.artist.toLowerCase();
      const artistB = b.dataset.artist.toLowerCase();
      const albumA = a.dataset.album.toLowerCase();
      const albumB = b.dataset.album.toLowerCase();
      const yearA = parseInt(a.dataset.year);
      const yearB = parseInt(b.dataset.year);
  
      switch (criteria) {
        case 'artist':
          return artistA.localeCompare(artistB);
        case 'album':
          return albumA.localeCompare(albumB);
        case 'yearAsc':
          return yearA - yearB;
        case 'yearDesc':
          return yearB - yearA;
        default:
          return 0;
      }
    });
  
    const main = document.querySelector('main');
    sortedAlbums.forEach(album => main.appendChild(album));
  }
  