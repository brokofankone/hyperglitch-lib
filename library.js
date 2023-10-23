import { Album } from './album.js';

export class Library {
  constructor() {
    this.albums = [];
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
}
