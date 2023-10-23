export class Library {
  constructor() {
    this.albums = [];
    this.sortOrder = {
      artist: 1,
      year: 1,
    };
  }

  addAlbum(album) {
    this.albums.push(album);
  }

  render() {
    const libraryElement = document.getElementById('library');
    libraryElement.innerHTML = '';
    this.albums.forEach(album => {
      const card = album.render();
      libraryElement.appendChild(card);
    });
  }

  sortByArtist() {
    this.albums.sort((a, b) => {
      const artistA = a.artist.toLowerCase();
      const artistB = b.artist.toLowerCase();
      return artistA.localeCompare(artistB) * this.sortOrder.artist;
    });
    this.sortOrder.artist *= -1;
    this.render();
  }

  sortByYear() {
    this.albums.sort((a, b) => (a.year - b.year) * this.sortOrder.year);
    this.sortOrder.year *= -1;
    this.render();
  }
}
